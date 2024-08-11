import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/todoSlice";

function AddTodo({editableTodo, setEditableTodo}) {
  const [input, setInput] = useState(editableTodo ? editableTodo.text : '');
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(editableTodo ? editableTodo.text : '');
  }, [editableTodo]);

  const submitTodo = (e) => {
    e.preventDefault();
    if(editableTodo){
      dispatch(editTodo({id: editableTodo.id, text: input, status: false}))
      setEditableTodo(null);
    }else{
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <div className="">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          Add Todo
        </h2>
        <form
          onSubmit={submitTodo}
          className="bg-gray-100 p-5 rounded-md flex flex-col gap-4"
        >
          <input
            className="h-10 rounded-md border-0 px-4"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your todo"
          />
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            {editableTodo ? 'Update Todo' : 'Add Todo'}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
