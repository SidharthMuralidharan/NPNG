import React, { Component } from 'react';
import './landingHeaderstyles.css';
class LandingHeaderComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // date: new Date().toLocaleString()
      }
   }
   render() {
      return (
         <React.Fragment>
            {/* <p>Hello{this.props.username}</p> */}
            <div className="landing-main-wrapper">
               <div className="header-logo-image-area">
                  <img id="logo-inner-image" src="./../assets/cisco-logo-transparent.png"></img>
               </div>
               <div className="header-inner-label">
                  <p>Optimization Services</p>
               </div>
               <div className="header-inner-name-area">
                  <span>Welcome </span>
                  <span className="spanvalue">{this.props.username}</span>
               </div>
               <div className="header-inner-right-area">
                  <div className="icon-wrapper">
                     <img src="./../assets/icons/search.png"></img>
                  </div>
                  <div className="icon-wrapper">
                     <img src="./../assets/icons/alarm.png"></img>
                  </div>
                  <div className="icon-wrapper">
                     <img src="./../assets/icons/mail.png"></img>
                  </div>
                  <div className="icon-wrapper">
                     <img src="./../assets/icons/settings.png"></img>
                  </div>
               </div>
            </div>
         </React.Fragment>);
   }
}
export default LandingHeaderComponent;