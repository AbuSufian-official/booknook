"use client";


import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client"

export function WithForm({ bookdata }) {




  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());
    console.log(userdata)
    const obj={...userdata,copies:Number(userdata.copies)}
    const { data:tokedata, error } = await authClient.token()
    const FD = await fetch(`https://booknook-server-amber.vercel.app/books/${bookdata._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: tokedata?.token
      },
      body: JSON.stringify(obj),
    })
    redirect("/my-books")














  };


  return (
    <Modal>
      <Button className="text-[#027cd4]" variant="secondary">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">

              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-black">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>

            <form onSubmit={onSubmit}>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <div className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text" variant="secondary">
                      <Label>Title</Label>
                      <Input placeholder="Enter your book title" />
                    </TextField>
                    <TextField className="w-full" name="copies" variant="secondary">
                      <Label>Copies</Label>
                      <Input type="number" placeholder="Enter your book copies" />
                    </TextField>
                    <TextField className="w-full" name="description" type="text" variant="secondary">
                      <Label>Description</Label>
                      <Input placeholder="Enter your book title" />
                    </TextField>
                  </div>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" >Send Message</Button>
              </Modal.Footer>
            </form>




          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}