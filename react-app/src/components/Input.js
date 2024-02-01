import React, { Fragment } from "react";
 
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
 
  onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };
 
  render() {
 
    return (
 
      <Fragment>
        <div
            // className={  this.props.classNameDiv
            //     ? `${this.props.classNameDiv} ${this.props.classNameButton ? this.props.classNameButton : ''}`:"form-input-div"}
            className={this.props.classNameDiv?this.props.classNameDiv:"form-input-div"}
        >
          <label
            className={
              this.props.classNameLabel
                ? this.props.classNameLabel
                : "contact-form-label"
            }
          >
            {this.props.label}
          </label>
          <input
            className={
              this.props.className ? this.props.className : "form-input"
            }
            // className={  this.props.className
            //     ? `${this.props.className} ${this.props.classNameButton2 ? 'from-mobile-form' : ''}`:"form-input"}
            type={this.props.type ? this.props.type : "text"}
            value={this.props.value}
            onChange={this.onChange}
            required={this.props.required}
            placeholder={this.props.placeholder}
          />
        </div>
      </Fragment>
    );
  }
}