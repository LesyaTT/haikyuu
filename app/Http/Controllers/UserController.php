<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Passport\Passport;

class UserController extends Controller
{
    public function registration(RegistrationRequest $request)
    {
        $validated = $request->validated();

        if (!$validated) {
            return response()->json(['errors' => $validated->errors()], 422);
        } else {
            $user = User::create($request->all());
            $accessToken = $user->createToken('haikyuu')->accessToken;
            return response()->json(['access_token' => $accessToken])
                ->header('Authorization', 'Bearer ' . $accessToken);
        }
    }

    public function authorization(LoginRequest $request)
    {
        $validated = $request->validated();

        if (!$validated) {
            return response()->json(['errors' => $validated->errors()], 422);
        } else {
            if (auth()->attempt($validated)) {
                $accessToken = auth()->user()->createToken('haikyuu')->accessToken;
                return response()->json(['access_token' => $accessToken])
                    ->header('Authorization', 'Bearer ' . $accessToken);
            } else {
                return response()->json('Not registered.');
            }
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json('Successfully logged out.');
    }
}
