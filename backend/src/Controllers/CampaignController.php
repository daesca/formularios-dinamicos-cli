<?php 
declare(strict_types = 1);

namespace App\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;

use App\Models\Campaign;

class CampaignController extends Controller{

    public function home(Request $request, Response $response){

        $response->getBody()->write(Campaign::where('deleted', 0)->get()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function store(Request $request, Response $response){

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Agregando una nueva campaña"]);

        $newCampaignData = $request->getParsedBody();
        $newCampaignData["code"] = rand(100000, 999999);
        // print_r($newCampaignData);

        // die();

        $newCampaign = Campaign::create($newCampaignData);
        // $newCampaign->code = rand(0, 99999);
        if($newCampaign->save()){

            $result = array('code' => 200, 'status' => true, 'message' => 'Campaign created succefully');

        }else{

            $result = array('code' => 500, 'status' => false, 'message' => 'The campaign does not created');

        }
        $result = json_encode($result);

        $response->getBody()->write($result);

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function edit(Request $request, Response $response, $args){

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Recuperando campaña con codigo: ". $args["code"] ." para edicion"]);
        try {
            $campaign = Campaign::where('code',$args['code'])->first();
            
            $result = array(
                'code' => 200,
                'status' => true,
                'message' => 'Campaign copy saved succefully',
                'data' => $campaign->toArray());

            $result = json_encode($result);
            $response->getBody()->write($result);
            return $response->withHeader('Content-Type', 'application/json');

        } catch (ModelNotFoundException $e){
            $result = array('code' => 404, 'status' => false, 'message' => $e->getMessage());
            $response->getBody()->write($result);
            return $response->withHeader('Content-Type', 'application/json');
        }




    }

    public function update(Request $request, Response $response){
        
        $updatedInfo = $request->getParsedBody();

        // print_r($updatedInfo["id"]);

        // die();

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Editando campaña con id: ". $updatedInfo["id"]]);

        if($campaign = Campaign::findOrFail($updatedInfo["id"])){

            $campaign->name = $updatedInfo['name'];
            $campaign->category = $updatedInfo['category'];
            $campaign->startDate = $updatedInfo['startDate'];
            $campaign->finalDate = $updatedInfo['finalDate'];
            $campaign->totalAspirants = $updatedInfo['totalAspirants'];

            if($campaign->save()){

                $result = array('code' => 200, 'status' => true, 'message' => 'Campaign edited succefully');
    
            }else{
    
                $result = array('code' => 500, 'status' => false, 'message' => 'The campaign does not edited');
    
            }

        }else{

            $result = array('code' => 404, 'status' => false, 'message' => 'this register does not exist');

        }

        $result = json_encode($result);

        $response->getBody()->write($result);

        return $response->withHeader('Content-Type', 'application/json');

    }

    public function copy(Request $request, Response $response, $args){

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Copiando campaña con codigo: ". $args["code"]]);

        try {

            $campaign = Campaign::find($args['id']);

            $newCampaign = $campaign->replicate()->fill(
                [
                    'code' => rand(100000, 999999)
                ]
            );

            $result = array('code' => 200, 'status' => true, 'message' => 'Campaign copy saved succefully');

            if(! $newCampaign->save()){

                $result = array('code' => 408, 'status' => false, 'message' => 'Error to save the campaign copy');
            }
            $result = json_encode($result);
            $response->getBody()->write($result);
            return $response->withHeader('Content-Type', 'application/json');

        } catch (ModelNotFoundException $exception){

            $result = array('code' => 404, 'status' => false, 'message' => $exception->getMessage());
            $result = json_encode($result);
            $response->getBody()->write($result);
            return $response->withHeader('Content-Type', 'application/json');
        }



    }

    // public function copy(Request $request, $id){
    //     $campaign = Campaign::find($id);

    //     $copy = $campaign->replicate()->fill(
    //         [
    //             'code' => rand(100000, 999999)
    //         ]
    //     );

    //     if ($copy->save()) {
    //         $request->session()->flash('success', 'Good copy campaign');
    //         return redirect(route('campaign.home'));
    //     }
    //     $request->session()->flash('errors', 'Errors copy campaign');
    //     return redirect(route('campaign.home'));
    // }

    public function remove(Request $request, Response $response, $args){

        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Removiendo campaña con codigo: ". $args["code"]]);

        $campaign = Campaign::where('code',$args['code'])->first();

        $campaign->deleted = 1;

        if($campaign->save()){

            $result = array('code' => 200, 'status' => true);

        }else{

            $result = array('code' => 500, 'status' => false);

        }  
        
        $result = json_encode($result);

        $response->getBody()->write($result);
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function renders(Request $request, Response $response, $args){

        $campaign = Campaign::where('code',$args['code'])->first();

        $result = array();

        // if(!is_null($campaign->renderDefault)){
            $result["configDefaultForm"] = $campaign->renderDefault;

        // }
        // if(!is_null($campaign->render)){

            $result["configForm"] = $campaign->render;

        // }

        $result = json_encode($result);
        $response->getBody()->write($result);
        return $response->withHeader('Content-Type', 'application/json');

    }


}