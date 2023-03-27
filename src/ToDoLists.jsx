import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo-style">
        <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoLists;
