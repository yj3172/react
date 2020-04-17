
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';



const $ = window.jQuery


class Create extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'1'
        }
    }
    // componentDidMount() {
    //     fetch("http://localhost:8080/SpringMarch/index")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //             alert("성공")
    //             console.log(result)
    //           this.setState({
    //             title:result.id
    //           });
    //         },
    //         // 주의: 컴포넌트의 실제 버그에서 발생하는 예외사항들을 넘기지 않도록 
    //         // 에러를 catch() 블록(block)에서 처리하기보다는 
    //         // 이 부분에서 처리하는 것이 중요합니다.
    //         (error) => {
    //             alert("실패")
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }
    render(){
        return(
           <article>
               
           <div>Create</div>
           <form action="/create_process" method='post' className='Create'
                onSubmit={function(e){
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                    e.preventDefault();
                    alert('submit!!')
                }.bind(this)}           
           >
               <input type='text' name='name' placeholder='name'/>
               <input type='text' name='pwd' placeholder='pwd'/>
               <p><textarea name='desc' name='content' placeholder='description'/></p>
               <input type='submit' id='submit'/>
               </form>
               <input type='button' value='ajax' onClick={function(e){
                   e.preventDefault();
                
               }.bind(this)}/>
               그래그렇구나{this.state.title}
               <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
           </article>

        );
    }
}
export default Create;