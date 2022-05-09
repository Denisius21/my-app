import React,{Component} from "react"
import Clicker from "../Clicker";
class FormValue extends Component {
    state = {
      interval : '',
    };
  inputChange=(e)=>{
    this.setState({
      interval:Number(e.target.value),
    })
  }
  render() {
    return <div>
      <p>Увеличить на {this.state.interval}</p>
        <input type="number" name="number" value={this.state.interval} onChange={this.inputChange}/>
        <Clicker interval={this.state.interval}/>
        </div>
  }
}
export default FormValue;
