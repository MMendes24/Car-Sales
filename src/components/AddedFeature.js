import React from 'react';


const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={(e) => {props.clearFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
