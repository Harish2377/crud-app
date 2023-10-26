import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Details() {

    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://cruds-q5p0.onrender.com/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

  return (
    <div>
           

               <div className="container">
                
            <div className="card row p-4" style={{ "textAlign": "left" }}>
                <div className="card-title text-center">
                    <h2 >Employee Details</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Name : <b>{empdata.name}</b> </h2>
                        <h4 className='fw-bold'>Contact Details</h4>
                        <h5>Email : {empdata.email}</h5>
                        <h5>Phone : {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            
        </div >
  )
}

export default Details