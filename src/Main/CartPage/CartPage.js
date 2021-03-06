import React from 'react'
import CartTotal from  '../../../Components/Cart/CartTotal'
import CartProductList from  '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity

}) =>{
    return(
    <div>
    <h1 className="page-title">Cart page</h1>
	<CartProductList
    removeProductFromCart={removeProductFromCart}
    productsInCart={productsInCart}
    CartItem={CartProductListItemExtended}
    changeProductQuantity={changeProductQuantity}
	/>

    <CartTotal
	productsInCart={productsInCart}
	/>
	</div>

    )
}
   
export default CartPage
