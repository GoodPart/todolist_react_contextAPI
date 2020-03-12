import React from 'react';
import {createGlobalStyle} from 'styled-components' //전역으로 사용하는 style

import TodoTemplate from './components/TodoTemplate'
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate'

import { TodoProvider } from './TodoContext';

//createGlobalStyle에 글로벌 스타일을 사용 아래는 백틱을 이용해 작성
const GlobalStyle = createGlobalStyle` 
  body {
    background : #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList/>
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
