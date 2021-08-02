import React, { Component } from 'react'
import './Render.css';
export class Render extends Component {
    constructor(props) {
        super(props)
         
        this.state = {isLoginOpen: true, isSellerOpen: false};
    }
        showLoginBox(){
            this.setState({isLoginOpen:true,isSellerOpen: false})
        }

        showSeallerBox(){
            this.setState({ isSellerOpen: true, isLoginOpen: false })
            
        }

    render() {
        return (<>
            <div className="root-container">
                <div className="box-controller">
                    <div className="controller1" onClick={this.showSeallerBox.bind(this)}>
                        BECOME A SELLER
                    </div>
                    <div className="controller"  onClick={this.showLoginBox.bind(this)}>
                        LOG IN
                    </div>
                 </div>
                <div className="box-container">
       
                     {this.state.isLoginOpen && <LoginBox />}
                     {this.state.isSellerOpen && <SellerBox /> }
        
                    
                    </div>

            </div>
       </> )
    }
}

class LoginBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    submitLogin(e){
        
    }
    
 render() {
     return (
         <div className="inner-container">
             <div className="box">
                 <span className="center1">Log in With...</span>
                 <div className="input-group">
                    <input type="text" placeholder="EMAIL ADDRESS"   />
                 </div>
                 <div className="input-group">
                    <input type="password" placeholder="PASSWORD"/>
                 </div>
             </div>

             <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Log IN</button>
             <div className="center1"> Forget password?</div>
             
         </div>
     )
 }
}
 class SellerBox extends Component {
    render() {
        return (
            <div>
                <h4>No Data</h4>
            </div>
        )
    }
}

            export default Render
