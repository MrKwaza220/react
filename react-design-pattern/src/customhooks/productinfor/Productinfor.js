export const ProductInfor = ({productinfo}) => {
    const {name, price} = productinfo;

    return (
        <h3> {name} - {price} </h3>
    )
}