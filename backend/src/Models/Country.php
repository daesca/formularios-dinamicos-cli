<?php

namespace App\Models;

class Country extends Model{

    protected $table = "countries";
    protected $fillable = ['id', 'name'];

    public $timestamps = false;


}
