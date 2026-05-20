import { authClient } from "./auth-client";

export const getCars = async () => {
    const res = await fetch('http://localhost:5000/cars');
    const data = await res.json();
    return data;
}
export const getCarById = async (id) => {
    // const {data: token, error} = await authClient.token();
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`http://localhost:5000/cars/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}
export const getPopularCars = async () => {
    const res = await fetch('http://localhost:5000/popular');
    const data = await res.json();
    return data;
}
export const getReviews = async () => {
    const res = await fetch('http://localhost:5000/reviews');
    const data = await res.json();
    return data;
}
export const getMyBookings = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`http://localhost:5000/my-bookings/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}
// need work
export const getAddedCarsById = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`http://localhost:5000/my-added-cars/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}