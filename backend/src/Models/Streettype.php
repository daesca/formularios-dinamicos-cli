<?php

namespace App\Models;

class Streettype extends Model{

    protected $table = "streettypes";
    protected $fillable = ['id', 'name'];

    public $timestamps = false;

}