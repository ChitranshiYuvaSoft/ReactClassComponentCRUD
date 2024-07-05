import React from "react";

class Table extends React.Component {

    render() {
        // console.log(this.props.handleDelete)
        return (
            <>
                <div className="w-100 d-flex align-items-center justify-content-center py-3 my-5">
                    <table className="w-75 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">#</th>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">Email</th>
                                <th scope="col" className="text-center">Password</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.props.data.map((item, index) => <tr key={index}>
                                    <th scope="row" className="text-center">{index + 1}</th>
                                    <td className="text-center">{item.name}</td>
                                    <td className="text-center">{item.email}</td>
                                    <td className="text-center">{item.password}</td>
                                    <td className="text-center">
                                        <button className="btn btn-warning text-white fw-bold py-1 px-1 mx-2" onClick={() => this.props.handleEdit(item)}>Edit</button>
                                        <button className="btn btn-danger text-white fw-bold py-1 px-1" onClick={() => this.props.handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}


export default Table;