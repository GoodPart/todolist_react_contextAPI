import React from 'react'
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const date = new Date()

const year = date.getFullYear()
let month = date.getMonth()+1 /*  +1의 이유는 0부터 시작하기 때문.  */
let date_ = date.getDate()
let day = date.getDay()
let dayArray = ['일','월','화','수','목','금','토']


// console.log(dayArray[day])


month = month >= 10 ? month :"0"+ month;
date_ = date_ >= 10 ? date_ :"0"+ date_;
day = dayArray[day];

// console.log(date)
const TodoHeadBlock = styled.div`

    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function TodoHead() {
    const todos = useTodoState();//Todocontext.js에 state값을 가져옴 `initialTodos`
    const undoneTasks = todos.filter(todo => !todo.done); //미완료인 갯수를 가져옴 false값을 가져옴
    console.log(todos)
    return (
        <TodoHeadBlock>
            <h1>{year}년 {month}월 {date_}일</h1>
            <div className="day">{day}요일</div>
    <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;