"use client";


import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import React, { use, useState } from 'react'
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";


export function WithForm({ books }) {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userdata = Object.fromEntries(formData.entries());


    };

    let [btnvalue, setbtnvalue] = useState(false)
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch 
    } = authClient.useSession()

    const router = useRouter();
    async function handelBorrowBook(boo) {

        const { data:tokedata, error } = await authClient.token()


        const FD = await fetch(`http://localhost:8000/books/${boo._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: tokedata?.token
            },
            body: JSON.stringify({ ...boo, borrow: "Doborrow" }),
        })




        const getFutureDate = (days) => {
            const date = new Date();

            date.setDate(date.getDate() + days);

            return date.toISOString().split("T")[0];
        };
        const obj = {
            title: boo.title,
            image: boo.image,
            email: session?.user?.email,
            borrowDate: getFutureDate(0),
            returnDate: getFutureDate(3)
        }
        const PFD = await fetch(`http://localhost:8000/borrows`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 authorization: tokedata?.token
            },
            body: JSON.stringify(obj),
        })


        router.refresh();


    }

    const handelDisable = async (bid) => {
        const { data:tokedata, error } = await authClient.token()
        const FfD = await fetch(`http://localhost:8000/borrows/`,{
            headers:{
                authorization: tokedata?.token
            }
        })
        const CFfD = await FfD.json();
        let a = CFfD.find((n) => {
            return ((n.email == session?.user?.email) && (n.title == bid.title))
        })
        let btnstate = Boolean(a)

        setbtnvalue(btnstate)


    }

    handelDisable(books)





    return (
        <Modal>
            <Button className="text-[#027cd4]" variant="secondary">Borrow This Book →</Button>
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
                                        <TextField isReadOnly className="w-full" name="userName" defaultValue={session?.user?.name} type="text" variant="secondary">
                                            <Label>User Name</Label>
                                            <Input
                                                readOnly
                                                className="mt-1 bg-gray-100 text-gray-600 cursor-not-allowed border-gray-200"
                                            />
                                        </TextField>
                                        <TextField isReadOnly name="userEmail" defaultValue={session?.user?.email} className="w-full"  variant="secondary">
                                            <Label>User Email</Label>
                                            <Input
                                                readOnly
                                                className="mt-1 bg-gray-100 text-gray-600 cursor-not-allowed border-gray-200"
                                            />
                                        </TextField>

                                    </div>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button type="submit" >

                                    <button
                                        onClick={() => handelBorrowBook(books)}
                                        disabled={btnvalue}


                                        className="w-full rounded-xl bg-[#027cd4] px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-1 hover:bg-[#0165ad] hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
                                    >

                                        Borrow This Book →

                                    </button>


                                </Button>
                            </Modal.Footer>
                        </form>




                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}