import React from 'react';
import './TodoListTemplate.css';

//클래스형 선언이 아닌 함수형 선언
const TodoListTemplate = ({form, palette, children}) => {
    return (
        <main className="todo-list-template">
            <div className='title'>
                오늘 할 일
            </div>
            <section className='palette-wrapper'>
                { palette }
            </section>
            <section className="form-wrapper">
                { form }
            </section>
            <section className='todos-wrapper'>
                { children }
            </section>
        </main>
    );
};
/*
({form, children}) 이렇게 선언하여 비구조화 할당을 이용해서 파라미터를 받음.
<TodoListTemplate form{<div>여긴 form자리.</div>}>
    <div>여긴 children자리</div>
</TodoListTemplate>
JSX형태로 전달한다.
이렇게 JSX를 컴포넌트의 props로 넘겨주는 방법은 앞으로 유용할 것.
이렇게 Template 컴포넌트를 사용하지 않는다면
TodoListWrapper라는 컴포넌트를 만들어서 children 내부에 모든 걸 다 넣어주는 식으로 구현해야 한다.
<TodoListWrapper><Form /><TodoList /></TodoListWrapper>
문제가 되진 않지만, Form과 TodoList사이에 테두리를 설정한다고 했을 때, 만약 Template 컴포넌트를 사용하는 경우
이런 스타일은 Template내에 넣어주면 되지만, Wrapper컴포넌트를 사용할 경우,
해당 스타일을 Form 혹은 TodoList 쪽에 넣어줘야 한다.

*/
export default TodoListTemplate;