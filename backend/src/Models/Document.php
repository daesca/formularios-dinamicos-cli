<?php


namespace App\Models;


class Document extends Model
{
    protected $table = 'documents';
    protected $fillable = ['document'];

    public $timestamps = false;
}