import React, { Component } from 'react';
class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            title:this.props.data.title,
            desc:this.props.data.desc
        }
    }
    render(){
        return(
           <article>
           <div>Update</div>
           <form action="/create_process" method='post'
                onSubmit={function(e){
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                    e.preventDefault();
                    alert('submit!!')
                }.bind(this)}           
           >
               <input 
                    type='text' 
                    name='title' 
                    placeholder='title'
                    value={this.props.title}
                    onChange={function(e){
                        this.setState({
                            title:e.target.value
                        })


                    }.bind(this)}
               />
               <p><textarea name='desc' placeholder='description'/></p>
               <input type='submit'/>
               </form>
           </article>
        );
    }
}
export default Update;