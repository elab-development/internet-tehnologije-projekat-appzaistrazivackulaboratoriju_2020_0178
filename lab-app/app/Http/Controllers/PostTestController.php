<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostTestController extends Controller
{
   public function index(){
        $posts = Post::all();
        return $posts;
    }

    public function show($id){
        $post = Post::find($id);
        return $post;
    }
}
