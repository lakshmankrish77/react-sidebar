import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

function  CustomSnackbar (props) {
    return(
    // <Snackbar open message="Processing..!" anchorOrigin={{
    //     horizontal: "left",
    //     vertical: "top",
    //   }}/>
      
      <Snackbar open={props.status} autoHideDuration={props.hide_duration} 
                        onClose={props.handleClose} anchorOrigin={{
                                horizontal: "left",
                                vertical: "top"}}>    
                        <Alert onClose={props.handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                            {props.message}
                        </Alert>
                        </Snackbar>
                        );
}

export default CustomSnackbar;