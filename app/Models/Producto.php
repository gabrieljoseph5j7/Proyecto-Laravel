<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = [
        'categoria',
        'n_serie',
        'descripcion',
        'marca',
        'modelo',
        'precio',
    ];
}