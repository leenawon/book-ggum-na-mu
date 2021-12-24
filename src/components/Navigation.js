import React from 'react';
import { Link } from 'react-router-dom';
import style from 'css/Navigation.module.css';

function Navigation({userObject}) {
  return (
    <nav>
      <ul className={style.nav_list}>
        <li>
          <Link to="/" >🏡홈으로</Link>
        </li>
        <li>
          <Link to="/profile">💚{userObject.displayName}의 프로필</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
