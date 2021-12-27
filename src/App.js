import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/homepage'
import About from './pages/about'
import Article from './pages/article'
import Nav from './nav'
import ArticlesListPage from './pages/articleslistpage'
import PageNotFound from './pages/pagenotfound'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path={"/"} element={<Homepage />} exact />
          <Route path={"/about"} element={<About />} />
          <Route path={"/articles-list"} element={<ArticlesListPage />} />
          <Route path={"/article/:slug"} element={<Article />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
