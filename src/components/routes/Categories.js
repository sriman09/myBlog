import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'

import ArticleItem from '../articles/ArticleItem'

const Categories = () => {

    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    const {slug} = useParams()

    const handleNewsData = async () => {
        const res = await axios.get(`https://myblog-backendcms.herokuapp.com/categories/${slug}`)
        setPost(res.data.articles)
    }

    useEffect(()=> {
        handleNewsData()
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[slug])

    console.log(post)
    const articleItems = post.map(a => <ArticleItem key={a.id} article={a} />)
    if(loading){
        return(
            <div className="flex flex-item p-80 justify-center bg-gray-200">
                <p>Loading...</p>
            </div>
        )
    } 

    return(
        <section className="text-gray-600 body-font bg-gray-200">
            <div className="container px-20 py-24 mx-auto">
                <div className="flex flex-wrap items-start justify-center">
                    {articleItems}
                </div>
            </div>
        </section>

    )
}
export default Categories