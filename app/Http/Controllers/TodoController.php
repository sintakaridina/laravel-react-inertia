<?php

namespace App\Http\Controllers;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        //get all todolist
        $todos = Todo::latest()->get();

        //return view
        return inertia('Todos/Index', [
            'todos' => $todos
        ]);
    }
    public function create()
    {
        return inertia('Todos/Create');
    }
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'title'   => 'required',
            'content' => 'required',
        ]);

        //create todo
        Todo::create([
            'title'     => $request->title,
            'content'   => $request->content
        ]);

        //redirect
        return redirect()->route('todos.index')->with('success', 'Tugas baru berhasil ditambahkan!');
    }
    public function destroy(Todo $todo)
    {
        //delete todo
        $todo->delete();

        //redirect
        return redirect()->route('todos.index')->with('success', 'Selamat. Tugas telah diselesaikan!');
    }
}
