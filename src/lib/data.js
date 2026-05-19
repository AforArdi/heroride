export const getCars = async ()=>{
    const res = await fetch('http://localhost:5000/cars');
    const data = await res.json();
    return data;
}
export const getCarById = async (id)=>{
    const res = await fetch(`http://localhost:5000/cars/${id}`);
    const data = await res.json();
    return data;
}
export const getPopularCars = async ()=>{
    const res = await fetch('http://localhost:5000/popular');
    const data = await res.json();
    return data;
}
export const getReviews = async ()=>{
    const res = await fetch('http://localhost:5000/reviews');
    const data = await res.json();
    return data;
}