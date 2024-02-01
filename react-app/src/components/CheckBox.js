import React, { Fragment } from "react";
 
export default class CheckBox extends React.Component {
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
          className={
            this.props.className ? this.props.className : "form-text-area-div"
          }
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
          <textarea
            className={
              this.props.textAreaClassName ? this.props.textAreaClassName : ""
            }
            name="challenge"
            value={this.props.value}
            onChange={this.onChange}
            placeholder={this.props.placeholder}
            rows={this.props.rows}
          />
        </div>
      </Fragment>
    );
  }
}