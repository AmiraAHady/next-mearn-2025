
// getallproducts
export async function getAllProducts(){
    try {
        const res = await fetch(`https://dummyjson.com/products`);
        const products= await res.json();
        return {data:products,status:res.status}
        
    } catch (error) {
        return error
        
    }
}
// get by id
export async function getProductById(id){
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const product= await res.json();
        return {data:product,status:res.status}
        
    } catch (error) {
        return error
        
    }
}