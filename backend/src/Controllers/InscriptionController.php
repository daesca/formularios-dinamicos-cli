<?php


namespace App\Controllers;


use App\Models\Campaign;
use App\Models\Document;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

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
}