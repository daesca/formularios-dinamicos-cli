<?php


namespace App\Controllers;


use App\Models\Campaign;
use App\Models\Document;
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

        echo "<pre>";
        $campaign_id = $request->getParsedBody()['idcampaign'];
        $documentAspirant = $request->getParsedBody()['documentAspirant'];
        try {
            $campaign = Campaign::findOrFail($campaign_id);

            $fields = collect($campaign->fields->toArray());

            if (! Document::where('document', $documentAspirant)->exists()) {
                Document::create(['document' => $documentAspirant]);
            }
            foreach ($request->getParsedBody()['answers'] AS $k => $v) {
                $field = (object) $fields->where('id', $k)->first();
                var_dump($v);
                var_dump(evaluateField($field, $v['answer']));
            }
            die;
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
        $fields = $campagin->fields;
        if (! is_null($campagin) and !is_null($document)) {
            foreach ($document->values as $res) {
                $aux = $fields->where('name', $res->name)->first()->toArray();
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

        $response->getBody()->write("Jola");
        return $response;
    }
}