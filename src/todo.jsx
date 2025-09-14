import React, { use, useState } from 'react'
import Card from './card';

const Todo = () => {
    const [info, setInfo] =useState({
        name: "",
        surname: "",
    });
    const [value, setValue] =useState([]);
    const submit =(e) =>{
        e.preventDefault();
        let data =[{name :info.name, surname:info.surname, id:Date.now()}, ...value];
        setValue(data);
        setInfo({
            name:"",
            surname:""
        })
    }
  return (
    <div className='w-[60%] m-auto py-5'>

        <form onSubmit={submit} className='flex flex-col gap-[1rem]'>
            <input onChange={(e) =>setInfo({
                ...info,
                name:e.target.value,
            })} type="Name" value={info.name} placeholder='John' required className='w-full outline-[blue] border-[2px] border-[blue] py-[10px] px-[1rem] rounded-[8px]' autoComplete='off'/>


            <input onChange={(e) =>setInfo({
                ...info,
                surname:e.target.value,
            })}type="Surname" value={info.surname} placeholder='Doe' required className='w-full outline-[blue] border-[2px] border-[blue] py-[10px] px-[1rem] rounded-[8px]' autoComplete='off'/>


            <div>
            <button className='py-[10px] px-[2rem] bg-blue-400 text-white max-w-[200px] border-[2px] border-transparent w-full rounded-[8px] cursor-pointer hover:bg-transparent hover:border-[2px] hover:border-blue-400 hover:text-blue-400'>Add</button>
            </div>
        </form>
        


     <div  className='mt-5 flex flex-col gap-4 max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:"none"] [scrollbar-width:"none"] border-[2px] border-blue-300 p-5'>
            {value.map((item) => 
                <Card key={item.id} {...item} />
                )}
        </div>
     </div>
  )
}

export default Todo