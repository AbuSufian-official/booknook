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
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }

                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
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
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                <FieldError />
            </TextField>

            <div className="flex gap-2">
                <Button type="submit" className="flex items-center bg-[#027cd4] text-white font-bold">
                    <RiLoginCircleLine /> <span>Login</span>
                </Button>
                <Button className="flex items-center  text-[#027cd4] font-bold flex items-center">
                    <GrCircleQuestion /> <span>Forget password</span>
                </Button>
                <Button onClick={handelGoogleAuth} className="flex items-center gap-1" >
                    <FcGoogle /><span className="font-bold text-[#027cd4]">Login with Google</span>
                </Button>
            </div>
        </Form>
    )
}

export default Login
