import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { firebaseAuth } from 'myFirebase';
import 'css/App.css';

function App() {
  // firebase data를 읽어들였는지 여부에 대한 state
  const [firebaseListen, setFirebaseListen] = useState(false);
  const [userObject, setUserObject]= useState(null);

  useEffect(() => {
    // Auth에 대한 변화를 감지함
    firebaseAuth.onAuthStateChanged((user) => {
      if(user) {
        // user의 displayName, uid, updateProfile만 userObject에 넣어줌
        setUserObject({
          displayName: user.displayName ? user.displayName : "사용자",
          uid: user.uid,
          updateProfile: (argument) => user.updateProfile(argument)
        });
      } else {
        setUserObject(null);
      }
      setFirebaseListen(true);
    });
  }, []);

  // project 내의 displayName을 변경시켜줌
  const currentUserName = () => {
    const user = firebaseAuth.currentUser;
    setUserObject({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (argument) => user.updateProfile(argument)
    });
  };

  return (
    <div className="app">
      <h3 className="title">🌳 Book-ggum-na-mu 🌳</h3>
      {firebaseListen ? <AppRouter login={Boolean(userObject)} userObject={userObject} currentUserName={currentUserName}/> : "로그인 정보를 불러오는 중..."}
    </div>
  );
}

export default App;
