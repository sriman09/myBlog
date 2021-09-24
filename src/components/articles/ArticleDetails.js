import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const ArticleDetails = () => {

    // const DETAILS = gql`
    //     query getArticleDetails($id : ID!) {
    //         article(id: $id){
    //             title,
    //             image{
    //                 url
    //             },
    //             description,
    //             id
    //         }
    //     }
    // `
    let {slug} = useParams();

    // const {loading, error, data} = useQuery(DETAILS, {
    //     variables : {id : id}
    // })

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])
    const [url,setUrl] =useState()

    const getPostDetails = async () => {
        const res = await axios.get(`https://myblog-backendcms.herokuapp.com/articles/${slug}`)
        setPost(res.data)
        setUrl(res.data.image.url)
    }

    useEffect(()=> {
        getPostDetails()
        setLoading(false)        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {title, description} = post

    if(loading){
        return(
            <div className="flex flex-item p-80 justify-center bg-gray-200">
                <p>Loading...</p>
            </div>
        )
    } 

    return(
        <section class="text-gray-600 body-font bg-gray-200">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-5/6 mx-auto bg-white rounded-lg">
                <div class=" h-80  overflow-hidden">
                    <img alt="content" class="object-cover object-center h-80 w-full" src={`https://myblog-backendcms.herokuapp.com${url}`} />
                </div>
                <div className="text-4xl pl-8 pt-10 text-black">
                    <h1>{title}</h1>
                </div>   
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-2xl mb-4">{description}</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default ArticleDetails