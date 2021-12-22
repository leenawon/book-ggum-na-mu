import React, { useState } from 'react';
import style from 'css/ContentForm.module.css';

function ContentForm() {
  const [text, setText] = useState("");

  const textChange = ({target : {value}}) => {
    // setText(e.target.value);
    setText(value);
  };

  const formSubmit = async(e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div>
      <form className={style.content_form} onSubmit={formSubmit}>
        <div className={style.input_wrapper}>
          <div>
            <input type="text" value={text} onChange={textChange} placeholder="작성하고 싶은 내용을 적어주세요📢" maxLength={150} />
            <button className={style.submit_button} type="submit">글 올리기</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContentForm;
