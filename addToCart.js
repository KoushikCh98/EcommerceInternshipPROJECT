import { getCartProductsFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";


getCartProductsFromLS();

export const addToCart = (event, id, stock) => {
    
    let arrLocalStorageProduct =  getCartProductsFromLS();
    
    
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

        
    //console.log(quantity,price);
    price = price.replace("₹","");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);


    if(existingProd){

    }

    if(existingProd){
        alert("Product existed already");
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

    //update the cart button value
    updateCartValue(arrLocalStorageProduct);

};