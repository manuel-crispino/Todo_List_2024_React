import React,{useState} from "react";
import AddItem from "./addItem";
import Pagination from "./pagination";
import TodoItem from "./todoItem";

export default function TodoList(){
const [item,setItem]=useState<string>("");
const [listItem,setListItem]=useState<string[]>([]);
const [currentItems,setCurrentItems]=useState<string[]>([]);
const [isAddItemClicked,setAddItemClicked]=useState<boolean>(false);
const [currentPage, setCurrentPage] = useState<number>(1); // Aggiungi stato per la pagina corrente
const [completedTasks, setCompletedTasks] = useState<number>(0);
const itemsPerPage:number=8;
const totalItems:number=listItem.length;



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

function removeItem(index: number) {
    const globalIndex = getGlobalIndex(index) - 1; // Ottieni l'indice globale
    setListItem((prevItems) => prevItems.filter((_, i) => i !== globalIndex));
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

    function handleCheckboxChange(isChecked: boolean) {
        setCompletedTasks((prev) => (isChecked ? prev + 1 : prev - 1));
    }

 //styles 
const addText = isAddItemClicked? "hide inputs" : "add item" ;
return(
    <div className="list-map ">
    <h3 className="text-center">To-do-list</h3>
    <ul className="no-ul">
    
        {currentItems.map((newItem,index)=>(
        <TodoItem 
            index={index}
            globalIndex={getGlobalIndex(index)} 
            newItem={newItem} 
            onRemove={removeItem} 
            onCheckboxChange={handleCheckboxChange} // Passa la funzione di callback
        />
        ))}

        <li>
         <hr className="solid-line" />
         </li>
      <AddItem    
        item={item}
        onInputChange={handleInput}
        onAdd={() => (handleList())}
        isVisible={isAddItemClicked}
        />
        <li><span>total items : {totalItems}</span></li>
        <li><span>completed tasks : {completedTasks}</span></li>

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


