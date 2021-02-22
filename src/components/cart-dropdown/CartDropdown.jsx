import React from 'react'

import CustomButton from './../custom-button/CustomButton'
import './cart-dropdown.scss'
const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
)

export default CartDropdown