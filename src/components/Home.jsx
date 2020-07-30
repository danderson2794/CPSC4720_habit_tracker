import React, { Component } from "react";
import Data from "./Data";
export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Welcome to the app!</p>
        <view>
          <Data />
        </view>
      </div>
    );
  }
}
