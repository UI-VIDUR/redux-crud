import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  PencilIcon,
  TrashIcon,
  CheckCircleIcon
} from '@heroicons/react/16/solid'
import { deleteTodo, editTodo, toggleStatus } from '../store/todoSlice'
import { useDispatch } from 'react-redux'

export default function DropdownMenu({todo, handleEditTodo}) {

  const dispatch = useDispatch()

  return (
    <div className="w-52 mx-auto">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 rounded-xl border border-white/5 bg-gray-950 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button 
            className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 ${todo.status ? 'cursor-not-allowed': 'cursor-pointer'}`} onClick={() => handleEditTodo(todo)} disabled={todo.status ? true : false}>
              <PencilIcon className="size-4 fill-white/30" />
              Edit
            </button>
          </MenuItem>

          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={() => dispatch(toggleStatus(todo))}>
              <CheckCircleIcon className="size-4 fill-white/30" />
              {todo.status ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
          </MenuItem>

          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            onClick={() => dispatch(deleteTodo(todo.id))}>
              <TrashIcon className="size-4 fill-white/30" />
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}