import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '../../redux/actions/user'

const Login = () => {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const dispatch=useDispatch()

const submitHandler=(e)=>{
  e.preventDefault()
  dispatch(login(email,password))
}

  return (
    <Container h={'95vh'} >
      <VStack h={'full'} justifyContent={'center'} spacing={'16'} >
        <Heading children='Login Here To Continue' />
        <form onSubmit={submitHandler} style={{width:'100%'}} >
        <Box my={'4'} >
          <Input 
          required
          id='email'
          value={email}
          placeholder='Enter Your Email'
          type='email'
          onChange={e=>setEmail(e.target.value)}
          />
        </Box>

        <Box my={'4'} >
          <Input 
          required
          id='password'
          value={password}
          placeholder='Enter Your Password'
          type='password'
          onChange={e=>setPassword(e.target.value)}
          />
        </Box>

        <Button my={'4'} color={'black'} type='submit' >Login</Button>

        <Box>
          New User?<Link to='/register'><Button variant={'link'} colorScheme='cyan' >Sign Up</Button></Link>
        </Box>

        <Box>
          <Link to='/forgetpassword'><Button variant={'link'} colorScheme='black' >Forget Password</Button></Link>
        </Box>

        </form>
      </VStack>
    </Container>
  )
}

export default Login
