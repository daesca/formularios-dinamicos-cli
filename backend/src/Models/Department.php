<?php

namespace App\Models;

class Department extends Model{

    protected $table = "departments";
    protected $fillable = ['id', 'name', 'code'];

    public $timestamps = false;

}
