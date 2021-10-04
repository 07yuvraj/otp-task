import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import OtpInput from 'react-otp-input';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import undraw_confirmed_81ex from './assests/undraw_confirmed_81ex.svg';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const OTPComponent = ({ mobile, handleClose }) => {
    const theme = useTheme();
    const history = useHistory();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(false);

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleChange = (val) => setOtp(val);

    const handleVerify = () => {
        if (otp !== "1234") {
            setError("Incorrect OTP")
        } else {
            setError("")
            history.push("/success");
        }
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open
            style={{ margin: "5vh 2vw" }}
            className="App"
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            {/* <DialogTitle id="responsive-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle> */}
            <DialogContent style={{ height: "85vh" }}>
                <div className='otpPage'>
                    <img src={undraw_confirmed_81ex} alt={"undraw text"} className="undrawImage" />
                    <p style={{ fontSize: "20px" }}>Please verify mobile number</p>
                    {error && <h4 style={{ color: "red" }}>{error}</h4>}
                    <p style={{ fontSize: "16px" }}>An OTP is send to <strong>{mobile}</strong></p>
                    <p onClick={handleClose} style={{ borderBottom: "0.7px solid #F7B348", fontSize: "12px", color: "#F7B348", cursor: "pointer" }}>Change Phone Number</p>
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        separator={<span>{"  "}-</span>}
                    />
                    <p style={{ fontSize: "16px" }}>Didn't receive the code?<span style={{ marginLeft: "12px", color: "#F7B348", cursor: "pointer" }} onClick={() => setOpen(true)}>Resend</span></p>
                    <Button onClick={handleVerify} variant="contained" style={{ backgroundColor: "#F7B348", borderRadius: "100px" }}>Verify</Button>
                </div>
            </DialogContent>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                    OTP resent successfully!
                </Alert>
            </Snackbar>
        </Dialog>
    )
}

export default OTPComponent
