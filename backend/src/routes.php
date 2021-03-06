<?php
declare(strict_types=1);

use Slim\App;
use Slim\Routing\RouteCollectorProxy;

return function (App $app) {

    $app->get('/', 'HomeController:home')->setName("home");

    $app->group('/campaign', function (RouteCollectorProxy $group) {
        $group->get('/home', 'CampaignController:home')->setName("home");
        $group->post('/store', 'CampaignController:store')->setName("store");
        $group->post('/update', 'CampaignController:update')->setName("update");
        $group->get('/edit/{code}', 'CampaignController:edit')->setName("edit");
        $group->get('/remove/{code}', 'CampaignController:remove')->setName("remove");
        $group->get('/copy/{id}', 'CampaignController:copy')->setName("copy");
        $group->get('/render/{code}', 'CampaignController:renders')->setName("renders");
    });
    $app->group('/field', function (RouteCollectorProxy $group) {
        $group->post('/store', 'FieldController:store');
        $group->post('/remove/{id}', 'FieldController:remove');
    });

    $app->group('/inscription', function (RouteCollectorProxy $group){
        $group->get('/get/{code}' , 'InscriptionController:get');
        $group->post('/validate/document' , 'DocumentController:validateDocument');
        $group->post('/validate/code', 'DocumentController:validateCode');
        $group->post('/save', 'InscriptionController:store');
        $group->post("/get/data/document",
            "InscriptionController:getRenderWithDataOfDocument");
        $group->post('/validate/expedition', 'DocumentController:validateExpeditionDate');
    });

    $app->group('/sapiencia', function (RouteCollectorProxy $group){
        $group->get('/get/countries/all' , 'SapienciaDataController:allCountries');
        $group->get('/get/departments/all' , 'SapienciaDataController:allDepartments');
        $group->get('/get/neighborhoods/all' , 'SapienciaDataController:allNeighborhoods');
        $group->get('/get/communes/all' , 'SapienciaDataController:allCommunes');
        $group->get('/get/streettypes/all' , 'SapienciaDataController:allStreettypes');
        $group->get('/get/towns/all/{idDepartment}' , 'SapienciaDataController:allTowns');
        $group->get('/get/schools/all' , 'SapienciaDataController:allSchools');
        
    });

       
};