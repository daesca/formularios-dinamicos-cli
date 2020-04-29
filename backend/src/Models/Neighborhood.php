<?php

namespace App\Models;

class Neighborhood extends Model{

    protected $table = "neighborhoods";
    protected $fillable = ['id', 'name', 'code', 'commune_code'];

    public $timestamps = false;

}