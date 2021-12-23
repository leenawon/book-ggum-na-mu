import { fireDatabase } from 'myFirebase';
import React from 'react';
import { doc, deleteDoc } from "firebase/firestore";
import style from 'css/Content.module.css';

function Content({content, isWriter}) {
  const contentFromDatabase = doc(fireDatabase, "contents", `${content.id}`);

  const deleteButtonHandler = async() => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if(confirm) {
      await deleteDoc(contentFromDatabase);
    }
  };

  return (
    <div>
      {/* 작성자와 로그인 중인 사용자가 같을 때 */}
      {isWriter && 
        <div className={style.content_button}>
          <button type="button">수정</button>
          <button type="button" onClick={deleteButtonHandler}>삭제</button>
        </div>
      }
    </div>
  )
}

export default Content;
