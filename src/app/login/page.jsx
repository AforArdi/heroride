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

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            remember: true,
            callbackURL: "/",
        });

        if (res) {
            toast.success('Login successful!');
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
                <h2 className="text-3xl font-bold text-center">Welcome back!</h2>
                <p className="text-muted text-center">Sign in to continue your journey with Hero Ride.</p>
            </div>
            <Form className="w-full max-w-96 mx-auto" onSubmit={onSubmit}>
                <Fieldset>
                    <FieldGroup>
                        {/* email */}
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="Your Email" />
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
                            Login
                        </Button>
                        <Button onClick={handleGoogleSign} type="reset" variant="secondary" className={'flex items-center gap-2 w-full'}>
                            <FcGoogle></FcGoogle> Google
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}

export default LoginPage;