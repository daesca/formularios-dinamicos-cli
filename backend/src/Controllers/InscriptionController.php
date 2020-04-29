<?php


namespace App\Controllers;


use App\Models\Campaign;
use App\Models\Document;
use App\Models\ResponseCampagin;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use function DI\string;

class InscriptionController extends Controller
{

    public function get(Request $request, Response $response, $args) : ?Response
    {
        $message = [];
        try {
            $campaign = Campaign::where('code',$args['code'])->first();
            if (is_null($campaign)) {
                $message = [
                    "code" => "400",
                    "message" => "Campaña no encontrada.",
                ];
                $response->getBody()->write(json_encode($message));
                return $response->withHeader('Content-Type', 'application/json');
            }
            $fechaStart = Carbon::createFromFormat('Y-m-d', $campaign->startDate);
            $fechaEnd = Carbon::createFromFormat('Y-m-d', $campaign->finalDate);
            $fechaNow = CarbonImmutable::now('America/Bogota');

            if ($campaign->published and $fechaStart->isBefore($fechaNow) and $fechaEnd->isAfter($fechaNow)) {
                $message = [
                    "code" => "200",
                    "message" => "Campaña activa.",
                ];
                $response->getBody()->write(json_encode($message));
                return $response->withHeader('Content-Type', 'application/json');
            }
            $message = [
                "code" => "400",
                "message" => "Campaña desactivada, no iniciada o paso el tiempo limite.",
            ];
            $response->getBody()->write(json_encode($message));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $exception) {
            $message = [
                "code" => "500",
                "message" => $exception->getMessage(),
            ];
            $response->getBody()->write(json_encode($message));
            return $response->withHeader('Content-Type', 'application/json');
        }
    }

    public function store(Request $request, Response $response) {
        $errors = [];
        $corrects = [];
        $codecampaign = $request->getParsedBody()['codecampaign'];
        $documentAspirant = $request->getParsedBody()['documentAspirant'];
        try {
            $campaign = Campaign::where('code', $codecampaign)->first();
            $fields = collect($campaign->fields->toArray());
            $document = Document::where('document', $documentAspirant)->first();
            if (is_null($document)) {
                $document = Document::create(['document' => $documentAspirant]);
            }
            foreach ($request->getParsedBody()['answers'] AS $k => $v) {
                $field = (object) $fields->where('id', '=', $k)->first();
                $evaluateField = evaluateField($field, $v['answer']);
                if (! is_null($evaluateField)) {
                    array_push($errors, $evaluateField);
                    continue;
                }
                array_push($corrects, [
                    'campaign_id' => $campaign->id,
                    'field_id' => $field->id,
                    'document_id' => $document->id,
                    'value' => is_array($v['answer'])?implode(",", $v['answer']):$v['answer'],
                    'name' => $field->name

                ]);
            }
            if (count($errors) > 0) {
                $message = [
                    "code" => "501",
                    "message" => "Contiene errores el envio de la información.",
                    "data" => [
                        "errors" => $errors
                    ]
                ];
                $response->getBody()->write(json_encode($message));
                return $response->withHeader('Content-Type', 'application/json');
            }
            if (ResponseCampagin::insert($corrects)) {
                $message = [
                    "code" => "200",
                    "message" => "Se creo correctamente la preinscripción.",
                    "data" => []
                ];
                $response->getBody()->write(json_encode($message));
                return $response->withHeader('Content-Type', 'application/json');
            }
            $message = [
                "code" => "500",
                "message" => "Se produjo un error a la creacion del registro.",
                "data" => []
            ];
            $response->getBody()->write(json_encode($message));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $exception) {
            die("[ERROR] Error for ". $exception->getMessage());
        }

    }

    public function getRenderWithDataOfDocument(Request $request, Response $response)
    {
        $arrayRender = [];
        $arrayItem = null;
        $campagin = Campaign::where('code', $request->getParsedBody()['code'])->first();
        $document = Document::where('document', $request->getParsedBody()['document'])->first();
        $fields = collect($campagin->fields->toArray());

        if (! is_null($campagin) and !is_null($document)) {
            foreach ($document->values as $res) {
                $aux = $fields
                    ->where('name', '=', $res->name)
                    ->where('defaultForm', '=', 1)
                    ->first();
                $arrayItem['typeField'] = $aux['typeField'];
                unset($aux['typeField']);
                unset($aux['created_at']);
                unset($aux['updated_at']);
                unset($aux['pivot']);
                $arrayItem['configurations'] = $aux;
                $arrayItem['configurations']['defaultValue'] = $res->value;
                $arrayItem['idField'] = $aux['id'];
                unset($arrayItem['configurations']['id']);
                array_push($arrayRender, $arrayItem);
            }
            $message = [
                "code" => 200,
                "message" => "Información previa del usuario y el render personalizado",
                "data" => [
                    "idcampaign" => $campagin->id,
                    "codecampaign" => $campagin->code,
                    "configDefaultForm" => $arrayRender,
                    "configForm" => json_decode($campagin->render)
                ]
            ];
            $response->getBody()->write(json_encode($message));
            return $response->withHeader('Content-Type', 'application/json');
        }
        $message = [
            "code" => 404,
            "message" => "No sé encontro campaña o usuario",
            "data" => []
        ];
        $response->getBody()->write(json_encode($message));
        return $response;
    }
}