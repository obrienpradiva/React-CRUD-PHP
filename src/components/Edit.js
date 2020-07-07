import React, {Component} from 'react';
import axios from 'axios';

// function Edit(){
//     return (
//         <div>
//             Edit Component!
//         </div>
//     );
// }

const api = "http://localhost:29/ReactAPI/";

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeInput1 = this.onChangeInput1.bind(this);
        this.onChangeInput2 = this.onChangeInput2.bind(this);
        this.onChangeInput3 = this.onChangeInput3.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            input1 : '',
            input2 : '',
            input3 : ''
        }
    }

    onChangeInput1(e){
        this.setState({input1 : e.target.value});
    }
    onChangeInput2(e){
        this.setState({input2 : e.target.value});
    }
    onChangeInput3(e){
        this.setState({input3 : e.target.value});
    }
    onSubmit(e){
        const obj = {
            id : this.props.match.params.id,
            input1 : this.state.input1,
            input2 : this.state.input2,
            input3 : this.state.input3
        };
        
        axios.post(api+'update.php', obj).then(res => console.log(res.data));

        this.setState = {
            input1 : '',
            input2 : '',
            input3 : ''
        }
    }

    componentDidMount(){
        axios.get(api+'getDataById.php?id='+this.props.match.params.id).then(response => {
            this.setState({input1 : response.data.input1,
                            input2 : response.data.input2,
                            input3 : response.data.input3});
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render(){
        return (
            <div className="container" style={{marginTop: 25}}>
                <h3>Update Data</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Input 1</label>
                        <input type="text" className="form-control" value={this.state.input1} onChange={this.onChangeInput1} />
                    </div>
                    <div className="form-group">
                        <label>Input 2</label>
                        <input type="text" className="form-control" value={this.state.input2} onChange={this.onChangeInput2}/>
                    </div>
                    <div className="form-group">
                        <label>Input 3</label>
                        <input type="text" className="form-control" value={this.state.input3} onChange={this.onChangeInput3}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}