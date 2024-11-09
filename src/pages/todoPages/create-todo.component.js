import React, { Component } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { MainContainer } from '../../components/Contents/Contents.elements';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Navigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

export default class CreateTodo extends Component {
    
    constructor(props) {
        super(props);
        

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            add_response: null,
            snackbar_status: false,
            navigation_flag:false
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({
            snackbar_status: false
        });
      };
    
    handleTodoNavigation = (e) => {        
        this.setState({
            navigation_flag: true
        });      
        
    }
    

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

                
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        
        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => {
                console.log(res.data)
                
                this.setState({
                    add_response: res.data,                    
                });
                
            });
        
            
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            snackbar_status:true,
            navigation_flag:false
        })
    }

    render() {
        
        if(this.state.navigation_flag){
            return (
                <Navigate
                  to={{
                    pathname: "/Todo/",
                  }}
                />
              );
        }
        return (

            <div>
            
                <Box component="form" onSubmit={this.onSubmit} active={this.props.toggle} sx={{
          p: 2,
          mt: 5,
          mb:10,
          bgcolor: 'background.paper',
          border: '4px grey',
          boxShadow: 4,
          borderRadius: 1,
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          '& .MuiFormControl-root': { m: 2 },
          '& .MuiButton-root': { m: 1 },
          
        }}>
                    <h3>Create New Todo</h3>
                    <Snackbar open={this.state.snackbar_status} autoHideDuration={3000} 
                        onClose={this.handleClose} anchorOrigin={{
                            horizontal: "center",
                            vertical: "top"}} 
                            >    
                        <Alert onClose={this.handleClose} variant="filled" severity="success" sx={{ width: '100%' }}
                        action={
                            <React.Fragment>
                              <Button color="secondary" variant="contained" size="medium" onClick={this.handleTodoNavigation}>
                                View TodoList
                              </Button>
                              <IconButton color="inherit" onClick={this.handleClose}>
                                <CloseIcon />
                              </IconButton>
                            </React.Fragment>
                          }>
                            Todo Item Added successfully
                        </Alert>
                        </Snackbar>
                    <div>
                        <div> 
                            {/* <label>Description: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_description}
                                    onChange={this.onChangeTodoDescription}
                                    /> */}
                             <TextField
                                required
                                id="filled-required"
                                helperText="Enter Description"
                                name="description"
                                label="Description"
                                defaultValue=""
                                variant="standard"
                                // inputProps={{
                                //     style={
                                //         marginLeft:'10px',
                                //         marginRight:'10px',
                                //         width:400
                                //     }
                                // }}
                                
                                value={this.state.todo_description}
                                    onChange={this.onChangeTodoDescription}
                                />
                        
                        
                            {/* <label>Responsible: </label> */}
                            {/* <input 
                                    type="text" 
                                    className="form-control"
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}
                                    /> */}
                            <TextField
                                required
                                helperText="Enter Responsible person name"
                                name="responsible"
                                id="filled-required"
                                label="Required"
                                defaultValue="Responsible"
                                variant="standard"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />        
                        
                            {/* <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="priorityOptions" 
                                        id="priorityLow" 
                                        value="Low"
                                        checked={this.state.todo_priority==='Low'} 
                                        onChange={this.onChangeTodoPriority}
                                        />
                                <label className="form-check-label">Low</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="priorityOptions" 
                                        id="priorityMedium" 
                                        value="Medium" 
                                        checked={this.state.todo_priority==='Medium'} 
                                        onChange={this.onChangeTodoPriority}
                                        />
                                <label className="form-check-label">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="priorityOptions" 
                                        id="priorityHigh" 
                                        value="High" 
                                        checked={this.state.todo_priority==='High'} 
                                        onChange={this.onChangeTodoPriority}
                                        />
                                <label className="form-check-label">High</label>
                            </div> */}
                            </div>
                            <div>
                             <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Priority</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Low"                                                                        
                                    checked={this.state.todo_priority}
                                    name="radio-buttons-group"
                                    row
                                    required
                                    onChange={this.onChangeTodoPriority}
                                >
                                    <FormControlLabel value="High" control={<Radio />} label="High" />
                                    <FormControlLabel value="Medium" control={<Radio />} label="Medium"  />
                                    <FormControlLabel value="Low" control={<Radio />} label="Low"  />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        {/* <div className="form-group">
                            <input type="submit" value="Create Todo" className="btn btn-primary" />
                        </div> */}
                         <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit <SendIcon />
                        </Button>

                        </div>
                    
                </Box>
            </div>
        )
    }
}