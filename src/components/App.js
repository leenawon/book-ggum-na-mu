import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { firebaseAuth } from 'myFirebase';
import 'css/App.css';

function App() {
  const [firebaseListen, setFirebaseListen] = useState(firebaseAuth.currentUser);
  return (
    <div className="app">
      <h3 className="title">🌳 Book-ggum-na-mu 🌳</h3>
      {firebaseListen ? <AppRouter login={firebaseListen}/> : "로그인 정보를 불러오는 중..."}
    </div>
  );
}

export default App;
