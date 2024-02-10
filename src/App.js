import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import Feed from './components/feed/Feed';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import ChangePassword from './components/profile/ChangePassword';
import Profile from './components/profile/Profile';
import UpdateProfile from './components/profile/UpdateProfile';
import Navbar from './components/feed/Navbar';

import CreatePost from './components/post/CreatePost';
import {useDispatch,useSelector} from 'react-redux'
import {toast,Toaster} from 'react-hot-toast'
import {ProtectedRoute} from 'protected-route-react'
import {loadUser} from './redux/actions/user'

function App() {

const {user,message,error,isAuthenticated} =useSelector(state=>state.user)

const dispatch=useDispatch()
useEffect(()=>{
  if (error){
    toast.error(error)
    dispatch({type:'clearError'})
  }
  if(message){
    toast.success(message)
    dispatch({type:'clearMessage'})
  }
},[dispatch,error,message])

useEffect(() => {
 dispatch(loadUser())
}, [dispatch])


  return (
    <Router>
      {(!isAuthenticated && window.location.pathname !== '/register' && window.location.pathname !== '/login') && <Navbar />}
      {/* <Navbar/> */}
      <Routes>

        <Route path='/' element={isAuthenticated ? <Feed/> : <Navigate to='/login' /> } />

        <Route path='/register' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile' > <Register/> </ProtectedRoute>}  />

        <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile' > <Login/> </ProtectedRoute>}/>

        

        <Route path='/forgetpassword' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile' > <ForgetPassword/> </ProtectedRoute>} />

        <Route path='/resetpassword/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile' > <ResetPassword/> </ProtectedRoute>} />

        <Route path='/changepassword' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <ChangePassword/> </ProtectedRoute>} />

        <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Profile user={user} /></ProtectedRoute>}/>

        <Route path='/profile/:id' element={<Profile/>}/>

        <Route path='/updateprofile' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <UpdateProfile user={user} /> </ProtectedRoute>} />

        <Route path='/createpost' element={<ProtectedRoute isAuthenticated={isAuthenticated} > <CreatePost/> </ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;
 