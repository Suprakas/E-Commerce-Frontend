

import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";


const home = () => {

  const addToCartHandler = () => {}
  return (
    <div className="home">
        <section></section>
        <div>
          <aside>
            <h1>Categories</h1>
          </aside>
            
        </div>
        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>

        <main>
          <ProductCard 
            productId= "gjhgjvj"
            name="Macbook"
            price={45678}
            stock={5}
            handler={addToCartHandler}
            photo= "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          />
        </main>
    </div>
  )
}

export default home