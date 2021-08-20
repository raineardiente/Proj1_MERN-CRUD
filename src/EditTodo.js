import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';

export const EditTodo = () => {
	const {todo, setTodo}= useState();
	
	useEffect(() =>{
		setTodo({
			text: "foo"
		})
	}, [])

	return todo ? <TodoForm todo=  {todo}/> : <div>Loading...</div>
}
