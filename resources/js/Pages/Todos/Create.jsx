//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function CreateTodo({ errors }) {

    //define state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //function "storeTodo"
    const storeTodo = async (e) => {
        e.preventDefault();
        
        Inertia.post('/todos', {
            title: title,
            content: content
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH TODO</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeTodo}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Judul Tugas" />
                                </div>
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Judul Tugas" rows={4}></textarea>
                                </div>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                    <Link href="/" className="btn btn-md btn-danger"><i className="fa fa-redo"></i> CANCEL</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}