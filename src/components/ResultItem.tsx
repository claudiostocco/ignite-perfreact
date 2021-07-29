import { memo } from "react";
import { Product } from "../utils/types";

interface ResultItemProps {
    product: Product;
    onAddToWishList: (id: number) => void;
}

function ResultItemComponent({ product, onAddToWishList }: ResultItemProps) {
    return (
        <div>
            {product.description} - <strong>{product.price}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
        </div>
    );
}

export const ResultItem = memo(ResultItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
})