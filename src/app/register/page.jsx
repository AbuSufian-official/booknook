"use client";


import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import React from 'react'
import { authClient } from "@/lib/auth-client"
import { FcGoogle } from "react-icons/fc";


function Register() {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userdata = Object.fromEntries(formData.entries());


        const { data, error } = await authClient.signUp.email({
            name: userdata.name, // required, The name of the user.
            email: userdata.email, // required, The email address of the user.
            password: userdata.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            image: userdata.image, // An optional profile image of the user.
        });
        console.log(data)

    };
    const handelGoogleAuth = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        // <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        //     <TextField
        //         isRequired
        //         name="name"
        //         validate={(value) => {
        //             if (value.length < 3) {
        //                 return "Name must be at least 3 characters";
        //             }
        //             return null;
        //         }}
        //     >
        //         <Label>Name</Label>
        //         <Input placeholder="John Doe" />
        //         <FieldError />
        //     </TextField>
        //     <TextField
        //         isRequired
        //         name="email"
        //         type="email"
        //         validate={(value) => {
        //             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        //                 return "Please enter a valid email address";
        //             }

        //             return null;
        //         }}
        //     >
        //         <Label>Email</Label>
        //         <Input placeholder="john@example.com" />
        //         <FieldError />
        //     </TextField>
        //     <TextField
        //         isRequired
        //         name="image"
        //         validate={(value) => {
        //             if (value.length < 3) {
        //                 return "Name must be at least 3 characters";
        //             }
        //             return null;
        //         }}
        //     >
        //         <Label>Photo URL</Label>
        //         <Input placeholder="John Doe" />
        //         <FieldError />
        //     </TextField>
        //     <TextField
        //         isRequired
        //         minLength={6}
        //         name="password"
        //         type="password"
        //         validate={(value) => {
        //             if (value.length < 6) {
        //                 return "Password must be at least 6 characters";
        //             }
        //             if (!/[A-Z]/.test(value)) {
        //                 return "Password must contain at least one uppercase letter";
        //             }
        //             if (!/[0-9]/.test(value)) {
        //                 return "Password must contain at least one number";
        //             }

        //             return null;
        //         }}
        //     >
        //         <Label>Password</Label>
        //         <Input placeholder="Enter your password" />
        //         <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
        //         <FieldError />
        //     </TextField>

        //     <div className="flex gap-2">
        //         <Button type="submit">
        //             Submit
        //         </Button>
        //         <Button type="reset" variant="secondary">
        //             Reset
        //         </Button>
        //         <Button onClick={handelGoogleAuth} className="flex items-center gap-1" >
        //             <FcGoogle /><span className="font-bold text-[#027cd4]">Register with Google</span>
        //         </Button>

        //     </div>
        // </Form>


        <Form
            className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8"
            onSubmit={onSubmit}
        >
            <div className="mb-2 space-y-2 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
                    Create Account
                </h2>
                <p className="text-sm text-slate-500">
                    Join us today and get started!
                </p>
            </div>

            <TextField
                isRequired
                name="name"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Full Name
                    </span>
                </Label>
                <Input
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#027cd4] focus:bg-white focus:ring-4 focus:ring-[#027cd4]/10"
                />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9.\_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address
                    </span>
                </Label>
                <Input
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#027cd4] focus:bg-white focus:ring-4 focus:ring-[#027cd4]/10"
                />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="image"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Profile Photo URL
                    </span>
                </Label>
                <Input
                    placeholder="https://example.com/photo.jpg"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#027cd4] focus:bg-white focus:ring-4 focus:ring-[#027cd4]/10"
                />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                minLength={6}
                name="password"
                type="password"
                validate={(value) => {
                    if (value.length < 6) {
                        return "Password must be at least 6 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }
                    return null;
                }}
            >
                <Label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Password
                    </span>
                </Label>
                <Input
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#027cd4] focus:bg-white focus:ring-4 focus:ring-[#027cd4]/10"
                />
                <Description>
                    <span className="mt-2 block text-xs text-slate-500">
                        At least 6 characters, 1 uppercase letter and 1 number.
                    </span>
                </Description>
                <FieldError />
            </TextField>

            <div className="flex flex-col gap-3 pt-2">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                        type="submit"
                        className="flex w-full flex-1 items-center justify-center rounded-xl bg-[#027cd4] px-5 py-3 font-bold text-white shadow-md shadow-[#027cd4]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0165ae] hover:shadow-lg"
                    >
                        Submit
                    </Button>

                    <Button
                        type="reset"
                        variant="secondary"
                        className="flex w-full flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200"
                    >
                        Reset
                    </Button>
                </div>

                <Button
                    onClick={handelGoogleAuth}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 transition-all duration-300 hover:border-[#027cd4] hover:bg-blue-50"
                >
                    <FcGoogle size={22} />
                    <span className="font-semibold text-slate-700">
                        Register with Google
                    </span>
                </Button>
            </div>

            <p className="text-center text-xs text-slate-400">
                Create your account and start exploring.
            </p>
        </Form>




    )
}

export default Register












