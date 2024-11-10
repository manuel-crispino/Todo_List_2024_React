import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps{
index:number;
globalIndex:number;
newItem:string;
onRemove:(index:number)=>void;
}

export default function TodoItem({index,globalIndex,newItem,onRemove}:TodoItemProps){
    return(
        <li  key={index} className="no-ul flex ">

           <div className="flex-1 text-left">
            <span>{globalIndex})</span>
            </div >

            <div className="flex-2 text-right">
            <span >{newItem}</span>
            </div>

            <div className="flex-1 ">
            <input  className="text-right check-box " type="checkbox"  title="checkbox"/>
            </div>

            <div className="flex-1 text-left">
                <button type="button" className="no-input-style delete-btn" onClick={()=>onRemove(index)}>
                    {<DeleteIcon fontSize="small"/>} 
                </button>
            </div>

        </li>
    )
}