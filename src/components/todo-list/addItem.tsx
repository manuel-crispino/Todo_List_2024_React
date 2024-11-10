import React from "react";
import AddIcon from '@mui/icons-material/Add';


interface AddItemProps{
isVisible:boolean;
item:string;
onAdd:()=>void;
onInputChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

export default function AddItem({isVisible,item,onAdd,onInputChange}:AddItemProps){
if (!isVisible)return null;
    return(
     
<li className={` no-ul flex`}> 
        <div className="flex-2 text-right">
        <input
            className="input-message" 
            placeholder="write here.. " type="text" 
            value={item} onKeyDown={(e)=>e.key === "Enter" && onAdd()} 
            onChange={onInputChange} 
          />
        </div>
        <div className="flex-1 text-left margin-left-10 ">
            <button type="button" className="round-btn" onClick={onAdd}>
                {<AddIcon fontSize="small"/>}
            </button>
            </div>
        </li>
       
        
    )
}