import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import fire from '../index';
import { toast } from "react-toastify";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      email: '',
      password: ''
    }
  }
  onChangeUser = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  signUp = (e) => {
    toast.success('usuario registrado');
    const { signUp } = this.state
    e.preventDefault();
    if(signUp){
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        return console.log('then iu ', u);
      }).catch((err) => {
        console.log('err ', err);
        toast.success('usuario registrado');
      })
  
      this.setState({
        signUp: false,
        email: '',
        password: ''
      })
    }else{
this.setState({
        signUp: true,
        email: '',
        password: ''
      })}
       toast.success('usuario registrado');
  }
  login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{
      this.props.history.push('/home');
      console.log('fhhhfdf');
      console.log(u);
    })
    .catch((err)=>{
      console.log(err, 'esta mal');
    })
    this.setState({
      signUp: false
    })
  }

  render() {
    const { email, password, signUp } = this.state
    return (

      <div className='d-flex align-items-center'  style={{ height: '100vh'}}>
        <MDBRow className=' w-100' >
          <MDBCol className='mx-auto'  md="4">
            <form>
            { signUp ?<p className="h5 text-center">Sign Up</p>:<p className="h5 text-center">Sign in</p>}
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.onChangeUser}
                  value={email}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <MDBRow>
              <MDBCol className="text-center" md="6">
                <MDBBtn color="indigo" onClick={this.login}>Login</MDBBtn>
                </MDBCol>
              <MDBCol className="text-center" md="6">
                <MDBBtn color="indigo" onClick={this.signUp}>Sing up</MDBBtn>
              </MDBCol>
              </MDBRow>
             
            </form>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
};
export default FormLogin;