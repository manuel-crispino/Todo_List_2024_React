import React from "react";  

export default function About() {
    const [listItems, setListItems] = React.useState<string[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1); // Stato per tracciare la pagina corrente
    const itemsPerPage = 10; // Numero di elementi per pagina
    const worlds: string = "new Item";
    const [count,setCount] = React.useState<number>(1);

    // Aggiungi un nuovo elemento
    function handleItems() {
        setCount(prevCount => prevCount + 1);
        setListItems(prevItems => [...prevItems, worlds + " " +count.toString()]);
        
    }

    // Calcola il numero totale di pagine
    const totalPages = Math.ceil(listItems.length / itemsPerPage);

    // Determina quali elementi mostrare in base alla pagina corrente
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

    // Funzione per cambiare pagina
    function paginate(pageNumber: number) {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="list-map">
            <h1 className="text-center">About</h1>

            <ul className="no-ul">
                {/* Mostra solo gli elementi della pagina corrente */}
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button type="button" onClick={handleItems}>Add Item</button>

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