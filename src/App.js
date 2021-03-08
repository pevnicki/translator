import React from 'react';
import Layout from "./hoc/Layout/Layout";
import PostPage from "./container/pages/Posts/PostPage";


function App() {
    return (
        <Layout>
            <PostPage/>
        </Layout>
    );
}

export default App;
