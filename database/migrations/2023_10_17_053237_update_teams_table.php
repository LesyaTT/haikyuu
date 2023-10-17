<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('teams', function (Blueprint $table){
            $table->string('quote');
            $table->string('kanji');
            $table->string('romanji');
            $table->string('prefecture');
            $table->string('captain');
            $table->string('manager');
            $table->string('coach');
            $table->string('colors');
            $table->string('gallery');
            $table->string('about');
            $table->string('uniform');
            $table->string('trivia', 10000);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
