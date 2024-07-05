import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Table from "./Components/Table";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Sahil",
          email: "sahil@gmail.com",
          password: "123456"
        },
        {
          id: 2,
          name: "Manavi",
          email: "manavi@gmail.com",
          password: "123456"
        }
      ],
      edit: {
        userData: {},
        isEdit: false
      }
    }

    //Add Event Handler
    this.handleDelete = this.handleDelete.bind(this);

    // saveData
    this.saveData = this.saveData.bind(this);

    // Edit
    this.handleEdit = this.handleEdit.bind(this);

    // Update
    this.updateData = this.updateData.bind(this);
  }

  handleDelete = (id) => {
    const deleteData = this.state.data.filter(item => item.id !== id);
    this.setState({
      data: deleteData
    })
  }

  saveData = (formdata) => {
    // console.log(formdata)
    // console.log("Save Data");
    const newData = {
      id: crypto.randomUUID(),
      name: formdata.name,
      email: formdata.email,
      password: formdata.password
    }
    this.setState({
      data: [
        newData,
        ...this.state.data
      ]
    })
  }


  handleEdit = (data) => {
    // console.log("Handle Edit")
    this.setState({
      edit: {
        // userData : {
        //   name : data.name,
        //   email : data.email,
        //   password : data.password
        // },
        userData: data,
        isEdit: true
      }
    })
  }


  updateData = (userDetails) => {
    // console.log(userDetails, "userDetails")
    const update = this.state.data.map(item => item.id === userDetails.id ? { id: userDetails.id, name: userDetails.name, email: userDetails.email, password: userDetails.password } : item);
    this.setState({
      data: update
    })
  }

  render() {



    return (
      <>
        <Navbar />
        <Form saveData={this.saveData} edit={this.state.edit} updateData={this.updateData} />
        <Table data={this.state.data} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </>
    );
  }
}


export default App;