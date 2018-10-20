const initState = {
    authError: null
};

const authReducer = (state=initState, actions ) => {
    switch (actions.type) {
        case 'LOGIN_ERROR':
            console.log('Login error');
            return ({
                ...state, authError:'Login Failded'
            })
        case 'LOGIN_SUCCES':
            console.log('Login Succes');
            return({
                ...state,authError:null
            })
        case 'SIGNOUT_SUCCES':
            console.log('Signout Successfully');
            return state;
        case 'SIGNUP_SUCCES':
            console.log('SignUp Succesly Finished');
            return ({
                ...state,
                authError:null
            })
        case 'SIGNUP_ERROR':
            console.log('SignUp failded error:',actions.err);
            return({
                ...state,
                authError: actions.err.message
            })
        default:
            return state;
    }
}

export default authReducer;