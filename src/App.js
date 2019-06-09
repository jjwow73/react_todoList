import React, { useRef, useState, useCallback } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

const App = () => {
  const id = useRef(3);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: ' 리액트 소개0', checked: false },
    {id: 1, text: ' 리액트 소개1', checked: true },
    {id: 2, text: ' 리액트 소개2', checked: false },
  ]);
  const [color, setColor] = useState('#343a40');
  
  const handleChange = useCallback((e)=>{
    setInput(e.target.value);
  });
  const handleCreate = useCallback(()=>{
    setTodos(
      todos.concat({
        id: id.current++,
        text: input,
        checked: false,
        color: color,
      })
    );
    setInput('');
  },[input, todos]);
  const handleKeyPress = useCallback((e) => {
    if(e.key === 'Enter')
      handleCreate();
  },[]);
  const handleToggle = useCallback((id)=> {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    setTodos(nextTodos);
  },[todos]);
  const handleRemove = useCallback((id) => {
      setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);
  const handleColorChange = useCallback((color) => {
    console.log(color);
    setColor(color);
  },[color]);
  return (
    <TodoListTemplate 
      form={(<Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        color={color}
      />)}
      palette={(<Palette
        colors={colors}  
        selected={color}
        onSelect={handleColorChange}
      />)}
    >
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </TodoListTemplate>
  
  );
}
export default App;