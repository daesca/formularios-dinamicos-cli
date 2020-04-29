<?php

namespace App\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;

use App\Models\Country;
use App\Models\Department;
use App\Models\Commune;
use App\Models\Neighborhood;
use App\Models\School;
use App\Models\Streettype;
use App\Models\Town;

class SapienciaDataController extends Controller{

    public function allCountries(Request $request, Response $response){

        $response->getBody()->write(Country::all()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function allDepartments(Request $request, Response $response){

        $response->getBody()->write(Department::all()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function allCommunes(Request $request, Response $response){

        $response->getBody()->write(Commune::all()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function allNeighborhoods(Request $request, Response $response){

        $response->getBody()->write(Neighborhood::all()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function allStreettypes(Request $request, Response $response){

        $response->getBody()->write(Streettype::all()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function allTowns(Request $request, Response $response, $args){

        $department = Department::find($args["idDepartment"]);

        $towns = Town::where('department_code', $department->code)->get()->toJson();

        $response->getBody()->write($towns);
        return $response->withHeader('Content-Type', 'application/json');

    }

    public function allSchools(Request $request, Response $response){

        $response->getBody()->write(School::all()->toJson());
        return $response->withHeader('Content-Type', 'application/json');

    }

}