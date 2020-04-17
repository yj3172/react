import React, { Component } from 'react';
import './css/header.css';
class ProHeader extends Component {
    render(){
        return(
         <div id='Proheader'>
            
            <div id='headerwrap'>
                <div id='headertitle'>
                   BOOKER
                </div>
                <nav>
                    네비게이션
                    </nav>
                <div id='headersignmenu'>
                    <span>로그인</span>
                    <span>회원가입</span>
                </div>
            </div>
                
        </div>
        );
    }
}
export default ProHeader;