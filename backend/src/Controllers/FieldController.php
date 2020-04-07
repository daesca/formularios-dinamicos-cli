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

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Agregando una nueva campaña"]);

        $newForm = $request->getParsedBody();
        $campaign = Campaign::findOrFail($newForm["idcampaign"]);


        // die();

        $result = array('code' => 200, 'status' => true, 'message' => 'Fiels saved succefully');

        if(isset($newForm["configForm"])){

            foreach ($newForm["configForm"] as $key => $value) {
                
                $newField = new Field();
                
                // print_r($value["configurations"]);
                foreach ($value["configurations"] as $key1 => $value1) {
                    
                    // print_r($value["configurations"]);
                    if($value1 != ''){
                        
                        $newField->$key1 = $value1; 
                        
                    }
                    //  echo $value1 . "\n";
                    
                }
                
                if(!$newField->save()){
                    
                    $result = array('code' => 500, 'status' => false, 'message' => 'The campaign does not edited');
                break;
                
                }
            
            }
            /** Asociacion con la tabla pivote */

            $fieldsInserted = Field::select('id')->orderBy('id', 'desc')->limit(count($newForm["configForm"]))->get();

            foreach ($fieldsInserted as $key => $value) {

                $campaign->fields()->attach($value->id);
            }
            $campaign->render = json_encode($newForm["configForm"]);;

        }

        $campaign->renderDefault = json_encode($newForm["configDefaultForm"]);;

        $campaign->save();

        $result = json_encode($result);

        $response->getBody()->write($result);

        return $response->withHeader('Content-Type', 'application/json');
        

    }

}