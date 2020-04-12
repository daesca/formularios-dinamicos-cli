<?php
declare(strict_types=1);

use Slim\App;

return function (App $app) {

    $app->get('/', 'HomeController:home')->setName("home");
    $app->group('/campaign', function (\Slim\Routing\RouteCollectorProxy $group) {
        $group->get('/home', 'CampaignController:home')->setName("home");
        $group->post('/store', 'CampaignController:store')->setName("store");
        $group->post('/update', 'CampaignController:update')->setName("update");
        $group->get('/edit/{id}', 'CampaignController:edit')->setName("edit");
        $group->get('/remove/{id}', 'CampaignController:remove')->setName("remove");
        $group->get('/copy/{id}', 'CampaignController:copy')->setName("copy");
        $group->get('/render/{id}', 'CampaignController:renders')->setName("renders");
    });
    $app->group('/campaign', function (\Slim\Routing\RouteCollectorProxy $group) {
        $group->post('/field/store', 'FieldController:store');
        $group->post('/field/remove/{id}', 'FieldController:remove');
    });


    
       
};