import { useResource } from "../useresource/UseResource";

export const ProductInfor = ({productId}) => {
    const product = useResource(`/products/${productId}`);
    const {name, price, description, rating} = product || {};


    return (
       <>
         <h3>{name}</h3>
         <p>{price}</p>
         <h3>Description</h3>
         <p>{description}</p>
         <p>Average Rating: {rating}</p>
       </>
    )
}