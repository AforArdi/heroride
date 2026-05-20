'use server';

import { headers } from "next/headers";
import { auth } from "./auth";

export const AddReviewAction = async (formData) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch('http://localhost:5000/reviews', {
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
    const res = await fetch('http://localhost:5000/my-bookings', {
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
    const res = await fetch(`http://localhost:5000/my-bookings/${carId}`, {
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
    const res = await fetch('http://localhost:5000/my-added-cars', {
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
    const res = await fetch(`http://localhost:5000/my-added-cars/${carId}`, {
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
    const res = await fetch(`http://localhost:5000/my-added-cars/${carId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}