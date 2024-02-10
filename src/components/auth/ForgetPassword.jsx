import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {forgetPassword} from '../../redux/actions/profile'
import {useDispatch,useSelector} from 'react-redux'
import toast from 'react-hot-toast'

const ForgetPassword = () => {

    const [email,setEmail]=useState('')

    const {message,error}=useSelector(state=>state.profile)

    const dispatch=useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(forgetPassword(email))
    }
    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch({ type: 'clearError' });
        }
        if (message) {
          toast.success(message);
          dispatch({ type: 'clearMessage' });
        }
      }, [dispatch, error, message]);

  return (
    <Container h={'95vh'}>
      
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children='Enter Your Email'/>
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

            <Button type='submit' w={'full'} colorScheme='cyan' >
                Send Reset Link
            </Button>

            </form>
        </VStack>
    </Container>
  )
}
export default ForgetPassword
