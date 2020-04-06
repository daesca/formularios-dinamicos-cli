<?php 

declare(strict_types = 1);

namespace App\Models;

class Field extends Model
{

    protected $table = "fields";

    protected $fillable = ["title", "weight", "name", "min", "max", "typeField", "type", "options", "required", "defaultValue", "cssClass"];

    public function campaigns(){

        return $this->belongsToMany('App\Models\Campaign');

    }

}