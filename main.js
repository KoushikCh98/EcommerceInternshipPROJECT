import "./style.css";

import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

//call to display the products
showProductContainer(products);
