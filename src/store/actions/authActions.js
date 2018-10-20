export const signIn = ( credetials ) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase= getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credetials.email,
            credetials.password).then(()=>{
                dispatch({type:'LOGIN_SUCCES'})
            }).catch((err)=>{dispatch({type:'LOGIN_ERROR',err})})
        }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
          console.log(resp);
        return firestore.collection('users').doc(resp.user.uid).set({
          email:newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCES' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }