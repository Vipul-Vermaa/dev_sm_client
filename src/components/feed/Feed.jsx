import { Box, Container, Flex, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Post from '../post/Post.jsx'
import { Link } from 'react-router-dom'
import image from '../../assets/images/img1.png'

const Feed = () => {


  const user={
    name:'John Doe',
    avatar:image,
    image:image,
  }


  return (
  <Container minH='95vh' maxW={'container.lg'} py={'8'} >
  <Stack justifyContent={'flex-start'} spacing={['8','16']} padding={'8'} direction={['column','row']} >

    <VStack spacing={'4'} alignItems={['center','flex-start']}  maxH={'35vh'} minWidth={'15vw'} p={'4'} >
      <HStack>
        <Text children='User Name' fontWeight={'bold'}/>
        <Link to='/profile/:id'>
        <Text children='John Doe'/>
        </Link>
        
      </HStack>

      <HStack>
       <Link to='/stats'><Text children='Followers' fontWeight={'bold'}/></Link>
       
       <Text children='45'/>
      </HStack>

      <HStack>
       <Link to='/stats'><Text children='Following' fontWeight={'bold'}/></Link>
       
       <Text children='45'/>
      </HStack>
    </VStack>

    <VStack spacing={'4'} align={'center'} >
      <Post 
      user={user} 
      description='This is post content'
      
      />     
    </VStack>

  </Stack>
  </Container>
  )
}

export default Feed
