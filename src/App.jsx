import { useState } from "react";
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  const [editableTodo, setEditableTodo] = useState(null)

  const handleEditTodo = (todo) => {
    setEditableTodo(todo)
  }

  return (
    <>
      <div className="py-14 px-5 grid grid-cols-2 gap-10">
        <AddTodo editableTodo={editableTodo} setEditableTodo={setEditableTodo} />
        <Todos handleEditTodo={handleEditTodo} />
      </div>
    </>
  );
}

export default App;
