<?php 

namespace App\Models;

class Commune extends Model{

    protected $table = "communes";
    protected $fillable = ['id', 'name', 'code'];
    
    public $timestamps = false;

}