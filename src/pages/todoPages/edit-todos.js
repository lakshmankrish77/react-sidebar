import React, { Component } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function EditNewTodo(props)  {
    const { useState } = React;
    
    const [todo_description, setTodo_Description] = useState('');
    const [todo_responsible, setTodo_Responsible] = useState('');
    const [todo_priority, setTodo_Priority] = useState('');
    const [todo_completed, setTodo_Completed] = useState(false);
       
     
    
    
        const location = useLocation();
        // let { todoid } = location.state;

        // const{ todoid } = {...props};
        // console.log("todoid::" + location.state.todoid);
        console.log("todoid::" + props.match.params.id);

    axios.get('http://localhost:4000/todos/'+ '632f5cbf111a8a4e7bef16cb')
        .then(response => {
            
            setTodo_Description(response.data.todo_description);
            setTodo_Responsible( response.data.todo_responsible);
            setTodo_Priority( response.data.todo_priority);
            setTodo_Completed( response.data.todo_completed);
            
        })
        .catch(function (error) {
            console.log(error);
        })

        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={todo_description}
                                onChange={onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={todo_responsible}
                                onChange={onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={todo_priority==='Low'} 
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={todo_priority==='Medium'} 
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={todo_priority==='High'} 
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={onChangeTodoCompleted}
                                checked={todo_completed}
                                value={todo_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    
  function onChangeTodoDescription(e) {        
        setTodo_Description(e.target.value);        
    }
    function onChangeTodoResponsible(e) {
        setTodo_Responsible(e.target.value);   
    }
    function onChangeTodoPriority(e) {
        setTodo_Priority(e.target.value);   
    }
    function onChangeTodoCompleted(e) {
        setTodo_Completed(e.target.value);   
    }
    function onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_priority: todo_priority,
            todo_completed: todo_completed
        };
      
        // axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
        //     .then(res => console.log(res.data));

        axios.post('http://localhost:4000/todos/update/'+'632f5cbf111a8a4e7bef16cb', obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    
       
}
export default EditNewTodo;