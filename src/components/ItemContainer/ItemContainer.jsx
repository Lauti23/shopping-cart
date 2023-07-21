import "./ItemContainer.css";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useFilters } from "../../hooks/useFilters";
import json from "../../mocks/products.json"

const ItemContainer = () => {
    const [products] = useState(json.products);

    const { addToCart, cart, removeFromCart } = useCart()
    
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(products);

    const checkProductInCart = prod => {
        return cart.some(item => item.id === prod.id)
    }

    return (
        <main className="itemContainer">
            <ul className="productList">
                {filteredProducts.map((prod) => {
                    
                    const isProductInCart = checkProductInCart(prod)
                    
                    return (
                        <li className="item" key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.description} />
                            <p>
                                <strong>{prod.title}</strong> - ${prod.price}
                            </p>
                            <button onClick={() => 
                                isProductInCart ? removeFromCart(prod) : addToCart(prod)
                            }>
                                {
                                    isProductInCart
                                    ? "Remove"
                                    : "Add to cart"
                                }
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
    );
};

export default ItemContainer;
