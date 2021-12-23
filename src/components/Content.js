import { fireDatabase } from 'myFirebase';
import React, { useState } from 'react';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import style from 'css/Content.module.css';

function Content({content, isWriter}) {
  const [updateMode, setUpdateMode] = useState(false);
  const [editText, setEditText] = useState(content.text);

  const contentFromDatabase = doc(fireDatabase, "contents", `${content.id}`);

  const deleteButtonHandler = async() => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if(confirm) {
      await deleteDoc(contentFromDatabase);
    }
  };

  const toggleUpdate = () => {
    setUpdateMode((current) => !current);
  };

  const editTextChange = ({target : {value}}) => {
    setEditText(value);
  };

  const formSubmit = async(e) => {
    e.preventDefault();
    await updateDoc(contentFromDatabase, {text: editText});
    setUpdateMode(false);
  };

  return (
    <div>
      {updateMode ?
        <> 
          {isWriter && 
            <div className={style.update_form}>
              <form onSubmit={formSubmit}>
                <input type="text" value={editText} onChange={editTextChange} required/>
                <button type="submit">수정하기</button>
              </form>
              <button onClick={toggleUpdate}>취소</button>
            </div>
          }
        </>
        :
        <>
          <h4 className={style.title}>{content.text}</h4>
          {/* 작성자와 로그인 중인 사용자가 같을 때 */}
          {isWriter && 
            <div className={style.content_button}>
              <button type="button" onClick={toggleUpdate}>수정</button>
              <button type="button" onClick={deleteButtonHandler}>삭제</button>
            </div>
          }
        </>
        }
    </div>
  )
}

export default Content;
