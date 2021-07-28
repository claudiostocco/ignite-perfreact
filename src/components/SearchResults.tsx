import { Product } from "../utils/types";
import { ResultItem } from "./ResultItem";

interface SearchResultsProps {
    products: Product[];
}

export function SearchResults({ products }: SearchResultsProps) {
    return (
        <div>
            {products.map(product => <ResultItem key={product.id} product={product} />)}
        </div>
    );
}