<?php


namespace App\Controllers;


use App\Models\Document;
use App\Models\Field;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class InscriptionController extends Controller
{

    public function store(Request $request, Response $response) {

        echo "<pre>";
        $campaign_id = $request->getParsedBody()['idcampaign'];
        $documentAspirant = $request->getParsedBody()['documentAspirant'];
        try {
            if (! Document::where('document', $documentAspirant)->exists()) {
                Document::create(['document' => $documentAspirant]);
            }
            foreach ($request->getParsedBody()['answers'] AS $k => $v) {
                $field = Field::findOrFail($k);
                if ($field->required == 1 and !empty($v['answer'])) {
                    var_dump("[Requeridos]");
                    if ($field->typeField == 'multipleField') {
                       if ($field->type == 'text' and is_string($v['answer'])) {
                            var_dump("[{$field->typeField}] Value del id: {$k} respuesta: {$v['answer']}");
                       }
                       if($field->type == 'number' and is_numeric($v['answer'])) {
                           var_dump("[{$field->typeField}] Value del id: {$k} respuesta: {$v['answer']}");
                       }
                       if($field->type == 'date') {
                           var_dump("[{$field->typeField}] Value del id: {$k} respuesta: {$v['answer']}");
                       }
                   } elseif ($field->typeField == 'selectField') {
                        var_dump("[{$field->typeField}] value del id {$k} respuesta {$v['answer']}");
                   } elseif ($field->typeField == 'checkField') {
                        if (is_array($v['answer'])) {
                            var_dump("[{$field->typeField}] Value id {$k} ". implode(",", $v['answer']));
                            continue;
                        }
                        var_dump("[{$field->typeField}] value del id {$k} respuesta {$v['answer']}");
                   } elseif($field->typeField == 'textBox') {
                        var_dump("[{$field->typeField}] value del id {$k} respuesta {$v['answer']}");
                   } elseif(in_array($field->typeField, ["countriesField", "departmentsField", "townsField", "neighborhoodField"])) {
                        var_dump("[{$field->typeField}] value del id {$k} respuesta {$v['answer']}");
                   }
                } elseif ($field->required == 0 and !empty($v['answer'])) {
                    var_dump("[No Requeridos]");
                    if ($field->typeField == 'multipleField') {
                        if ($field->type == 'text' and is_string($v['answer'])) {
                            var_dump("[{$field->typeField}] Value del id: {$k} respuesta: {$v['answer']}");
                        }
                        if($field->type == 'number' and is_numeric($v['answer'])) {
                            var_dump("[{$field->typeField}] Value del id: {$k} respuesta: {$v['answer']}");
                        }
                        if($field->type == 'date') {
                            var_dump("[{$field->typeField}] Value del id: {$k} respuesta: {$v['answer']}");
                        }
                    }

                } else {
                    var_dump("[ERROR] Error for id {$k} vacio");
                }
            }
        } catch (\Exception $exception) {
            die("[ERROR] Error for ". $exception->getMessage());
        }
        die;
        $response->getBody()->write(json_encode($request->getParsedBody()));
        return $response->withHeader('Content-Type', 'application/json');

    }

}