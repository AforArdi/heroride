import { headers } from "next/headers";
import { auth } from "./auth";

export const getCars = async (searchWord = '', filter = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars?search=${searchWord}&filter=${filter}`);
    const data = await res.json();
    return data || [];
}
export const getCarById = async (id) => {
    // const {data: token, error} = await authClient.token();
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // when backend sends 400 or 404
    if (!res.ok) {
        return null;
    }
    const data = await res.json();
    return data;
}
export const getPopularCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/popular`);
    const data = await res.json();
    return data;
}
export const getReviews = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reviews`);
    const data = await res.json();
    return data;
}
export const getMyBookings = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}
export const getAddedCarsById = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}