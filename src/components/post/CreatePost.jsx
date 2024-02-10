import { Button, Container, Heading, Image, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {fileUploadCss} from '../auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import {createPost} from '../../redux/actions/post'
import {toast} from 'react-hot-toast'

const CreatePost = () => {
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')
    const [imagePrev,setImagePrev]=useState('')

    const dispatch=useDispatch()
    const{error,message}=useSelector(state=>state.admin)

    const changeImageHandler=e=>{
        const file=e.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        const myForm=new FormData()
        myForm.append('description',description)
        myForm.append('file',image)
        dispatch(createPost(myForm))
    }

    useEffect(() => {
      if(error){
        toast.error(error)
        dispatch({type:'clearError'})
      }
      if(message){
        toast.success(message)
        dispatch({type:'clearMessage'})
      }
    }, [dispatch,error,message])
    

    
  return (
    <Container py={'4'}  
    // border={'2px solid white'}
    >
     <form onSubmit={submitHandler}>
        <Heading textTransform={'uppercase'} children='Create Post' my={'8'}
         textAlign={['center','left']}/>
         <VStack m={'auto'} spacing={'8'} >
            <Input
            value={description}
            onChange={e=>setDescription(e.target.value)}
            placeholder='Description'
            type='text'
            focusBorderColor='purple.300'
            />
            <Input accept='image/*'
            required
            type='file'
            focusBorderColor='purple.300'
            css={{'&::file-selector-button':{
                ...fileUploadCss,
                color:'purple',
            }}}
            onChange={changeImageHandler}
            />
            {imagePrev && (
                <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button w={'full'} colorScheme='purple' type='submit' >Create</Button>
         </VStack>
     </form>
    </Container>
  )
}

export default CreatePost
