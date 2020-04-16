<?php


namespace App\Controllers;


use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class InscriptionController extends Controller
{

    public function store(Request $request, Response $response) {

        $response->getBody()->write(json_encode($request->getParsedBody()));
        return $response->withHeader('Content-Type', 'application/json');

    }

}