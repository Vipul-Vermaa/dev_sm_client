import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import toast from 'react-hot-toast'
import {useNavigate,useParams} from 'react-router-dom'
import {resetPassword} from '../../redux/actions/profile'


const ResetPassword = () => {

    const [password,setPassword]=useState('')

    const params=useParams()
    const navigate=useNavigate()

    const {error,message}=useSelector()
    const dispatch=useDispatch()

    const submitHandler=(e)=>{
        e.prevetDefault()
        dispatch(resetPassword(params.token,password))
    }
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
        navigate('/login');
      }
    }, [dispatch, error, message]);
  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'} >
        <Heading children='Reset Your Password'/>
        <form onSubmit={submitHandler} >
        <Box my={'4'} >
          <Input 
          required
          id='password'
          value={password}
          placeholder='New Password'
          type='password'
          onChange={e=>setPassword(e.target.value)}
          />
        </Box>
        
        <Button type='submit' w={'full'} colorScheme='cyan'>
            Reset Password
        </Button>
        </form>
        </VStack>

    </Container>
  )
}

export default ResetPassword
