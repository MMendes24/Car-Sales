import React from 'react';
import { connect } from 'react-redux'

const Header = props => {
  console.log("Here are the props", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  // ALL the properties on the object that is returned here will be added to the connected component's props
  console.log(state.car.image)
  return {
    name: state.car.name,
    price: state.car.price,
    image: state.car.image
  };
};

export default connect( mapStateToProps, {})(Header);
