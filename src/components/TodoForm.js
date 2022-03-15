import React, { useEffect, useRef, useState } from 'react';

const TodoForm = (props) => {

  const [input, setInput] = useState(props.edit? props.edit.value : '');

  const inputRef =  useRef(null);

  
  useEffect(()=>{
    inputRef.current.focus()
  })
  
  const handleChange = e =>{
    setInput(e.target.value);
  }

  const handlerSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  }

  return (
    <form className='todo-form' onSubmit={handlerSubmit}>
      <input
        type='text'
        placeholder='Write your task'
        value={input}
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='todo-button'>Add</button>
    </form>
  );
};

export default TodoForm;
