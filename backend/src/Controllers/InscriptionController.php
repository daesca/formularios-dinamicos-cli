<?php


namespace App\Controllers;


use App\Models\Campaign;
use App\Models\Document;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class InscriptionController extends Controller
{

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