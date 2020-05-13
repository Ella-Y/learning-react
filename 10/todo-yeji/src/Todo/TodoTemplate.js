import React from "react";
import "./Todo.css";
import { MdDone, MdDelete } from "react-icons/md";

const TodoTemplate = () => {
  return (
    <div className="TodoTemplateBlock">
      <TodoHead></TodoHead>
      <TodoList></TodoList>
      <TodoCreate></TodoCreate>
    </div>
  );
};

const TodoCreate = () => {
  return <div></div>;
};

const TodoItem = () => {
  return (
    <div className="TodoItemBlock">
      <div className="CheckCircle"></div>
      <div className="TodoText">할일 내용</div>
      <div className="Remove">
          <MdDelete></MdDelete>
      </div>
    </div>
  );
};

const TodoList = () => {
  return (
    <div className="TodoListBlock">
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </div>
  );
};
const TodoHead = () => {
  return (
    <div className="TodoHeader">
      <h1 className="TodoHeader">2020년 1월 1일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 N개 남음</div>
    </div>
  );
};

export default TodoTemplate;
