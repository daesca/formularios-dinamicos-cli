<?php


namespace App\Models;


class Document extends Model
{
    protected $table = 'documents';
    protected $fillable = ['document'];
    public $timestamps = false;

    public function values()
    {
        return $this->hasMany(ResponseCampagin::class, 'document_id', 'id');
    }
}