<?php 

declare(strict_types = 1);

namespace App\Models;

class Field extends Model
{

    protected $table = "fields";

    protected $fillable = ["id","title", "weight", "name", "min", "max", "deleted", "defaultForm", "typeField", "type", "options", "required", "defaultValue", "cssClass"];

    protected $hidden = [
        "created_at", "updated_at"
    ];

    public function campaigns(){

        return $this->belongsToMany('App\Models\Campaign');

    }

}