import React from 'react'


export default class Footer extends React.Component {
    render() {
        return (
          <div>
            <footer>
              <div className="black-footer-big-width-contact">
                <div className="footer-rights">
                  © 2024 ISTRAŽIVAČKA LABORATORIJA. All Rights Reserved
                </div>
                <div className="footer-links-div">
                    <a href="">linkedin</a>
                    <a href="">instagram</a>
                    <a href="">twitter</a>
                    <a href="">facebook</a>
                </div>
                <div className="footer-terms-conditions">
                  {/*<a href="">terms and conditions </a>*/}
                  <a href="/contact">contact</a>
                </div>
              </div>
            </footer>
          </div>
        );
  }
}