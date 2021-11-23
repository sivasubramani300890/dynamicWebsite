import React, { Component } from 'react'

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer className='text-center'>
                <hr />
                <p>Copyrights {this.props.year} | {this.props.company}</p>
                <p>Developed by ABC</p>
            </footer>
        );
    }

}
export default Footer;