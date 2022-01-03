import React from 'react'
import Articleslist from '../components/articles'
import articlescontent from './articlecontent'

const ArticlesListPage = () => {
    return (
    <>
        <Articleslist articles={articlescontent} />
    </>
    )}

export default ArticlesListPage
