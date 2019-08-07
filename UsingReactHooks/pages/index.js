import React, { useState } from 'react';

const InputElement = () => {

  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        onChange={(e) => { setInputText(e.target.value) }}
        placeholder="Enter Some Text" 
      />
      <p>{inputText}</p>
    </div>
  )
};

export default InputElement;