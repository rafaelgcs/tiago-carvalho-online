import React from 'react';
import { Redirect, useParams } from 'react-router';


const Redirection = () => {
    const { code } = useParams();

    const redirectFunction = () => {
        console.log(code)
        if (code === "whatsapp") {
            document.location.href = "https://api.whatsapp.com/send?phone=5571992483233";
        }

        else {
            return <Redirect to="/" />
        }
    }
    return (
        code ? redirectFunction() : <Redirect to="/" />
    );
};


export default Redirection;