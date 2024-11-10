import React from "react";

interface Props{
    listItems:string[]; // array 
    itemsPerPage:number; 
    onPageChange: (currentItems: string[],currentPage: number) => void; // callback per inviare gli elementi correnti a TodoList
}

export default function Pagination({ listItems, itemsPerPage, onPageChange }:Props){
    
    const [currentPage, setCurrentPage] = React.useState(1); // Stato per tracciare la pagina corrente
   
    
 

    // Calcola il numero totale di pagine
    const totalPages = Math.ceil(listItems.length / itemsPerPage);

    // Determina quali elementi mostrare in base alla pagina corrente
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

     // Funzione per gestire il cambio pagina tramite tasti freccia
     function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "ArrowRight") {
            if (currentPage < totalPages) {
                setCurrentPage(prevPage => prevPage + 1);
            }
        }
        if (event.key === "ArrowLeft") {
            if (currentPage > 1) {
                setCurrentPage(prevPage => prevPage - 1);
            }
        }
    }

    // Effetto per aggiungere e rimuovere l'event listener su `keydown`
    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        // Rimuovere l'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentPage, totalPages]);


    // Invia gli elementi della pagina corrente a TodoList
    React.useEffect(() => {
        onPageChange(currentItems,currentPage);
    }, [currentItems,currentPage, onPageChange]);
  
    // Funzione per cambiare pagina
    function paginate(pageNumber: number) {
        setCurrentPage(pageNumber);
    }


    return (
        <div >
            {/* Mostra i pulsanti di paginazione solo se ci sono più di 10 elementi */}
            {listItems.length > itemsPerPage && (
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
        );
}