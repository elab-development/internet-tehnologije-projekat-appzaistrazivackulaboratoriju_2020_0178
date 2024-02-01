import React, { Fragment } from "react";
 
export default class ContactForm extends React.Component {
  render() {
    return (
      <div className="find-us-div">
        <div className="find-us">
          <p className="m25 f18">FIND US</p>
          <p className="m10 f18 sub-header">GREEK</p>
          <p className="m30 f21">
            Apostolou Marko 11, Hyper
            <br />
            Tower, 3rd Floor, Mesa Geita,
            <br />
            4007 Limassol, GREEK
          </p>
          <p className="m10 f18 sub-header">BELGRADE</p>
          <p className="m60 f21">
            Desanke Maksimovic 8G,
            <br />
            11000 Beograd
          </p>
          <p className="m25 f18">CONTACT US</p>
          <p className="m60 f21">
            tel. +381 25028710
            <br />
              hello@genomavision.com
          </p>
          <p className="m25 f18">FOLLOW US</p>
          <div className="form-links-contact">
              <a >Linkedin</a>
              <a>Instagram</a>
              <a >Twitter</a>
              <a >Facebook</a>
          </div>
        </div>
      </div>
    );
  }
}