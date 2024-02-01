import React from 'react'


export default class Footer extends React.Component {
    render() {
        return (
          <div>
            <footer>
              <div className="black-footer-big-width-contact">
                <div className="footer-rights">
                  © 2024 GENOMA VISION LAB. All Rights Reserved
                </div>
                <div className="footer-links-div">
                    <a href="https://www.linkedin.com/company/ultimatefintech/">linkedin</a>
                    <a href=" https://www.instagram.com/ultimatefintech/?hl=en">instagram</a>
                    <a href="https://twitter.com/uf_agency">twitter</a>
                    <a href="https://www.facebook.com/ultimatefintech">facebook</a>
                </div>
                <div className="footer-terms-conditions">
                  {/*<a href="">terms and conditions </a>*/}
                  <a href="/privacy_policy">contact</a>
                </div>
              </div>
            </footer>
          </div>
        );
  }
}