<?php


namespace App\Models;


class ResponseCampagin extends Model
{
    protected $table = 'responses_campaign';

    protected $fillable = [
        'campaign_id', 'field_id', 'document_id', 'value', 'name'
    ];
    public $timestamps = false;
}