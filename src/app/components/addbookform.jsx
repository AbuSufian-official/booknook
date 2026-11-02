"use client"

import { useState } from "react"
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react"
import { BookPlus, Image as ImageIcon, CheckCircle, ExternalLink } from "lucide-react"

export default function AddBookForm() {
  // Mock logged-in user (read-only)
  const loggedInUser = {
    name: "Alex Reader",
    email: "alex.reader@booknook.com",
  }

  // State for image preview and submit message
  const [imageUrl, setImageUrl] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  // Handle Form Submission
  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data= Object.fromEntries(formData.entries())
    
    const FD=await fetch("http://localhost:8000/books",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    })
    const CFD=await FD.json()
    console.log(CFD)









    setIsSuccess(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setImageUrl("")
      e.target.reset()
    }, 3000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-8 px-4">
      <Surface className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        
        {/* Success Alert Banner */}
        {isSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 transition">
            <CheckCircle className="text-emerald-600 shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm">Book Added Successfully!</p>
              <p className="text-xs text-emerald-700">Your book is now listed in the BookNook library.</p>
            </div>
          </div>
        )}

        <Form onSubmit={handleSubmit} className="space-y-6">
          <Fieldset className="w-full space-y-6">
            
            {/* Form Title & Subtitle */}
            <div className="border-b border-gray-100 pb-4">
              <Fieldset.Legend className="text-2xl font-bold text-gray-900 tracking-tight">
                Add a New Book
              </Fieldset.Legend>
              <Description className="text-sm text-gray-500 mt-1">
                Share a book with the community. Fill out the details below to add it to BookNook.
              </Description>
            </div>

            <Fieldset.Group className="space-y-5">
              
              {/* 1. Book Title & 2. Author Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField isRequired name="title">
                  <Label className="text-sm font-medium text-gray-900">Book Title</Label>
                  <Input
                    placeholder="e.g. To Kill a Mockingbird"
                    className="mt-1"
                  />
                  <FieldError />
                </TextField>

                <TextField isRequired name="author">
                  <Label className="text-sm font-medium text-gray-900">Author Name</Label>
                  <Input
                    placeholder="e.g. Harper Lee"
                    className="mt-1"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* 3. Category Select Box */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="category" className="text-sm font-medium text-gray-900">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#027cd4] focus:border-transparent transition"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Kids">Kids</option>
                  <option value="Others">Others</option>
                </select>
                <p className="text-xs text-gray-500">
                  Choose the category that best matches your book.
                </p>
              </div>

              {/* 4. Book Image URL (ImgBB / PostImage upload) */}
              <TextField isRequired name="image">
                <Label className="text-sm font-medium text-gray-900 flex items-center justify-between">
                  <span>Book Image URL</span>
                  
                </Label>
                <Input
                  type="url"
                  placeholder="https://i.ibb.co/... or image link"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="mt-1 "
                />
                <Description className="text-xs text-gray-500">
                  Upload your book cover. Paste the direct image URL here.
                </Description>
                <FieldError />
              </TextField>

              {/* Image Preview Thumbnail */}
              {imageUrl && (
                <div className="flex items-center gap-3 p-3 bg-blue-50/50 border border-blue-100 rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt="Cover preview"
                    className="w-12 h-16 object-cover rounded-md border border-gray-200 shadow-xs"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                  <div className="text-xs text-gray-700">
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <ImageIcon size={14} className="text-[#027cd4]" />
                      Image Preview Loaded
                    </p>
                    <p className="text-gray-500 truncate max-w-xs">{imageUrl}</p>
                  </div>
                </div>
              )}

              {/* 5. Short Description */}
              <TextField isRequired name="description">
                <Label className="text-sm font-medium text-gray-900">Short Description</Label>
                <TextArea
                  placeholder="Write a brief overview about the book, key topics, or why you recommend it..."
                  rows={4}
                  className="mt-1"
                />
                <Description className="text-xs text-gray-500">
                  Provide a short summary to help fellow readers know what the book is about.
                </Description>
                <FieldError />
              </TextField>

              {/* 6. User Name & User Email (Read-Only) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                <TextField isReadOnly name="userName" defaultValue={loggedInUser.name}>
                  <Label className="text-sm font-medium text-gray-700">User Name</Label>
                  <Input
                    readOnly
                    className="mt-1 bg-gray-100 text-gray-600 cursor-not-allowed border-gray-200"
                  />
                  <Description className="text-[11px] text-gray-400">
                    From logged-in account (Read-only)
                  </Description>
                </TextField>

                <TextField isReadOnly name="userEmail" defaultValue={loggedInUser.email}>
                  <Label className="text-sm font-medium text-gray-700">User Email</Label>
                  <Input
                    readOnly
                    className="mt-1 bg-gray-100 text-gray-600 cursor-not-allowed border-gray-200"
                  />
                  <Description className="text-[11px] text-gray-400">
                    From logged-in account (Read-only)
                  </Description>
                </TextField>
              </div>

            </Fieldset.Group>

            {/* 7. "Add Book" Button */}
            <Fieldset.Actions className="pt-2">
              <Button
                type="submit"
                className="w-full bg-[#027cd4] hover:bg-[#0269b3] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                <BookPlus size={20} />
                <span>Add Book</span>
              </Button>
            </Fieldset.Actions>

          </Fieldset>
        </Form>
      </Surface>
    </div>
  )
}
