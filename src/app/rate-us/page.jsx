"use client";
import { AddReviewAction } from "@/lib/action";
import { FloppyDisk } from "@gravity-ui/icons";
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
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RateUsPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        await AddReviewAction(data);
        if(data){
            toast.success("Thank you for your feedback!");
            router.push('/');
        }
    }

    return (
        <div className="my-20">
            <div className="mb-6 space-y-2">
                <h2 className="text-3xl font-bold text-center">Rate Our Service</h2>
                <p className="text-muted text-center">Thank you for choosing HeroRide!</p>
            </div>
            <Form className="w-[30%] mx-auto" onSubmit={onSubmit}>
                <Fieldset>
                    <FieldGroup>
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
                        {/* review message */}
                        <TextField
                            isRequired
                            name="message"
                            validate={(value) => {
                                if (value.length < 20) {
                                    return "Review must be at least 20 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Your Feedback</Label>
                            <TextArea className="h-32" placeholder="Tell us about your experience..." />
                            <Description>Minimum 20 characters</Description>
                            <FieldError />
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit" className={'bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center w-full'}>
                            Post Review
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}

export default RateUsPage;