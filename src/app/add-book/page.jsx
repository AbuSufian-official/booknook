import React from "react"
import AddBookForm from "../components/addbookform"

export const metadata = {
  title: "Add a New Book | BookNook",
  description: "Share a book with fellow readers on BookNook.",
}

function AddBookPage() {
  return (
    <div className="min-h-screen bg-gray-50/60 py-8">
      <div className="container mx-auto px-4">
        <AddBookForm />
      </div>
    </div>
  )
}

export default AddBookPage
