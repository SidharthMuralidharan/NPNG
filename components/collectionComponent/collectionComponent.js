import React, { Component } from 'react';
import './collectionstyles.css';
class CollectionComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }
   render() {
      return (
         <div className="collection-main-div">
            <h1>Collection Component</h1>
         </div>
      );
   }
}
export default CollectionComponent;