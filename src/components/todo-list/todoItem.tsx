import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps{
index:number;
globalIndex:number;
newItem:string;
onRemove:(index:number)=>void;
onCheckboxChange: (isChecked: boolean) => void; // Aggiungi callback per comunicare il cambio
}

export default function TodoItem({index,globalIndex,newItem,onRemove,onCheckboxChange}:TodoItemProps){
   
     const [isChecked, setIsChecked] = React.useState<boolean>(false); 
    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        setIsChecked(checked);
        onCheckboxChange(checked); // Aggiorna il conteggio nel componente principale
    }


    return(
        <li  key={index} className="no-ul flex ">
           <div className="flex-1 text-left">
            <span>{globalIndex})</span>
            </div >

            <div className="flex-2 text-right">
            <span >{newItem}</span>
            </div>

            <div className="flex-1 ">
            <input  className="text-right check-box " type="checkbox"  title="checkbox"  checked={isChecked}
                    onChange={handleCheckboxChange}/>
            </div>

            <div className="flex-1 text-left">
                <button type="button" className="no-input-style delete-btn" onClick={()=>onRemove(index)}>
                    {<DeleteIcon fontSize="small"/>} 
                </button>
            </div>
            
        </li>
    )
}