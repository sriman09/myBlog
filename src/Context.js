import React, {createContext, useState} from 'react'
import axios from 'axios';

const Context = createContext();

const ContextProvider = ({children}) => {

    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    const handlePost = async () => {
        const res = await axios.get('http://localhost:1337/articles')

        setPost(res.data)
        setLoading(false)
    }

    return(
        <Context.Provider value={{post, loading, handlePost}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}