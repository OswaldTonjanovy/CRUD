import React from "react";
import { MDBCol, MDBBtn } from 'mdbreact';

export const FormPage = (props) => {
  const { onChangeName, onChangeAge, onChangeEmail, saves } = props;
  const  { name, age, email, editing } = props.state;
  
  return (
    <MDBCol md="6">
      <form className='pt-4' onSubmit={saves}>
        <p className="h4 text-center mb-4">Registrate</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your Name
            </label>
        <input
          required
          type="text"
          id="defaultFormRegisterNameEx"
          className="form-control"
          onChange={onChangeName}
          value={name}
        />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Age
            </label>
        <input
          required
          type='number'
          id="defaultFormRegisterEmailEx"
          className="form-control"
          onChange={onChangeAge} 
          value={age}
        />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          @Email
            </label>
        <input
          required
          type="email"
          id="defaultFormRegisterEmailEx"
          className="form-control"
          onChange={onChangeEmail} 
          value={email}
        />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit" >
            {editing ? <h6>Update User</h6> : <h6>Add User</h6>}
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  );
};

