import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createContact } from '../services/ContactService';
import ContactList from './ContactList';

class Contact extends Component{
    addContactHandler = (e) => {
       //console.log(e);
       //console.log(this.getTitle.value);
       e.preventDefault();

       let contactForm = {
            name : this.getName.value,
            email : this.getEmail.value,
            phone : this.getPhone.value
       }

       this.props.dispatch(createContact(contactForm));
      // console.log(contactForm);
      // console.log(this.props);
       
    }

    render(){
        return(
            <div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Contact Form</h3>
                            <form onSubmit={this.addContactHandler}>
                                <input type='text' ref={(input) => this.getName = input} required className="form-control" placeholder="Enter Name" /> <br />
                                <input type='text' ref={(input) => this.getEmail = input} required className="form-control" placeholder="Enter Email" /> <br />
                                <input type='text' ref={(input) => this.getPhone = input} required className="form-control" placeholder="Enter Phone" /> <br />
                                <button className="btn btn-primary" type='submit'>Add Form</button>
                            </form>
                        </div>
                    </div>
                    <ContactList />
                </div>
            </div>
        );
    }
}

export default connect()(Contact);