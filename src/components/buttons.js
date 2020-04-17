import React, { Component } from 'react';
class Buttons extends Component {
    render(){
        return(
            <ul>
            <li><a href="1" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('1');
            }.bind(this)}>1</a></li>
            <li><a href="2" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('2');
            }.bind(this)}
            >2</a></li>
            <li><a href="3" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('3');
            }.bind(this)}>3</a></li>
            </ul>
        );
    }
}
export default Buttons;