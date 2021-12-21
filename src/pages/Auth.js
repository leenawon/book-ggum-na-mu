import { firebaseAuth } from 'myFirebase';
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AuthForm from 'components/AuthForm';
import style from 'css/Auth.module.css';

function Auth() {
  // google login onClick event
  const googleLogin = async() => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(firebaseAuth, provider);
  };

  return (
    <div>
      {/* AuthForm component */}
      <AuthForm />
      <div>
        <button className={style.social_login} onClick={googleLogin}>Google로 시작하기</button>
      </div>
    </div>
  )
}

export default Auth;
