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
import { redirect } from "next/navigation";

const RateUsPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        await AddReviewAction(data);
        redirect('/');
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Rate Our Service</h2>
            <Form className="w-full" onSubmit={onSubmit}>
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
                            name="review"
                            validate={(value) => {
                                if (value.length < 20) {
                                    return "Review must be at least 20 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Your Feedback</Label>
                            <TextArea placeholder="Tell us about your experience..." />
                            <Description>Minimum 20 characters</Description>
                            <FieldError />
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            Submit Review
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}

export default RateUsPage;