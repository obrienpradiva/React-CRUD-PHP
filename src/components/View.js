import React, {Component} from 'react';
import ItemRow from './ItemRow';
import axios from 'axios';

// function View(){
//     return (
//         <div>
//             View Component!
//         </div>
//     );
// }

const api = "http://localhost:29/ReactPHPAPI/";

export default class View extends Component {
    constructor(props){
        super(props);
        this.state = {inputs : []};
    }

    componentDidMount(){
        axios.get(api+'view.php').then(response => {
            this.setState({inputs : response.data});
        })
        .catch(function(err){
            console.log(err);
        });
    }

    inputList(){
        return this.state.inputs.map(function(object, i){
            return <ItemRow obj={object} key={i} />
        });
    }

    render(){
        return (
            <div className="container" style={{marginTop:25}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Input 1</th>
                            <th>Input 2</th>
                            <th>Input 3</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.inputList()}
                    </tbody>
                </table>
            </div>
        );
    }
}