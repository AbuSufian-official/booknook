"use client";
import React from 'react'
import { GrCircleQuestion } from "react-icons/gr";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { RiLoginCircleLine } from "react-icons/ri";





function Login() {
     const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data)


    };


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
                <Button  className="flex items-center  text-[#027cd4] font-bold flex items-center">
                    <GrCircleQuestion /> <span>Forget password</span>
                </Button>
            </div>
        </Form>
    )
}

export default Login
