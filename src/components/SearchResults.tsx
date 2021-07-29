import { useMemo } from "react";
import { Product } from "../utils/types";
import { ResultItem } from "./ResultItem";

interface SearchResultsProps {
    products: Product[];
    onAddToWishList: (id: number) => void;
}

export function SearchResults({ products, onAddToWishList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return products.reduce((total, product) => total + product.price, 0);
    }, [products]);
    // const totalPrice = products.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <h2>Total: {totalPrice}</h2>

            {products.map(product => <ResultItem key={product.id} product={product} onAddToWishList={onAddToWishList} />)}
        </div>
    );
}