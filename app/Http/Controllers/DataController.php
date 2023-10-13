<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Character;
use App\Models\Episode;
use App\Models\Season;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DataController extends Controller
{
    public function index() {
        $data = [
            'seasons' => Season::take(4)->get(),
            'episodes' => Episode::take(3)->get(),
            'characters' => Character::take(4)->get(),
            'teams' => Team::take(4)->get(),
            'blogs' => Blog::take(3)->get(),
            'auth' => Auth::guard('api')->check()
        ];

        return response()->json($data);
    }

    private function user()
    {
    }
}
