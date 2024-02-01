import React from "react";
import './components/style.css';
import Input from './components/Input'
import CheckBox from "./components/CheckBox";
import ContactForm from "./components/ContactForm";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
 
 
 
 
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            company: "",
            email: "",
            description: "",
            executed: true
        };
 
    }
 
    button = null;
 
    onNameChange = (value) => {
        // if(this.state.executed){
        //     this.sendGtmStart()
        //     this.setState({executed: false});
        // }
        this.setState({ name: value });
 
    };
 
 
    onCompanyChange = (value) => {
        // if(this.state.executed){
        //     this.sendGtmStart()
        //     this.setState({executed: false});
        // }
 
        this.setState({ company: value });
    };
 
    onEmailChange = (value) => {
        // if(this.state.executed){
        //     this.sendGtmStart()
        //     this.setState({executed: false});
        // }
        this.setState({ email: value });
    };
 
    onDescriptionChange = (value) => {
        // if(this.state.executed){
        //     this.sendGtmStart()
        //     this.setState({executed: false});
        // }
        this.setState({ description: value });
    };
 
    verifyFields = () => {
        if (!this.state.name.trim().length) {
            global.setAlertVisibility(true, "Name is required field!", "warning");
            this.sendGtmErrors()
            return false;
        }
        if (!this.state.company.trim().length) {
            global.setAlertVisibility(true, "Company is required field!", "warning");
            this.sendGtmErrors()
 
            return false;
        }
        if (!this.state.email.trim().length) {
            global.setAlertVisibility(true, "Email is required field!", "warning");
            this.sendGtmErrors()
            return false;
        }
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.state.email.match(regex)) {
            global.setAlertVisibility(
                true,
                "Email is not in right format!",
                "warning"
            );
            this.sendGtmErrors()
            return false;
        }
        if (!this.state.description.trim().length) {
            global.setAlertVisibility(
                true,
                "Message is required field!",
                "warning"
            );
            this.sendGtmErrors()
            return false;
        }
 
        return true;
    };
 
    // handleEmail = async () => {
    //     const valid = this.verifyFields();
    //     if (valid) {
    //         this.button.disabled = true;
    //         this.button.innerText = "Sending..";
    //         try {
    //             await sendEmail(
    //                 this.state.name,
    //                 this.state.company,
    //                 "",
    //                 this.state.description,
    //                 this.state.email,
    //                 "Contact"
    //             );
 
    //             global.setAlertVisibility(true, "Success", "success");
    //             this.sendGtm()
    //             this.button.innerText = "Sent";
    //         } catch (err) {
    //             global.setAlertVisibility(true, err.toString(), "error");
    //             throw err;
    //         }
    //     }
    // };
    // setChildRef = (ref) => {
    //     this.cocaineLineRef = ref;
    // }
 
 
    render() {
        return (
            <div >
                <NavBar/>
                <div className='header-text-about'>
 
                    <h1 className='header-h'>
                        <span className="header-h-lighter-about">THIS IS</span> ABOUT YOU.
                        <br />
                        <span className="header-h-lighter-about">CONTACT US.</span>
                    </h1>
                </div>
                <hr/>
 
 
                <div className={"form-main contact-main-form"}>
                    <form className={"form-contact"}>
                        <div className="form-text-div">
                            <p className="form-text-p">
                                Get in touch with us and we’ll arrange a video call to dive deep
                                into your goals and needs.
                            </p>
                        </div>
                        <div className="form-contact-primary">
                            <Input
                                className={"form-input contact-input mobile-input"}
                                classNameLabel={"label"}
                                classNameDiv={"form-input-contact"}
                                label={"Full Name"}
                                placeholder={"John Smith"}
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                            <Input
                                className={"form-input contact-input mobile-input"}
                                classNameLabel={"label"}
                                classNameDiv={"form-input-contact"}
                                label={"Email"}
                                placeholder={"your@email.com"}
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                            <Input
                                className={"form-input contact-input mobile-input"}
                                classNameLabel={"label"}
                                classNameDiv={"form-input-contact"}
                                label={"Company name"}
                                placeholder={"Company"}
                                value={this.state.company}
                                onChange={this.onCompanyChange}
                            />
                            <CheckBox
                                textAreaClassName={"text-area"}
                                classNameLabel={"label"}
                                className={"form-text-area-div-contact"}
                                label={"Message"}
                                rows={5}
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
 
                            <button className="form-btn-contact">
                                SUBMIT
                            </button>
                            {/* <Button
                                className={"form-btn-contact"}
                                // onClick={this.handleEmail}
                                text={"SUBMIT"}
                             
                            /> */}
                        </div>
 
                    </form>
                    <ContactForm />
                </div>
                <Footer/>
 
            </div>
        );
    }
}