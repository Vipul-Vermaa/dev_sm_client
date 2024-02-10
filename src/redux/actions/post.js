import {server} from '../store'
import axios from 'axios'

export const createPost=formdata=>async dispatch=>{
    try {
        const config={
            headers:{
                'Content-type': 'multipart/form-data',
            },
            withCredentials:true,
        };
        dispatch({type:'createPostRequest'})
        const {data}=await axios.post(`${server}/createpost`,
        formdata,config)
        dispatch({type:'createPostSuccess',
    payload:data.message
    })
    } catch (error) {
        dispatch({type:'createPostFail',
    payload:error.response.data.message,
    })
    }
}

export const deletePost=id=>async dispatch=>{
    try {
        const config={
            withCredentials:true,
        };
        dispatch({type:'deletePostRequest'})
        const {data}=await axios.delete(`${server}/post/${id}`,config)

        dispatch({type:'deletePostSuccess',payload:data.message})
    } catch (error) {
        dispatch({
            type:'deletePostFail',
            payload:error.response.data.message,
        })
    }
}