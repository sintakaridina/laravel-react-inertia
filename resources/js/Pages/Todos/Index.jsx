//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';


export default function TodoIndex({ todos, session }) {
    //method deleteTodo
    const deleteTodo = async (id) => {
        Inertia.delete(`/todos/${id}`);
    }
  return (
    <Layout>
        <div style={{ marginTop: '100px' }}>
            
            <Link href="/todos/create" className="btn btn-success btn-md mb-3">TAMBAH TODO</Link>
            
            {session.success && (
                <div className="alert alert-success border-0 shadow-sm rounded-3">
                    {session.success}
                </div>
            )}

            <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        { todos.map((todo, index) => (
                            <tr key={ index }>
                                <td className="text-center align-middle">
                                <button onClick={() => deleteTodo(todo.id)} className="lock">
                                <i className="icon-circle-blank"></i>
                                <i className="icon-ok-circle"></i>
                                </button>
                                </td>
                                <td><h5 className="font-weight-bold">{ todo.title }</h5>{ todo.content }</td>
                                
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
  )
}