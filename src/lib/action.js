'use server';

import { headers } from "next/headers";
import { auth } from "./auth";

export const AddReviewAction = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}
export const AddBookingAction = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}
export const DeleteBookingAction = async (carId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${carId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return res.json();
}
export const AddCarAction = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}
export const DeleteAddedCarAction = async (carId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${carId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return res.json();
}
export const UpdateAddedCarAction = async (carId, formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${carId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}