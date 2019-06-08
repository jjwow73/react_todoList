import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [
      {id: 0, text: ' 리액트 소개0', checked: false },
      {id: 1, text: ' 리액트 소개1', checked: true },
      {id: 2, text: ' 리액트 소개2', checked: false },
    ],
    color:'#343a40',
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
    const { input, color, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color,
      })
    });
  }
  handleKeyPress = (e) => {
    //눌려진 키가 Enter면 handleCreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;
    //파라미터로 받은 id를 가지고 몇 번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  handleColorChange = (color) => {
    console.log(color);
    this.setState({
      color:color
    })
  }
  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColorChange
    } = this;
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
}
export default App;