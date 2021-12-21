import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { firebaseAuth } from 'myFirebase';
import 'css/App.css';

function App() {
  // firebase data를 읽어들였는지 여부에 대한 state
  const [firebaseListen, setFirebaseListen] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Auth에 대한 변화를 감지함
    firebaseAuth.onAuthStateChanged((user) => {
      if(user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setFirebaseListen(true);
    });
  }, []);

  return (
    <div className="app">
      <h3 className="title">🌳 Book-ggum-na-mu 🌳</h3>
      {firebaseListen ? <AppRouter login={login}/> : "로그인 정보를 불러오는 중..."}
    </div>
  );
}

export default App;
