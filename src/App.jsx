import { useState } from "react";
import ToDoLists from "./ToDoLists";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={inputList}
            onChange={itemEvents}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map((itemVal) => {
              return <ToDoLists text={itemVal} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
