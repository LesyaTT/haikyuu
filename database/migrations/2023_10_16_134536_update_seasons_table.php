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
        Schema::table('seasons', function (Blueprint $table){
            $table->string('type');
            $table->integer('episodes');
            $table->string('status');
            $table->string('genre');
            $table->string('original_source');
            $table->string('season');
            $table->string('release');
            $table->string('studio');
            $table->string('age_rating');
            $table->string('age_restriction');
            $table->string('duration');
            $table->string('voiceover');
            $table->string('director');
            $table->string('take_from');
            $table->string('author');
            $table->string('main_characters');
            $table->string('shots');
            $table->string('trailer_path');
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
