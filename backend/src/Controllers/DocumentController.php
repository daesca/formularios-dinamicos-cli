<?php


namespace App\Controllers;


use App\Models\Document;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

class DocumentController extends Controller
{
    protected array $messages;
    function validate(Request $request, ResponseInterface $response, $args)
    {
        $doc = $request->getParsedBody()["document"];
        $typeDocument = $request->getParsedBody()["typeDocument"];
        $document = Document::where('document', $doc)->first();
        if (! is_null($document)) {
            $values = $document->values()->where("name", "email")->first();
            $type = $document->values()->where("name", "typeDocument")->first();
            if($typeDocument !== $type->value) {
                $this->messages = [
                    "code" => 200,
                    "message" => "El tipo de documento no es el mismo al almacenado y relacionado al documento {$doc}",
                    "data" => []
                ];

                $response->getBody()->write(json_encode($this->messages));
                return $response->withHeader('Content-Type', 'application/json');

            }
            $user = [
                "document" => $document->document,
                "email" => $values->value
            ];
            $this->messages = [
                "code" => 200,
                "message" => "El usuario ya tiene información",
                "data" => [$user]
            ];

            $response->getBody()->write(json_encode($this->messages));

            return $response->withHeader('Content-Type', 'application/json');
        }
        $this->messages = [
            "code" => 404,
            "message" => "El usuario no tiene información asociada.",
            "data" => array()
        ];

        $response->getBody()->write(json_encode($this->messages));

        return $response->withHeader('Content-Type', 'application/json');
    }
}