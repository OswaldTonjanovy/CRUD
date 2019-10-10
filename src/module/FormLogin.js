import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import fire from '../index';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log('start yeaaa');
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        return console.log('then iu ', u);
      }).catch((err) => {
        console.log('err ', err);
      })
      this.setState({
        email: '',
        password: ''
      })
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
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow >
          <MDBCol className='mx-auto pt-4' md="6" >
            <form >
              <p className="h5 text-center mb-4">Sign in</p>
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
                  value={this.state.email}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={this.onChangePassword}
                  value={this.state.password}
                />
              </div>
              <div className="text-center mt-4">
                <MDBBtn color="indigo" onClick={this.login}>Login</MDBBtn>
              </div>
              <div className="text-center mt-4">
                <MDBBtn color="indigo" onClick={this.signUp}>Sing up</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
};
export default FormLogin;