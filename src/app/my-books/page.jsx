import React from 'react'
import Mybookcontainer from '../components/mybookcontainer';
export const metadata = {
  title: "BookNook | MY BOOKS ",
  description: "Share a book with fellow readers on BookNook.",
}
async function Mybooks() {
    
    const FD = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
    const books = await FD.json()
    


    return (
        <div>
            <Mybookcontainer data={books} />

        </div>
    )
}

export default Mybooks
