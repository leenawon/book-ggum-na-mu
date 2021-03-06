import React from 'react';
import { Link } from 'react-router-dom';
import style from 'css/Navigation.module.css';

function Navigation({userObject}) {
  return (
    <nav>
      <ul className={style.nav_list}>
        <li>
          <Link to="/" >π‘νμΌλ‘</Link>
        </li>
        <li>
          <Link to="/profile">π{userObject.displayName}μ νλ‘ν</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
