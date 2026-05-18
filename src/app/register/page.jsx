"use client";
import { FcGoogle } from "react-icons/fc";
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

const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        const {name, email, imageUrl, password} = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: imageUrl,
            callbackURL: "/",
        });

        if(res){
            toast.success('Registration successful!');
            redirect('/');
        }
        if(error){
            toast.error(`${error.message}`);
        }
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
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
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
                            <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                    </FieldGroup>
                    <Fieldset.Actions className="flex flex-col justify-center">
                        <Button type="submit" className={'w-full'}>
                            Register
                        </Button>
                        <Button type="reset" variant="secondary" className={'flex items-center gap-2 w-full'}>
                            <FcGoogle></FcGoogle> Google
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}

export default RegisterPage;