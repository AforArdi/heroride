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