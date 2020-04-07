<?php

declare(strict_types = 1);

namespace App\Models;

class Campaign extends Model
{
    protected $table = "campaigns";

    protected $fillable = [
        'code', 'name', 'startDate', 'finalDate', 'totalAspirants', 'state', 'render'
    ];

    public function fields(){

        return $this->belongsToMany('App\Models\Field');

    }
}
