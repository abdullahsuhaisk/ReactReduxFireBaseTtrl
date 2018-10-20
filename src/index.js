import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import {reduxFirestore ,getFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from '../src/components/config/fbConfig';

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig,{useFirestoreForProfile: true, userProfile:'users',attachAuthIsReady: true}), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore
    )
    // Firebase reducer use to fireStore {useFirestoreForProfile: true} firebase.profile
  );
  //Wait to Render until firebase authReady
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store= {store}>
            <App />
        </Provider>
            , document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
