import React, { Component } from 'react';
import './footerstyles.css';
class FootComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date().toLocaleString()
      }
   }
   render() {
      return (
         <div className="footer-main-div">
            <footer>
               <p className="footer-label">Maintained by Cisco Ofshore Development Team</p>
               <p className="footer-label">© Copyright 2019, All Rights Reserved</p>
               <p className="footer-label time">{this.state.date}</p>
            </footer>
         </div>
      );
   }
}
export default FootComponent;