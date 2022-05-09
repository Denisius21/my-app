import React,{Component} from 'react';

class Clicker extends Component {
    state = {
      numb: 0,
      buli: true,
  };

  start = () => {
    this.setState({numb:this.state.numb + this.props.interval});
  };
  startMin = () => {
    this.setState({numb:this.state.numb - this.props.interval});
  };

  render() {
    const { numb } = this.state;
    return (
      
        <div>
        <div>Количество кликов {numb}</div>
        <button onClick={this.state.buli?this.start:this.startMin}>Click</button>
        <button onClick={this.startMin}>refresh</button>
        <button onClick={()=>{this.setState({buli:!this.state.buli})}}>Bull</button>
        </div>
      
    );
  }
}
export default Clicker;
