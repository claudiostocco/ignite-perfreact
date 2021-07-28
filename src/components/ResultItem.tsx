import { Product } from "../utils/types";

interface ResultItemProps {
    product: Product;
}

export function ResultItem({ product }: ResultItemProps) {
    return (
        <div>
            {product.description} - <strong>{product.price}</strong>
        </div>
    );
}