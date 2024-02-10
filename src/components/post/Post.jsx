import { Avatar, Box, Button, Container, HStack, IconButton, Image, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react'
import {AiOutlineHeart,AiFillHeart,AiFillEdit, AiFillDelete} from 'react-icons/ai'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {deletePost} from '../../redux/actions/post'
import {toast} from 'react-hot-toast'

const Post = ({user,description,avatar,image}) => {


  const {post,error,message}=useSelector(state=>state.post)

  const dispatch=useDispatch()
  const {isOpen,onClose,onOpen}=useDisclosure()

  const[liked,setLiked]=useState(false)
  
  const handleLike=()=>{
    setLiked(!liked)
  }
  const editHandler=(e)=>{
    e.preventDefault()
    console.log('edit')
  }
  const deleteHandler=postId=>{
    dispatch(deletePost(postId))
    console.log('delete')
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
  

// const Post = () => {
  return (
    <Box p={'4'} borderWidth={'1px'} borderRadius={'md'} width={'400px'} >
      <HStack align={'center'} mb={'4'} >
        <Avatar src={user.avatar}/>
        <Text fontWeight={'bold'}><Link to='/profile/:id'> {user.name} </Link> </Text>
        <Spacer/>
      <IconButton onClick={editHandler} icon={<AiFillEdit/>}/>
      <Text><IconButton onClick={deleteHandler} icon={<AiFillDelete/>}/></Text>
      </HStack>
      <HStack>
        <Box>
          <Image width={'350px'}
          
          src={user.image}
          alt='Post Image'
          >
         
          </Image>
        </Box>
      </HStack>

      <HStack>
        <Text children={description} />
      </HStack>
      <HStack mt={'4'}>
       
       <IconButton onClick={handleLike} icon={liked? <AiFillHeart/> : <AiOutlineHeart/> } />
      </HStack>
      <HStack mt={'4'}>
        <Text children={user.num} />
        <Text children='liked' />
      </HStack>

    </Box>
  )
}

export default Post
