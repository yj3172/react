import React, { Component } from 'react';
class Content extends Component {
    shouldComponentUpdate(newProps,newState){
        if(this.props.data===newProps.data){
            return false;
        }
        return true;
    }
    render(){
        var i =0;
        var content = this.props.data
        var lists = [];       
        
        while(i < content.length){
        lists.push( <article key={content[i].id}><h1>{content[i].title}</h1><div>{content[i].desc}</div></article>);
            i=i+1;
        }
        
        return(
            <div>
        {lists}
        </div>
  
        );
    }
}
export default Content;