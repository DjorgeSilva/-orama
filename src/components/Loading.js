import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export class Loading extends Component {
  render() {
  return (
      <div>
        <Spinner size={200} spinnerColor={"#CDCDCD"} spinnerWidth={10} visible={true} />
      </div>
    );
  }
}