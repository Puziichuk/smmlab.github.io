 import React,{Component}from 'react'
 import PropTypes from 'prop-types';
 
 class ProductListItem extends Component {


    state={
        productsCount:1
    }

    onIncrementClick=()=>{
        this.setState((prevState) =>({
            productsCount:prevState.productsCount+1
        }))
    
    }
    
    onDecrementClick=()=>{
        this.setState((prevState) =>({
            productsCount:prevState.productsCount-1
        }))
    
    }
    
    
  render(){
    const{
        name,
        id,
        description,
        price,
        addProductToCart
     }= this.props
        return(
       <div className="product-list-item">
      <div className="product-title">{name}</div>
      <div className="product-description">{description}</div>
      <div className="product-quantity">
      <button 
        disabled={this.state.productsCount <=1}
        onClick={this.onDecrementClick}>-</button>
           <input type="text" value={this.state.productsCount} readOnly/>
           <button onClick={this.onIncrementClick}
        disabled={this.state.productsCount >=10}
        >+</button>

       </div>
      <div className="product-price">${price}</div>
      <button className="btn btn-add-to-cart" 
   onClick={()=>addProductToCart(id,this.state.productsCount,price)}>Add to cart</button>

   
           
        </div>
    )
    }
}
    ProductListItem.propTypes={
        name: PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
    }
export default ProductListItem