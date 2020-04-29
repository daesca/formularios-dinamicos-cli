<?php

namespace App\Models;

class Town extends Model{

    protected $table = "towns";
    protected $fillable = ['id', 'name', 'code', 'department_code'];

    public $timestamps = false;

}