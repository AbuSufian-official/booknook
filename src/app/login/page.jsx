"use client";
import React from 'react'
import { GrCircleQuestion } from "react-icons/gr";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { RiLoginCircleLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client"
import { redirect } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";



function Login() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userdata = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: userdata.email, // required, The email address of the user.
            password: userdata.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
        });
        if (Boolean(data)) {
            redirect("/")
        } else {
            alert("somting worng")
        }



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
        //         <Button type="submit" className="flex items-center bg-[#027cd4] text-white font-bold">
        //             <RiLoginCircleLine /> <span>Login</span>
        //         </Button>
        //         <Button className="flex items-center  text-[#027cd4] font-bold flex items-center">
        //             <GrCircleQuestion /> <span>Forget password</span>
        //         </Button>
        //         <Button onClick={handelGoogleAuth} className="flex items-center gap-1" >
        //             <FcGoogle /><span className="font-bold text-[#027cd4]">Login with Google</span>
        //         </Button>
        //     </div>
        // </Form>
        
<Form
    className="w-full max-w-md mx-auto flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-200/50"
    onSubmit={onSubmit}
>
    <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-slate-800">
            Welcome Back!
        </h2>
        <p className="text-sm text-slate-500">
            Login to continue your journey
        </p>
    </div>

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
                Must be at least 6 characters with 1 uppercase and 1 number
            </span>
        </Description>
        <FieldError />
    </TextField>

    <div className="flex flex-col gap-3">
        <Button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#027cd4] px-5 py-3 font-bold text-white shadow-md shadow-[#027cd4]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0165ae] hover:shadow-lg"
        >
            <RiLoginCircleLine size={20} />
            <span>Login</span>
        </Button>

        <Button
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-[#027cd4] transition-all duration-300 hover:border-[#027cd4] hover:bg-blue-50"
        >
            <GrCircleQuestion size={18} />
            <span>Forget password?</span>
        </Button>

        <Button
            onClick={handelGoogleAuth}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100"
        >
            <FcGoogle size={21} />
            <span className="font-semibold text-slate-700">
                Login with Google
            </span>
        </Button>
    </div>

    <p className="text-center text-xs text-slate-400">
        Secure login · Welcome to your account
    </p>
</Form>

    )
}

export default Login
