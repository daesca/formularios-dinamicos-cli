<?php
declare(strict_types = 1);

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use App\Models\Campaign;


class FieldController extends Controller{
    protected $idFields = [];
    protected $configDefaultForm = [];
    protected $configForm = [];

    public function store(Request $request, Response $response){
        $this->container->get(LoggerInterface::class)->debug(CampaignController::class, ['message' => "Agregando una nueva campaña"]);

        $newForm = $request->getParsedBody();
        try {
            $campaign = Campaign::where("code", $newForm["codecampaign"])->first();
            foreach ($newForm['configDefaultForm'] as $key => $value) {
                $saveField = saveField($value);
                array_push($this->configDefaultForm, $saveField);
                array_push($this->idFields, $saveField['idField']);
            }

            $campaign->renderDefault = json_encode($this->configDefaultForm);

            if (count($newForm['configForm']) > 0) {
                foreach ($newForm['configForm'] as $key => $value) {
                    $saveField = saveField($value, false);
                    array_push($this->configForm, $saveField);
                    array_push($this->idFields, $saveField['idField']);
                }
                $campaign->render = json_encode($this->configForm);
            }
            $campaign->save();
            $campaign->fields()->sync($this->idFields);

            $this->container->get(LoggerInterface::class)
                ->error(
                    CampaignController::class,
                    [
                        'message' => 'Fiels saved succefully'
                    ]
                );

            $result = array('code' => 200, 'status' => true, 'message' => 'Fiels saved succefully');
            $result = json_encode($result);
            $response->getBody()->write($result);
            return $response->withHeader('Content-Type', 'application/json');

        } catch (\Exception $exception) {
            $result = array('code' => 500, 'status' => false, 'message' => 'The campaign does not edited');
            $this->container->get(LoggerInterface::class)
                ->error(
                    CampaignController::class,
                    [
                        'message' => $exception->getMessage()
                    ]
                );

            $result = json_encode($result);
            $response->getBody()->write($result);
            return $response->withHeader('Content-Type', 'application/json');
        }
    }

}