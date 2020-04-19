<?php

use App\Models\Field;
use Illuminate\Support\Collection;

function saveField(array $value): array
{
    $parseField = parseField($value);
    if (!isset($value['idField'])) {
        $field = Field::create($parseField);
        $value['idField'] = $field->id;
    } else {
        Field::updateOrCreate(
            ['id' => $value['idField']],
            $parseField
        );
    }
    return $value;
}

function parseField(array $field): array
{
    $parseField = $field['configurations'];
    $parseField['typeField'] = $field['typeField'];
    $parseField['options'] = json_encode($field['configurations']['options']);
    $parseField['deleted'] = json_encode($field['deleted']);
    return $parseField;
}

function evaluateField(object $field, $value)
{
    $message = [];
    $type = getTypeField($field);
    if (!is_null($type)) {
        $valideForType = valideForTypeField($field, $type, $value);
        if (is_array($valideForType)) {
            $message = array_merge($message, $valideForType);
            return $message;
        }
        return null;
    }
    return $message = [
        "message" => "El typeField no existe",
        "field" => $field->id
    ];
}

function valideForTypeField(object $field, $type, $value)
{
    $messsage = [];
    foreach ($type as $k => $condition) {
        if (!is_null($field->{$condition})) {
            $response = validating($field, $condition, $value);
            if (is_array($response)) {
              array_push($messsage, $response);
            }
        }
    }
    return count($messsage) > 0 ? $messsage : null;
}

function validating(object $field, string $condition, $value): ?array
{
    $message = [];
    switch ($condition) {
        case "min" :
            if ($field->min > strlen($value)) {
                $message = [
                    "message" => "Es menor que el meinimo requerido",
                    "field" => $field->id
                ];
            }
            break;
        case "max" :
            if ($field->max < strlen($value) and !empty($field->max)) {
                $message = [
                    "message" => "Es mayor que el maximo requerido",
                    "field" => $field->id
                ];
            }
            break;
        case "defaultValue" :
            if ($field->defaultValue !== $value and !empty($field->defaultValue)) {
                $message = [
                    "message" => "El valor es diferente que el por defecto",
                    "field" => $field->id
                ];
            }
            break;
        case "options" :
            $htmlValues = array_column(json_decode($field->options), 'htmlValue');
            if (is_string($value)) {
                if (!in_array($value, $htmlValues)) {
                    $message = [
                        "message" => "El valor es diferente que las opciones del item",
                        "field" => $field->id
                    ];
                }
            } else {
                if (!empty(array_diff($value, $htmlValues))) {
                    $message = [
                        "message" => "El valor es diferente que las opciones del item",
                        "field" => $field->id
                    ];
                }
            }
            break;
        case "type" :
            if (!getEvaluate($field->type, $value)) {
                $message = [
                    "message" => "El valor es diferente al tipo solicitado",
                    "field" => $field->id
                ];
            }
            break;
        case "required" :
            if ($field->required and $value == "") {
                $message = [
                    "message" => "El valor es requerido",
                    "field" => $field->id
                ];
            }
            break;
        default : break;
    }
    return count($message) > 0 ? $message : null;
}

function getEvaluate(string $evaluate, $value): bool
{
    $callables = [
        "number" => "is_numeric",
        "text" => "is_string",
        "date" => "is_date",
    ];
    if($evaluate == "number" and $value < 0) {
        return false;
    }
    $callable = $callables[$evaluate];
    return $callable($value);
}

function is_date($date, $format = 'Y-m-d'): bool
{
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) == $date;
}

function getTypeField(object $field): ?array
{
    $typeField = [
        "selectField" => [
            "options", "required"
        ],
        "checkField" => [
            "options", "required"
        ],
        "radioField" => [
            "options", "required"
        ],
        "multipleField" => [
            "type",
            "defaultValue",
            "min",
            "max",
            "required"
        ],
        "countriesField" => [
            "required"
        ],
        "departmentsField" => [
            "required"
        ],
        "townsField" => [
            "required"
        ],
        "neighborhoodField" => [
            "required"
        ]
    ];

    return $typeField[$field->typeField] ?? null;
}

if (!function_exists('collect')) {
    function collect($items)
    {
        return new Collection($items);
    }
}
