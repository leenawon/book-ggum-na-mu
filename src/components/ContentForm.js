import React, { useRef, useState } from 'react';
import { fireDatabase } from 'myFirebase';
import { addDoc, collection } from 'firebase/firestore';
import style from 'css/ContentForm.module.css';

function ContentForm({userObject}) {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState("");
  const InputFile = useRef();

  const textChange = ({target : {value}}) => {
    // setText(e.target.value);
    setText(value);
  };

  const formSubmit = async(e) => {
    e.preventDefault();

    const contentObject = {
      text, createdAt: Date.now(), 
      writerUID: userObject.uid
    };

    await addDoc(collection(fireDatabase, "contents"), contentObject);
    setText("");
  };

  const imageFileChange = ({target: {files}}) => {
    const file = files[0];
    // FileReader Web Api 를 이용해 파일을 읽음
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = ({currentTarget: {result}}) => {
      setImageFile(result);
    };
  };

  const clearImageFile = () => {
    setImageFile("");
    InputFile.current.value = "";
  }

  return (
    <div>
      <form className={style.content_form} onSubmit={formSubmit}>
        <div className={style.input_wrapper}>
          <div>
            <input type="text" value={text} onChange={textChange} placeholder="작성하고 싶은 내용을 적어주세요📢" maxLength={150} />
            <button className={style.submit_button} type="submit">글 올리기</button>
          </div>
          <label htmlFor="input_file">📸이미지 업로드</label>
          <input type="file" ref={InputFile} id="input_file" accept="image/*" onChange={imageFileChange}/>
        </div>
        {imageFile && 
          <div className={style.image_upload}>
            <img src={imageFile} alt="업로드한 이미지"/>
            <button onClick={clearImageFile}>이미지 지우기</button>
          </div>
        }
      </form>
    </div>
  )
}

export default ContentForm;
