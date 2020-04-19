<?php

declare(strict_types = 1);

namespace App\Models;

class Campaign extends Model
{
    protected $table = "campaigns";

    protected $fillable = [
        'id', 'code', 'name', 'category', 'startDate', 'finalDate', 'totalAspirants', 'published', 'deleted', 'renderDefault', 'render'
    ];

    public function fields()
    {

        return $this->belongsToMany('App\Models\Field');
    }
}
