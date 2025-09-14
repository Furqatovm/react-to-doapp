import React from 'react'
import { MdDelete } from "react-icons/md"
import { MdEdit } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";


const Card = ({name, id, deleteTodo, editValue, time, edited}) => {
  return (
    <div className='flex justify-between items-center py-[10px] px-[1rem] rounded-[8px] bg-blue-400 w-full'>
       <div className='flex-3 flex gap-[1rem] items-center'>
        <button onClick={()=>deleteTodo(id)}  className='text-white text-[1.5rem] cursor-pointer hover:text-black'>
        <MdOutlineDone />
        </button>
       <p className='text-white max-md:text-[14px]'>{name}</p>
       </div>
       <div className='flex flex-col flex-1 items-center justify-between'>
       <p className='text-white max-md:text-[14px]'>{time}</p>
        <span className='text-[10px] text-white'>{edited ? "edited": ""}</span>
       </div>
       <div className='flex gap-[1rem] items-center flex-1]'>
       <button onClick={()=> editValue({id, name})} className='text-[30px] text-white cursor-pointer  hover:text-black max-md:text-[20px]'>
            < MdEdit />
        </button>
        <button onClick={()=>deleteTodo(id)} className="text-[30px] text-white cursor-pointer hover:text-red-500 max-md:text-[20px]">
        < MdDelete />
        </button>
       </div>
    </div>
  )
}

export default Card