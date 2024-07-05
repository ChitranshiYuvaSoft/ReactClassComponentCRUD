


import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Table from "./Components/Table";

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data :  [
        {
          id : 1,
          name : "Pranav",
          email : "pranav@gmail.com",
          password : "12345"
        },
        {
          id : 2,
          name : "Kajal",
          email : "kajal@gmail.com",
          password : "12345"
        },
        {
          id : 3,
          name : "Vani",
          email : "vani@gmail.com",
          password : "12345"
        }
      ]
    }

    // Add Event Handler
    this.handleDelete = this.handleDelete.bind(this);
  }

   handleDelete = (id) => {
    console.log("Delete")
    // console.log(id, "id")
    // const data =  this.state;
    // console.log(data, "data in")
    const deleteData = this.state.data.filter(item => item.id !== id);
    this.setState(
      {data : deleteData}
    )
    // console.log( this.state.filter(item => item.id !== id))
   }

  // handleDelete = (id) => {
  //   console.log(id, "id")
  //   // const data = this.state
  //   console.log(this.state, "this.state")
  //   // console.log("data ", data)
  //   console.log(this.state.filter(item => item.id !== id))
  //   console.log(
  //     this.setState(
  //       this.state.filter(item => item.id !== id)
  //    , "setState" )
  //   )
  // }

  render() {

    console.log(this.state)
  

    return (
      <>
        <Navbar />
        <Form />
        <Table data={this.state.data} delete={this.handleDelete}/>
      </>
    );
  }
}


export default App;