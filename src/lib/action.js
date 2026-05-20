'use server';

export const AddReviewAction = async (formData) => {
    const res = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}
export const AddBookingAction = async (formData)=>{
    const res = await fetch('http://localhost:5000/my-bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}
export const DeleteBookingAction=async(carId)=>{
    const res = await fetch(`http://localhost:5000/my-bookings/${carId}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
    })
    return res.json();
}
export const AddCarAction = async (formData) => {
    const res = await fetch('http://localhost:5000/my-added-cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData)
    })
    return res.json();
}
export const DeleteAddedCarAction=async(carId)=>{
    const res = await fetch(`http://localhost:5000/my-added-cars/${carId}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
    })
    return res.json();
}