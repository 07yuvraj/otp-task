import React from 'react';
import Button from '@mui/material/Button';
import Artboard from './assests/Artboard.svg';
import { useHistory } from 'react-router-dom';

const Success = () => {
    const history = useHistory();
    return (
        <div className='successPage'>
            <img src={Artboard} alt="artboard" />
            <h3>Welcome to AdmitKard</h3>
            <p style={{ fontSize: "16px", textAlign: "center" }}>In order to provide you with
                a custom experience,<br />
                <strong>we need to ask you a few questions.</strong>
            </p>
            <div>
                <Button onClick={() => history.push("/")} variant="contained" style={{ backgroundColor: "#F7B348", borderRadius: "100px", marginLeft: "20px" }}>Get Started</Button>
                <br /><p style={{ margin: "5px" }}>*This will only take 5 min.</p>
            </div>
        </div>
    )
}

export default Success
