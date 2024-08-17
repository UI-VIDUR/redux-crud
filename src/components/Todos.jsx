import React from "react";
import { useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";

function Todos({handleEditTodo}) {

    const todos = useSelector(state => state.todos)

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold uppercase text-center mb-6">Todos</h2>
                <table className="w-full">
                    <thead className="bg-slate-900 text-white">
                        <tr>
                            <th className="font-medium p-2 text-center">Serial No.</th>
                            <th className="font-medium p-2 text-center">Todo</th>
                            <th className="font-medium p-2 text-center">Actions</th>
                            <th className="font-medium p-2 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            todos && todos.map((todo, index) => {
                                return (
                                    <tr key={todo.id} className="odd:bg-slate-100">
                                        <td className="py-2 font-semibold">{index + 1}</td>
                                        <td className={`py-2 font-semibold ${todo.status ? 'line-through' : ''}`}>{todo.text}</td>
                                        <td className="py-2">
                                            <DropdownMenu todo={todo} handleEditTodo={handleEditTodo} />
                                        </td>
                                        <td className="py-2 font-semibold">
                                            <span className="text-[10px] uppercase bg-green-100 text-green-700 py-1 px-2 rounded-sm">{todo.status ? 'Completed' : 'Active'}</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todos;