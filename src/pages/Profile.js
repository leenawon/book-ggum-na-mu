import { firebaseAuth } from 'myFirebase';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import style from 'css/Profile.module.css';

function Profile({userObject}) {
  const [userName, setUserName] = useState(userObject.displayName);
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    firebaseAuth.signOut();
    navigate('/');
  };

  const userNameChange = ({target: {value}}) => {
    setUserName(value);
  };

  const formSubmit = async(e) => {
    e.preventDefault();
    // firebase Auth의 displayName을 변경시켜줌
    if(userObject.displayName !== userName) {
      await updateProfile(firebaseAuth.currentUser, {
        displayName: userName
      });
    }
    navigate('/');
  };
  
  return (
    <div>
      <h4>{userObject.displayName}의 Profile</h4>
      <form onSubmit={formSubmit}>
        <input className={style.name_input} type="text" placeholder="이름" value={userName} onChange={userNameChange}/>
        <button className={style.edit_button} type="submit">수정하기</button>
      </form>
      <button className={style.logout_button} onClick={handleLogoutButton}>로그아웃</button>
    </div>
  )
}

export default Profile;
