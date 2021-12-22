import { firebaseAuth } from 'myFirebase';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from 'css/Profile.module.css';

function Profile() {
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    firebaseAuth.signOut();
    navigate('/');
  };
  
  return (
    <div>
      <h4>사용자의 Profile</h4>
      <button className={style.logout_button} onClick={handleLogoutButton}>로그아웃</button>
    </div>
  )
}

export default Profile;
