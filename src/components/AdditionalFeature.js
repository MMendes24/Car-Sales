import React from 'react';

const AdditionalFeature = props => {
  console.log(props.feature)
  return (
    <li>
      <button className="button" onClick={(e) => {props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
