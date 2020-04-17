import React, { useState, useEffect, useCallback, Component } from 'react';
import './App.css';
import Buttons from "./components/buttons"
import ProHeader from "./components/headerfooter/ProHeader"
import Two from "./components/Two"
import Three from "./components/Three"
import Create from "./components/Create"
import Read from "./components/Read"
import Update from "./components/Update"
import Content from "./components/Content"
import customAxios from './customAxios';

class App extends Component {
  
  constructor(props){
    super(props);



    this.max_id = 0;
    this.state={
 
      mode:'1',
      content:[
        {id:this.max_id,title:'title',desc:'desc'},
        {id:555,title:'555',desc:'555'}
        
      ]
    }
   

  }
 
  
  render () {

      

  

    var title,desc,article=null;
    
    if(this.state.mode==='1'){
     article = <Create onSubmit={function(_title,_desc){
       //add content to this.state.content; 
      this.max_id=this.max_id+1;
      var concat = this.state.content.concat({id:this.max_id, title:_title,desc:_desc});
      this.setState({
        content:concat
      })

      console.log(title+desc)
     }.bind(this)}
     
     ></Create>
    }else if(this.state.mode==='2'){
      article=<Read></Read>
    }else if (this.state.mode==='3'){
     article=<Update data={this.props.title}></Update>
    }

    return (
    <div className="App">
      <ProHeader></ProHeader>
      this is mode = {this.state.mode}
    <Buttons onChangeMode={function(mode){
        this.setState({
          mode:mode
        })

    }.bind(this)}></Buttons>
    
    <Content data={this.state.content}></Content>
    {article}
   
  </div>
    
    )
  };
}

export default App;
