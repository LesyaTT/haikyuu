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
        Schema::table('characters', function (Blueprint $table) {
            $table->string('quote');
            $table->string('kanji');
            $table->string('romanji');
            $table->string('known_as');
            $table->string('gender');
            $table->date('date_birth')->nullable();
            $table->string('height_times');
            $table->string('weight');
            $table->string('occupation');
            $table->string('teams');
            $table->string('number');
            $table->text('background');
            $table->text('appearance');
            $table->text('personality');
            $table->string('imgs');
            $table->integer('team_id');
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
