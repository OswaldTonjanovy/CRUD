import React from 'react';
import { FormPage } from './formPage';
import { TableData } from './tableData';
import firebase from 'firebase';
import { MDBContainer, MDBRow } from 'mdbreact';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      items: [],
      name: '',
      age: '',
      email: ''
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  onChangeAge = (e) => {
    this.setState({ age: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  createUser = async (e) => {
    const { name, age, email, editing } = this.state;

    e.preventDefault();

    const db = firebase.firestore();
    if (editing) {
      const user = db.collection('members').doc(email);
      await user.set({
        name: name,
        age: age,
        email: email,
      }, { merge: true });
      this.setState({
        editing: false
      });

    } else {
      const user = db.collection('members').doc(email);
      await user.set({
        name: name,
        age: age,
        email: email,
      });
    };

    this.setState({
      name: '',
      age: '',
      email: ''
    });

    this.getUser();
  };

  getUser = async () => {
    const db = firebase.firestore();
    const collections = db.collection('members');
    const collection = await collections.get();
    const userRegistered = [];
    collection.forEach((doc) => {
      userRegistered.push(doc.data());
    })
    this.setState({ items: userRegistered })
  };

  onDelete = async (email) => {
    const db = firebase.firestore();
    var query = db.collection('members').where('email', '==', email);
    try {
      await query.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
      });
      this.getUser();
    } catch (err) {
      console.log(err)
    };
  }

  onEdit = async (email) => {
    const db = firebase.firestore();
    var query = db.collection('members').doc(email);
    const user = await query.get();
    const dataUser = user.data()
    const { name, age } = dataUser
    this.setState({
      name: name,
      age: age,
      email: email,
      editing: true
    })
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <MDBContainer className='pt-4'>
        <MDBRow>
          <FormPage state={this.state} saves={this.createUser} onChangeName={this.onChangeName} onChangeAge={this.onChangeAge} onChangeEmail={this.onChangeEmail} />
          <TableData state={this.state} onDelete={this.onDelete} onEdit={this.onEdit} items={this.state.items} />
        </MDBRow>
      </MDBContainer>

    )
  }
};
export default Home;
