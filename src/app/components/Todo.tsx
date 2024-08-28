'use client';

import React, { useState } from 'react';
import TodoCard from './TodoCard';
import { IoIosAdd } from 'react-icons/io';

const Todo = () => {

  const initialTodos = [
    {
      title: 'Task-1',
      date: '8:30pm - Today',
      status: 'pending',
    },
    {
      title: 'Task-2',
      date: '8:30pm - Today',
      status: 'completed',
    },
    {
      title: 'Task-3',
      date: '8:30pm - Today',
      status: 'completed',
    },
    {
      title: 'Task-4',
      date: '9:00am - Tomorrow',
      status: 'pending',
    },
    {
      title: 'Task-5',
      date: '10:00am - Tomorrow',
      status: 'pending',
    },
    {
      title: 'Task-6 ',
      date: '10:00am - Tomorrow',
      status: 'pending',
    },
  ];

  const [todo, setTodo] = useState(initialTodos.slice(0, 2)); 

  const addBlock = () => {
    if (todo.length < initialTodos.length) {
      const nextBlock = initialTodos[todo.length];

      setTodo((prevTodo) => {
        if (prevTodo.length === 2) {
          return [...prevTodo.slice(1), nextBlock];
        }
        return [...prevTodo, nextBlock];
      });
    }
  };

  return (
    <div className="w-full h-full p-4 flex flex-col items-center rounded-xl border-[1px] border-gray-200 ">
      <div className="flex flex-col gap-2 w-full m-auto h-full">
        {todo.map((item, index) => (
          <TodoCard key={index} title={item.title} date={item.date} status={item.status} />
        ))}
      </div>
      <button
        onClick={addBlock}
        className="p-3 justify-self-end mx-3 bg-orange-600 rounded-full hover:shadow-xl"
      >
        <IoIosAdd size={30} />
      </button>
    </div>
  );
};

export default Todo;
