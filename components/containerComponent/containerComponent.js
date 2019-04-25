import React, { Component } from 'react';
import './containerstyles.css';
class ContainerComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }
   render() {
      return (
         <div className="container-main-div">
            <h1>Container Component</h1>
         </div>
      );
   }
}
export default ContainerComponent;