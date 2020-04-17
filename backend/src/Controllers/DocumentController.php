<?php


namespace App\Controllers;


use App\Models\Codes;
use App\Models\Document;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class DocumentController extends Controller
{
    protected array $messages;

    function validateDocument(Request $request, Response $response, $args)
    {
        $doc = $request->getParsedBody()["document"];
        $document = Document::where('document', $doc)->first();
        if (!is_null($document)) {
            $values = $document->values()->where("name", "email")->first();
            $user = [
                "document" => $document->document,
                "email" => $values->value
            ];
            $code = bin2hex(random_bytes(3));

            $document->codes()->create(
                [
                    'code' => $code
                ]
            );
            $message = (new \Swift_Message("Codigo de prueba"))
                ->setFrom($this->settings['email']['username'], "@Medellín")
                ->setTo($user['email'])
                ->setBody("Code: {$code}", "text/html");

            if (!$this->smtp->send($message)) {
                $this->messages = [
                    "code" => 501,
                    "message" => "Error al enviar el codigo al correo {$user['email']}",
                    "data" => [$user]
                ];


                $response->getBody()->write(json_encode($this->messages));

                return $response->withHeader('Content-Type', 'application/json');
            }

            $this->messages = [
                "code" => 200,
                "message" => "El usuario ya tiene información, se envio un codigo al correo {$user['email']}",
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

    public function validateCode(Request $request, Response $response)
    {
        $code = $request->getParsedBody()['code'];
        $document = Document::where('document', $request->getParsedBody()['document'])->first();
        $bdCode = $document->codes()->where([
            'code' => $code,
            'state' => 1])->first();
        try {
            if (! is_null($bdCode)) {
                $timeCode = new Carbon($bdCode->created_at, 'America/Bogota');
                if ($timeCode->diffInHours(CarbonImmutable::now('America/Bogota')) > 1) {
                    $bdCode->state = 0;
                    $bdCode->save();
                    $this->messages = [
                        "message" => "El codigo caduco",
                        "code" => 510,
                        "data" => []
                    ];
                    $response->getBody()->write(json_encode($this->messages));
                    return $response->withHeader('Content-Type', 'application/json');
                }
                $this->messages = [
                    "message" => "El codigo correcto",
                    "code" => 200,
                    "data" => [
                        "document" => $document->document
                    ]
                ];
                $response->getBody()->write(json_encode($this->messages));
                return $response->withHeader('Content-Type', 'application/json');
            }
            $this->messages = [
                "message" => "El codigo no es valido o ya caduco",
                "code" => 510,
                "data" => []
            ];
            $response->getBody()->write(json_encode($this->messages));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            die($e->getMessage());
        }
    }
}