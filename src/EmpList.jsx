import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function EmpList() {

    const [empdata, empdatachange] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        fetch("https://cruds-q5p0.onrender.com/employee/").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])


    const LoadEdit = (id) => {
        navigate("/edit/" + id);
    }

    const LoadDetail = (id) => {
        navigate("/details/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://cruds-q5p0.onrender.com/employee/" + id, {
                method: "DELETE"
                
              
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


  return (
    <div className='container'>
        <div className="card p-4">
            <div className="card-title">
                <h2 className='text-center'>Employee Listing</h2>
            </div>
            <div className="card-body">

                <div className='text-center mb-5'>
                    <Link to={'/add'} className="btn btn-success">Add New (+)</Link>
                </div>

                <table className='table table-bordered shadow'>

                    <thead className='text-white'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>

                        </tr>

                    </thead>

                    <tbody>

                        { empdata &&
                            empdata.map(item=>(

                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td className='text-center'><a href="" className='btn btn-success me-3' onClick={() => { LoadEdit(item.id) }}  >Edit</a>
                                    <a href="" className='btn btn-danger me-3' onClick={() => { Removefunction(item.id) }}  >remove</a>
                                    <a href="" className='btn btn-primary' onClick={() => { LoadDetail(item.id) }}  >details</a>
                                    </td>


                                </tr>

                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
        
    </div>
  )
}

export default EmpList