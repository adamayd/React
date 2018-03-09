import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  // Add below function inline in button tag
  // handleClick = () => {
  //   this.props.addToOrder(this.props.index);
  // }
  render() {
    // const name = this.props.details.name
    // const price = this.props.details.price
    // const status = this.props.details.status
    // const desc = this.props.details.desc
    // const image = this.props.details.image
    const { name, price, status, desc, image } = this.props.details
    const isAvailable = status === 'available'
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button 
          disabled={!isAvailable} 
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? 'Add To Cart' : 'Sold Out!'}
        </button>
      </li>
    )
  }
}

export default Fish;