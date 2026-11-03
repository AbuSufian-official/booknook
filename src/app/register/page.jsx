"use client";


import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import React from 'react'
import { authClient } from "@/lib/auth-client"



function Register() {

    const onSubmit = async(e) => {
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
    return (
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
            </TextField>
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
                name="image"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label>Photo URL</Label>
                <Input placeholder="John Doe" />
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
                <Button type="submit">

                    Submit
                </Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div>
        </Form>
    )
}

export default Register












