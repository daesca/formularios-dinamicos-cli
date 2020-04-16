<?php

use App\Models\Field;

function saveField(array $value) : array {
    $parseField = parseField($value);
    if (! isset($value['idField'])) {
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

function parseField(array $field) : array
{
    $parseField = $field['configurations'];
    $parseField['typeField'] = $field['typeField'];
    $parseField['options'] = json_encode($field['configurations']['options']);
    $parseField['deleted'] = json_encode($field['deleted']);
    return $parseField;
}

