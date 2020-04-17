<?php


namespace App\Models;


class Codes extends Model
{
    protected $table = 'codes';
    protected $fillable = [
        'code', 'document_id', 'state', 'created_at'
    ];

    public $timestamps = false;
}