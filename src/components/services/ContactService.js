import axios from "axios";

import { ADD_CONTACT } from "../actions/types";

const CONTACT_API_URL = "http://localhost:80/blog_new/public/api/admin/datadisp";

export const createContact = (data) => {
    return(dispatch) => {
        return axios.get(CONTACT_API_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'my-secret-token'
                },data
            })
        .then( response => {
            console.log(response);
            console.log('Successfully Submitted');
            dispatch({
                type : ADD_CONTACT,
                payload : {
                    id : response.data.id,
                    name : response.data.name,
                    email : response.data.email,
                    phone : response.data.phone
                }
            });
            
        })
        .catch( error => {
            throw(error);
        });
    }
}