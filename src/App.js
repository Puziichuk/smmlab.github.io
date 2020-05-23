import React,{Component} from 'react'

import './common/reset.css'
import './common/smm.lab.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
  state ={
    productsInCart:{
      '1':5,
      '2':3,
    }
  
  }

  addProductToCart=(productId,count)=>{
    this.setState((prevState) =>({
      productsInCart:{
        ...prevState.productsInCart,
        [productId]:(prevState.productsInCart[productId] || 0 )+ count
  

		}
    }))

  }
 
  
   render(){

  return (
    <div>
      <Header
      productsInCart={this.state.productsInCart}	
      />
      <button onClick={()=>this.addProductToCart(2,5)}>Add to cart</button>
      <Main
      addProductToCart={this.addProductToCart}
      />
      <Footer/>
    </div>
  )
}
}
export default App