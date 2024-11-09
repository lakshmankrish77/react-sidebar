import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { number } from 'yup';
import CustomDataTable from '../../components_hoc/CustomDataTable';

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={{
                pathname: "/edit/"+props.todo._id,
                state : {
                    todoid1: "632f5cbf111a8a4e7bef16cb"
                }
            }} >Edit</Link>
        </td>
    </tr>
)


 class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [], columns:[], rows:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    columnList() {
        let columns01 = new Array();
        columns01.push({ field: '_id', headerName: 'ID', width: 250 });
        columns01.push({ field: 'todo_description', headerName: 'Description', width: 150 });
            columns01.push({ field: 'todo_responsible', headerName: 'Responsible', width:150 });
            columns01.push({ field: 'todo_priority', headerName: 'Priority', width: 150 });
            columns01.push({ field: 'todo_completed', headerName: 'Action', width: 150 });
        // return this.state.todos.map(function(currentTodo, i){
        //     // this.state.columns.add("Description");
        //     // this.state.columns.add("Responsible");
        //     // this.state.columns.add("Priority");
        //     // this.state.columns.add("Action");
        //     columns01.push(currentTodo.todo_description);
        console.log('columns01:' + columns01);
        return columns01;
        // })
    }

    

   render() {
        return (
            <div>
                <h3>Todos List</h3>
                {/* <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.columnList() }
                    </tbody>
                </table> */}
                <CustomDataTable columns={this.columnList()} rows={this.state.todos}/>
            </div>
        )
    }
}
export default TodosList;