import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

// function InputItem(){
//     return (
//         <div>
//             This is Item
//         </div>
//     );
// }

const api = "http://localhost:29/ReactAPI/";

export default class ItemRow extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            reload : false
        }
    }

    delete(){
        axios.get(api+'delete.php?id='+this.props.obj.id).then(this.setState({reload : true})).catch(err => console.log(err));
    }

    render(){
        if(this.state.reload)
        {
            return <Redirect to='/view' />;
        }
        return (
            <tr>
                <td>
                    {this.props.obj.input1}
                </td>
                <td>
                    {this.props.obj.input2}
                </td>
                <td>
                    {this.props.obj.input3}
                </td>
                <td>
                <Link to={'/edit/'+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-secondary">Delete</button>
                </td>
            </tr>
        );
    }
}