import { fireDatabase } from 'myFirebase';
import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import ContentForm from 'components/ContentForm';

function Home({userObject}) {
  const [contents, setContents] = useState([]);
  
  // database에 있는 데이터 내림차순 정렬 후 state에 저장
  useEffect(() => {
    const documents = query(collection(fireDatabase, "contents"), orderBy("createdAt", "desc"));
    // onSnapshot은 데이터베이스의 변화를 실시간으로 알려줌
    onSnapshot(documents, (snapshot) => {
      const documentArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
      }));
      setContents(documentArray);
    });
    return () => setContents([]);
  }, []);

  return (
    <div>
      <ContentForm userObject={userObject}/>
      <div>
        {contents.map((content) => (
          <h4>{content.text}</h4>
        ))}
      </div>
    </div>
  )
}

export default Home;
