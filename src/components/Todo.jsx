import React from "react";
import addlist from "../asset/addlist.png"
import TodoItems from "./Todoitems";

const Todo = () => {
	return (
		<div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

			{/* ---------title---------- */}

			<div className="flex items-center mt-7 gap-2">
				<img className="w-8" src={addlist} alt="" />
				<h1 className="text-3xl font-semibold">To-Do List</h1>
			</div>

			{/* ---------input box---------- */}

			<div className="flex items-center my-7 bg-gray-200 rounded-full">
				<input className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your task"/>
				<button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
			</div>

			{/* ---------todo list---------- */}

			<div>
				<TodoItems/>
			</div>
		</div>
	)
}

export default Todo