import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import fire from '../index';
import { async } from "q";


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

  signUp = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await fire.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error', err);
    }
    this.setState({
      email: '',
      password: ''
    })
  }

  login = async (e) => {
    e.preventDefault();
    try {
      await fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      // todos los componetes tienen un proos llamado history con un metodo push() para incertar lo que este dentro de los 
      // parentesis en la URL del navegador 
      this.props.history.push('/home');
    } catch (err) {
      console.log(err, 'esta mal');
    }
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