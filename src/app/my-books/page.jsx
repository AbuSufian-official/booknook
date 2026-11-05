import React from 'react'
import Mybookcontainer from '../components/mybookcontainer';
export const metadata = {
  title: "BookNook | MY BOOKS ",
  description: "Share a book with fellow readers on BookNook.",
}
async function Mybooks() {
    
    const FD = await fetch(`https://booknook-server-amber.vercel.app/books`);
    const books = await FD.json()
    


    return (
        <div>
            <Mybookcontainer data={books} />

        </div>
    )
}

export default Mybooks
