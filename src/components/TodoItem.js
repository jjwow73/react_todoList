import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        return (
            <div className='todo-item' onClick={() => onToggle(id)}>
                <div className='remove' 
                    onClick={(e) => {
                        e.stopPropagation();//onToggle 방지.이벤트의 '확산'을 막음. 
                        onRemove(id)}
                    }>&times;</div>
                <div style={{ color }} className={`todo-text ${checked && 'checked'}`}>
                    {/*  "todo-text " + checked && 'checked' 와 동일
                    `todo-text ${ checked ? ' checked' : '' }` 이렇게 작성해도 됨
                */}
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className='check-mark'>&#x2713;</div>)
                }
            </div>
        );
    }
}
/*
onToggle과 onRemove 는 id 를 파라미터로 넣으면 해당 id 를 가진 데이터를 업데이트합니다.
 파라미터를 넣어줘야 하기 때문에, 이 과정에서 우리는 onClick={() => onToggle(id)} 와 같은 형식으로
 작성을 했는데요, onClick={onToggle{id}} 와 같은 형식으로 하고 싶다면.. 절대 안됩니다!! 
 리액트가 초심자가 한번 쯤 할 수 있는 실수입니다. 
 이렇게 하면 해당 함수가 렌더링 될 때 호출이 됩니다. 
 해당 함수가 호출되면 데이터가 변경 될 것이고, 데이터가 변경되면 또 리렌더링이 되겠죠? 
 그러면 또 이 함수가 호출되고.. 무한 반복입니다.
*/
export default TodoItem;