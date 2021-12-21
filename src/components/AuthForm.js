import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from 'myFirebase';
import style from 'css/Auth.module.css';

function AuthForm() {
  const [form, setForm] = useState({email : "", password: ""});
  const [createAccount, setCreateAccount] = useState(true);
  const [error, setError] = useState("");

  // const formChange = (e) => {
  //   const {target : {name, value}} = e;
  //   if(name === "email") {
  //     setEmail(value);
  //   } else if(name === "password") {
  //     setPassword(value);
  //   }
  // }
  // 위 코드를 밑에 코드처럼 간단하게 변경 가능

  const formChange = ({target : {name, value}}) => {
    setForm({...form, [name]:value});
  };

  const formSubmit = async(e) => {
    e.preventDefault();
    try {
      let account;
      if(createAccount) {
        // create account
        account = await createUserWithEmailAndPassword(firebaseAuth, form.email, form.password);
      } else {
        // login
        account = await signInWithEmailAndPassword(firebaseAuth, form.email, form.password);
      }
      console.log(account);
    } catch(error) {
      setError(error.message);
    }
  };

  // create Account true or false => 버튼 내용 변경
  const toggleAccountButton = () => {
    setCreateAccount((current) => !current);
  }

  return (
    <div>
      <form className={style.auth_form} onSubmit={formSubmit}>
        <input type="email" name="email" value={form.email} placeholder="이메일" required onChange={formChange} />
        <input type="password" name="password" value={form.password} placeholder="비밀번호" required onChange={formChange} />
        <button type="submit">{createAccount ? "회원가입" : "로그인"}</button>
        <p>Error : {error}</p>
      </form>
      <button className={style.toggle_button} onClick={toggleAccountButton}>{createAccount ? "로그인하기" : "회원가입하기"}</button>
    </div>
  )
}

export default AuthForm;
