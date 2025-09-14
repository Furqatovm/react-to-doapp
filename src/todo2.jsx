import React, { use, useReducer, useRef, useState } from 'react'
import Card from './card';
import Img from './img';

const Todo2 = () => {

    const nameRef =useRef();
    const searchRef =useRef();
    const [value, setValue] =useState(()=>{
        const saved =localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [active, setActive] =useState(false);
    const [currentid, setCurrentid] =useState(0)
    const editValue =( {id, name} ) =>{
        nameRef.current.value =name,
        setCurrentid(id)
        setActive(true)
    }
    const submit =(e) =>{
        e.preventDefault();
         if(!active){
            let date =new Date();
            let Now =`${date.getFullYear()} /${date.getDate()}/ ${date.getHours()} : ${date.getMinutes()}`;
            let data =[{name : nameRef.current.value, time:Now, edited:false, id:Date.now()}, ...value];
            setValue(data);
            localStorage.setItem("todos", JSON.stringify(data));
         } else{
            let date =new Date();
            let Now =`${date.getFullYear()} /${date.getDate()}/ ${date.getHours()} : ${date.getMinutes()}`;
            let newData =value.map(item => item.id ===currentid ? {...item, name:nameRef.current.value, edited:true, time:Now}:item)
            setValue(newData);
            localStorage.setItem("todos", JSON.stringify(newData));
        setActive(false)

         }
        nameRef.current.value ='';
    }

    const deleteTodo =(id) =>{
        let new_data =value.filter(item => item.id !==id);
        setValue(new_data);
        localStorage.setItem("todos", JSON.stringify(new_data));
    }


    const filtered = value.filter(item =>
      item.name.toLowerCase().includes(
        (searchRef.current?.value || "").toLowerCase()
      )
    );
    



  return (
    <div className='w-[60%] m-auto py-5 max-md:w-[80%]'>

        <form onSubmit={submit} className='flex flex-col gap-[1rem]'>
            <input ref={nameRef}  type="Name" placeholder='Enter any task' required className='w-full outline-[blue] border-[2px] border-[blue] py-[10px] px-[1rem] rounded-[8px]' autoComplete='off'/>


            <input ref={searchRef} type="search"  placeholder='search something' className='w-full outline-[blue] border-[2px] border-[blue] py-[10px] px-[1rem] rounded-[8px]'   onChange={() => setValue([...value])}
              autoComplete='off'/>


            <div>
            <button className='py-[10px] px-[2rem] bg-blue-400 text-white max-w-[200px] border-[2px] border-transparent w-full rounded-[8px] cursor-pointer hover:bg-transparent hover:border-[2px] hover:border-blue-400 hover:text-blue-400'>{active ? "Edit":"Submit"}</button>
            </div>
        </form>
        

          <span className='mt-5 block text-[20px] text-blue-400 max-md:text-[1rem]'>Jami: {filtered.length}</span>
        <div className='flex flex-col gap-4 h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:"none"] [scrollbar-width:"none"] border-[2px] border-blue-300 p-5'>
  {filtered.length  ==0 ? <Img /> : filtered
  .map(item =>
    <Card key={item.id} {...item} deleteTodo={deleteTodo} editValue={editValue} />
  )}


</div>


<div className="flex gap-1 mt-4 w-full">
  {filtered.map((it) => {
    return (
      <div className ={`h-2 bg-blue-500 flex-1`}></div>
    )
  })}
</div>

</div>
     

     
  );
}

export default Todo2