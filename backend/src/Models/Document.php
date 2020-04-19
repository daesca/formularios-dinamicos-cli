<?php


namespace App\Models;


class   Document extends Model
{
    protected $table = 'documents';
    protected $fillable = ['id', 'document'];

    public $timestamps = false;

    public function values()
    {
        return $this->hasMany(ResponseCampagin::class, 'document_id', 'id');
    }

    public function codes()
    {
        return $this->hasOne(Codes::class, 'document_id', 'id');
    }
}