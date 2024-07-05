import React from "react";

class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: "",
                email: "",
                password: ""
            }
        }



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidUpdate(prevProps){
        // console.log(this.state.formData, "update")
        // console.log(this.props.edit, "editDataUpdate")
        if(this.props.edit !== prevProps.edit){
            this.setState({
                formData : {
                    name : this.props.edit.userData.name,
                    email : this.props.edit.userData.email,
                    password : this.props.edit.userData.password
                }
            })
        }
    }


    handleChange = (e) => {
        // const formInfo = this.state.formData
        // const {name , email, password} = formInfo;
        // // console.log(formInfo , "FormInfo")

        // const Submit = {
        //     ...formInfo,
        //     [e.target.name] : e.target.value
        // }
        // console.log(Submit, Submit)
        // this.setState(
        //     {
        //         Submit
        //     }
        // )

        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })


    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Save Successfully!!");
        const {name, email, password} = this.state.formData
       if(this.props.edit.isEdit){
        this.props.updateData({
            id : this.props.edit.userData.id,
            name,
            email,
            password
        })
       }else{
        this.props.saveData(this.state.formData)
       }
        this.setState({
            formData: {
                name: "",
                email: "",
                password: ""
            }
        })
    }


 

    render() {
        // console.log("FormData", this.state.formData)
        // console.log(this.props.edit, "FOrmEdit")

        const { name, email, password } = this.state.formData
      


        return (
            <>
                <div className="w-100 d-flex align-items-center justify-content-center py-3 my-5">
                    <form className="w-75" onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={this.handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}


export default Form;