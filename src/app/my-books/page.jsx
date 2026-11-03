import React from 'react'
import Mybookcontainer from '../components/mybookcontainer';

async function Mybooks() {
    
    const FD = await fetch("http://localhost:8000/books");
    const books = await FD.json()
    


    return (
        <div>
            <Mybookcontainer data={books} />

        </div>
    )
}

export default Mybooks
