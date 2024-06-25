import React from "react";
import tick from "../asset/tick.png"
import no_tick from "../asset/no_tick.png"
import delete_icon from "../asset/delete_icon.png"

const TodoItems = ({text, id, isComplete, deleteTodo}) => { 
    return (
        <div className="flex items-center my-3 gap-2">
            <div className="flex flex-1 items-center cursor-pointer">
                <img className="w-7 bg-orange-600 rounded-full" src={tick} alt=""/>
                <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
            </div>
            <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className="w-3.5 cursor-pointer" />
        </div>

    )
}

export default TodoItems