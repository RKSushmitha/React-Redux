import React from "react";
import { connect } from "react-redux";
import { buyiceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIcecreams}</h2>
      <button onClick={props.buyiceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.iceCream.numOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyiceCream: () => dispatch(buyiceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
