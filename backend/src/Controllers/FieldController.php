<?php
declare(strict_types = 1);

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Routing\RouteContext;
use App\Models\Field;
use App\Models\Campaign;


class FieldController extends Controller{

    public function store(Request $request, Response $response){

        /* Test */

        // $campaign = Campaign::findOrFail(12);
        // if(!$campaign->fields()->find(84)){

        //     echo "No se encuentra el field";
            
        // }else{
            
        //     echo "Se encuentra el field";

        // }

        // die();

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Agregando una nueva campaña"]);

        $newForm = $request->getParsedBody();
        $campaign = Campaign::findOrFail($newForm["idcampaign"]);


        // die();

        $result = array('code' => 200, 'status' => true, 'message' => 'Fiels saved succefully');

        $newDefaultFormField = true;
        $newFormField = true;

        $countFieldsDefaultForm = count($newForm["configDefaultForm"]);

        foreach ($newForm["configDefaultForm"] as $key => $value) {
                    
                if(array_key_exists("idField", $newForm["configDefaultForm"][$key])){

                    $saveOrEditFieldDefault = Field::find($newForm["configDefaultForm"][$key]["idField"]);

                    $nameField = "campaign-". $newForm["idcampaign"] . "-defaultForm-" . $newForm["configDefaultForm"][$key]["idField"];

                    $saveOrEditFieldDefault->name = $nameField;

                    $newForm["configDefaultForm"][$key]["configurations"]["name"] = $nameField;

                    $newDefaultFormField = false;

                }else{

                    $saveOrEditFieldDefault = new Field();

                    $nameField = "campaign-". $newForm["idcampaign"] . "-defaultForm-" . $key;

                    $saveOrEditFieldDefault->name = $nameField;

                    $newForm["configDefaultForm"][$key]["configurations"]["name"] = $nameField;

                }

                // echo "Id a evaluar: " . $saveOrEditFieldDefault->id;

                $saveOrEditFieldDefault->typeField = $newForm["configDefaultForm"][$key]["typeField"];
                $saveOrEditFieldDefault->deleted = $newForm["configDefaultForm"][$key]["deleted"];
                
                // print_r($value["configurations"]);
                foreach ($value["configurations"] as $key1 => $value1) {
                    
                    // print_r($value["configurations"]);
                    if($value1 != ''){

                        // echo $key1 .":". $value1 ."\n";

                        // print_r($saveOrEditFieldDefault);

                        // die();
                        
                        $saveOrEditFieldDefault->$key1 = $value1; 
                        
                    }
                    //  echo $value1 . "\n";
                    
                }  

                $saveOrEditFieldDefault->defaultForm = 1;
                
                if(!$saveOrEditFieldDefault->save()){

                    // echo "No funciona";
                    
                    $result = array('code' => 500, 'status' => false, 'message' => 'The campaign does not edited');

                    break;
                
                }
                // else{

                //     echo "funciona. Nuevo valor: " . $saveOrEditFieldDefault->weight ." id: ". $saveOrEditFieldDefault->id ."\n";


                // }

                if($newDefaultFormField){

                    $lastFieldDefault = Field::all()->last()->id;

                    $newForm["configDefaultForm"][$key]["idField"] = $lastFieldDefault;

                }
            
        }

        $countFieldConfigForm = 0;

        if(isset($newForm["configForm"])){

            $countFieldConfigForm = count($newForm["configForm"]);

            foreach ($newForm["configForm"] as $key => $value) {
                
                if(array_key_exists("idField", $newForm["configForm"][$key])){

                    $saveOrEditField = Field::find($newForm["configForm"][$key]["idField"]);

                    $nameField = "campaign-". $newForm["idcampaign"] . "-custom-" . $newForm["configForm"][$key]["idField"];

                    $saveOrEditField->name =  $nameField;

                    $newForm["configForm"][$key]["configurations"]["name"] = $nameField;

                    $newFormField = false;

                }else{

                    $saveOrEditField = new Field();

                    $nameField = "campaign-". $newForm["idcampaign"] . "-custom-" . $key;

                    $saveOrEditField->name =  $nameField;

                    $newForm["configForm"][$key]["configurations"]["name"] = $nameField;

                }

                $saveOrEditField->typeField = $newForm["configForm"][$key]["typeField"];
                $saveOrEditField->deleted = $newForm["configForm"][$key]["deleted"];
                
                // print_r($value["configurations"]);
                foreach ($value["configurations"] as $key1 => $value1) {
                    
                    // print_r($value["configurations"]);
                    if($value1 != ''){
                        
                        $saveOrEditField->$key1 = $value1; 
                        
                    }
                    //  echo $value1 . "\n";
                    
                }

                $saveOrEditField->defaultForm = 0;
                
                if(!$saveOrEditField->save()){
                    
                    $result = array('code' => 500, 'status' => false, 'message' => 'The campaign does not edited');

                    break;
                
                }

                if($newFormField){

                    $lastField = Field::all()->last()->id;
                    
                    $newForm['configForm'][$key]['idField'] = $lastField;
                    
                }
                
            }


            
        }
        
        /** Asociacion con la tabla pivote */

        $totalFields = $countFieldsDefaultForm + $countFieldConfigForm;
        

        $fieldsInserted = Field::select('id')->orderBy('id', 'desc')->limit($totalFields)->get();

        foreach ($fieldsInserted as $key => $value) {

            if(!$campaign->fields()->find($value->id)){

                $campaign->fields()->attach($value->id);

            }

        }

        $campaign->render = json_encode($newForm["configForm"]);


        /* Guardando el render */

        $campaign->renderDefault = json_encode($newForm["configDefaultForm"]);;

        $campaign->save();

        $result = json_encode($result);

        $response->getBody()->write($result);

        return $response->withHeader('Content-Type', 'application/json');
        

    }

}