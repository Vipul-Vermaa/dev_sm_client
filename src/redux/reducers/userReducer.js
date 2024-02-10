import {createAction,createReducer} from '@reduxjs/toolkit'


export const loginRequest=createAction('loginRequest')
export const loginSuccess=createAction('loginSuccess')
export const loginFail=createAction('loginFail')


export const registerRequest=createAction('registerRequest')
export const registerSuccess=createAction('registerSuccess')
export const registerFail=createAction('registerFail')


export const logoutRequest=createAction('logoutRequest')
export const logoutSuccess=createAction('logoutSuccess')
export const logoutFail=createAction('logoutFail')


export const loadUserRequest=createAction('loadUserRequest')
export const loadUserSuccess=createAction('loadUserSuccess')
export const loadUserFail=createAction('loadUserFail')


export const updateProfileRequest=createAction('updateProfileRequest')
export const updateProfileSuccess=createAction('updateProfileSuccess')
export const updateProfileFail=createAction('updateProfileFail')


export const updateProfilePictureRequest=createAction('updateProfilePictureRequest')
export const updateProfilePictureSuccess=createAction('updateProfilePictureSuccess')
export const updateProfilePictureFail=createAction('updateProfilePictureFail')


export const changePasswordRequest=createAction('changePasswordRequest')
export const changePasswordSuccess=createAction('changePasswordSuccess')
export const changePasswordFail=createAction('changePasswordFail')


export const forgetPasswordRequest=createAction('forgetPasswordRequest')
export const forgetPasswordSuccess=createAction('forgetPasswordSuccess')
export const forgetPasswordFail=createAction('forgetPasswordFail')


export const resetPasswordRequest=createAction('resetPasswordRequest')
export const resetPasswordSuccess=createAction('resetPasswordSuccess')
export const resetPasswordFail=createAction('resetPasswordFail')

export const clearError = createAction('clearError');
export const clearMessage = createAction('clearMessage');


const initialState={
    loading:false,
    isAuthenticated:false,
    user:null,
    message:'',
    error:null,
}

export const userReducer=createReducer(initialState,(builder)=>{
builder
    .addCase(loginRequest,(state)=>{
        state.loading=true;
    })

    .addCase(loginSuccess,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    })

    .addCase(loginFail,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload
    })




    .addCase(registerRequest,(state)=>{
        state.loading=true;
    })
    .addCase(registerSuccess,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message;
    })
    .addCase(registerFail,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload
    })


    .addCase(logoutRequest,(state)=>{
        state.loading=true;
    })

    .addCase(logoutSuccess,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.message=action.payload
    })
    .addCase(logoutFail,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.error=action.payload
    })
    


    .addCase(loadUserRequest,state=>{
        state.loading=true;
    })
    .addCase(loadUserSuccess,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    })
    .addCase(loadUserFail,(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    })

    .addMatcher(
        (action)=>action.type===clearError.type,state=>{
        state.error=null;
    })
    .addMatcher(
        (action)=>action.type===clearMessage.type,state=>{
        state.message=null
    })
}
)




export const profileReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(updateProfileRequest,state=>{
        state.loading=true;
    })
    .addCase(updateProfileSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(updateProfileFail,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })


    .addCase(updateProfilePictureRequest,state=>{
        state.loading=true;
    })
    .addCase(updateProfilePictureSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(updateProfilePictureFail,(state,action)=>{
        state.loading=false;
        state.error=action.error;
    })


    .addCase(changePasswordRequest,state=>{
        state.loading=true;
    })
    .addCase(changePasswordSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase(changePasswordFail,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })


    .addCase(forgetPasswordRequest,state=>{
        state.loading=true;
    })
    .addCase(forgetPasswordSuccess,(state,action)=>{
        state.loading=false;
        state.message = action.payload;
    })
    .addCase(forgetPasswordFail,(state,action)=>{
        state.loading = false;
      state.error = action.payload;
    })


    .addCase(resetPasswordRequest, state => {
        state.loading = true;
      })
      .addCase(resetPasswordSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(resetPasswordFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      

    .addMatcher(
        (action)=>action.type===clearError.type,state=>{
        state.error=null;
    })
    .addMatcher(
        (action)=>action.type===clearMessage.type,state=>{
        state.message=null
    })
    })