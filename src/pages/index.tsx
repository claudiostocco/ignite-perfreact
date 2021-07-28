import { FormEvent, useState } from "react"
import { SearchResults } from "../components/SearchResults";
import { Product } from "../utils/types";

export default function Home() {
  const [ search, setSearch ] = useState('');
  const [ products, setProducts ] = useState<Product[]>([]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    if (!search) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();
    setProducts(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
      <input type="submit" value="Pesquisar" />
      <br /><hr /><br />
      <SearchResults products={products} />
    </form>
  )
}
