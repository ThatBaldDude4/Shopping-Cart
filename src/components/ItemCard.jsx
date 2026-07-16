export default function ItemCard({title, price, description}) {
    return (
        <div className="item-card">
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
        </div>
    )
}