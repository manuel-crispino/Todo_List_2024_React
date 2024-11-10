import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from "./pagination";

export default function TodoList(){
const [item,setItem]=useState<string>("");
const [listItem,setListItem]=useState<string[]>([]);
const [currentItems,setCurrentItems]=useState<string[]>([]);
const [isAddItemClicked,setAddItemClicked]=useState<boolean>(false);
const [currentPage, setCurrentPage] = useState<number>(1); // Aggiungi stato per la pagina corrente
const itemsPerPage:number=8;

function addItem(){
    setAddItemClicked(!isAddItemClicked);
}

function handleInput(event:React.ChangeEvent<HTMLInputElement>){
  const  newValue:string =  event.target.value;
  setItem(newValue);
}

function handleList(){
    if (item.trim() !== "") { // Aggiungi una condizione per evitare elementi vuoti
    setListItem(prevItems =>[...prevItems,item]);
    setItem("");
}
}

function removeItem(index: number) { // Cambia il tipo di index a number
    setListItem(prevItems => prevItems.filter((_, i) => i !== index)); // Rimuovi l'elemento
}

function checkKey(e:React.KeyboardEvent<HTMLInputElement>){
const keyDown= e.key;
if (keyDown === "Enter"){
    handleList(); /* on enter insert into the list */
}
}

 // Funzione per aggiornare gli elementi della pagina corrente
 function handlePageChange(currentItems: string[],currentPage:number) {
    setCurrentItems(currentItems);
    setCurrentPage(currentPage); 
}

    // Calcola l'indice globale dell'elemento
    function getGlobalIndex(index: number) {
        return (currentPage - 1) * itemsPerPage + index + 1;
    }

 //styles 
const hideInputNewItem = isAddItemClicked? "" : "hide" ;
const addText = isAddItemClicked? "cancel" : "add item" ;
return(
    <div className="list-map ">
    <h3 className="text-center">To-do-list</h3>
    <ul className="no-ul">
        {currentItems.map((newItem,index)=>(
        <li  key={index} className="no-ul flex ">

           <div className="flex-1 text-left">
            <span>{getGlobalIndex(index)})</span>
            </div >

            <div className="flex-2 text-right">
            <span >{newItem}</span>
            </div>

            <div className="flex-1 ">
            <input  className="text-right check-box " type="checkbox"  title="checkbox"/>
            </div>

            <div className="flex-1 text-left">
                <button type="button" className="no-input-style delete-btn" onClick={()=>removeItem(index)}>
                    {<DeleteIcon fontSize="small"/>} 
                </button>
            </div>

        </li>
        ))}
        <li>
         <hr className="solid-line" />
         </li>
        <li className={`${hideInputNewItem} no-ul flex`}> 
        <div className="flex-2 text-right">
        <input
            className="input-message  " 
            placeholder="write here.. " type="text" 
            value={item} onKeyDown={(e)=>checkKey(e)} 
            onChange={handleInput} 
          />
        </div>
        <div className="flex-1 text-left margin-left-10 ">
            <button type="button" className="round-btn" onClick={()=>(handleList(),addItem())}>
                {<AddIcon fontSize="small"/>}
            </button>
            </div>
        </li>
        
    </ul>
    <div className="text-center"> 
        <button className="button-container" type="button" onClick={addItem}>
        {addText}
        </button>
        </div>

        <Pagination itemsPerPage={itemsPerPage} onPageChange={handlePageChange} listItems={listItem}/>
      
  
</div>
)
}