<?php

namespace App\Models;

class School extends Model{

    protected $table = "schools";
    protected $fillable = ['id', 'establishment_dane', 'consecutive_dane', 'name', 'establishment_state', 'establishment_type'];

    public $timestamps = false;

}