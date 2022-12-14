import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModel from 'components/PostModel';
import ReactMarkdown from 'react-markdown';
import './Post.css'
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage/DefaultPage';

export default function Post() {

    const parametros = useParams();

    const post = posts.find(post => (
        post.id === Number(parametros.id)
    ))
    
    if(!post) {
        return <NotFound />
    }
    return (
       <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <PostModel
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                    >
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}                
                        </ReactMarkdown>
                    </div>
                    </PostModel>
                } />
            </Route>
       </Routes>
    )
}


