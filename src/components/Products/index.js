// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

class Products extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="product_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
            alt="products"
          />
        </div>
      </>
    )
  }
}

export default Products
