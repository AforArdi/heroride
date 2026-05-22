"use client";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
    const [isPassVisible, setIsPassVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        const { name, email, imageUrl, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: imageUrl,
            callbackURL: "/",
        });

        if (res) {
            toast.success('Registration successful!');
            redirect('/');
        }
        if (error) {
            toast.error(`${error.message}`);
        }
    }

    const handleGoogleSign = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="my-20">
            <div className="mb-6 space-y-2">
                <h2 className="text-3xl font-bold text-center">Join Hero Ride</h2>
                <p className="text-muted text-center">Create your account and start exploring premium rides with ease.</p>
            </div>
            <Form className="w-full max-w-96 mx-auto" onSubmit={onSubmit}>
                <Fieldset>
                    <FieldGroup>
                        {/* name */}
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="Your Name" />
                            <FieldError />
                        </TextField>

                        {/* email */}
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="Your Email" />
                            <FieldError />
                        </TextField>

                        {/* Photo URL */}
                        <TextField
                            isRequired
                            name="imageUrl"
                            type="url"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="Your Photo URL" />
                            <FieldError />
                        </TextField>

                        {/* password */}
                        <div className="relative">
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type={isPassVisible ? "text" : "password"}
                                validate={(value) => {
                                    if (value.length < 6) {
                                        return "Password must be at least 8 characters";
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
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors" onClick={() => setIsPassVisible(!isPassVisible)}>
                                    {isPassVisible ? <FaRegEye size={20}></FaRegEye> : <FaRegEyeSlash size={20}></FaRegEyeSlash>}
                                </span>
                                <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                                <FieldError />
                            </TextField>
                        </div>

                    </FieldGroup>
                    <Fieldset.Actions className="flex flex-col justify-center">
                        <Button type="submit" className={'w-full bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center'}>
                            Register
                        </Button>
                        <Button onClick={handleGoogleSign} type="reset" variant="secondary" className={'w-full bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center'}>
                            <FcGoogle></FcGoogle> Google
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}

export default RegisterPage;