import React, {useMemo} from 'react';
import TodoItem from './TodoItem';

const makeTodoList = ({todos, onToggle, onRemove}) => {
    console.log('TodoList 갱신');
    return todos.map(
        ({id, text, checked, color}) =>(
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                color={color}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        )  
    );
}

const TodoItemList = ({todos, onToggle, onRemove}) => {

    const todoList = useMemo(() => makeTodoList({todos, onToggle, onRemove}), [todos, onToggle, onRemove]);
    return (
        <div>
            {todoList}
        </div>
    )
}
/*
class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render(){
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}*/

export default TodoItemList;