import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Add() {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={name,email,phone,active};
        
  
        fetch("https://cruds-q5p0.onrender.com/employee",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(empdata)
        }).then((res)=>{
          alert('Saved successfully.')
          navigate('/');
        }).catch((err)=>{
          console.log(err.message)
        })
  
      }


  return (
    <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                      <div className='card-title'> 
                      <h2 className='text-center'>Employee Create</h2>
                      </div>
                      <div className="card-body">

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">ID</label>
                                        <input value={id} disabled="disabled" type="text" className='form-control' />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <input  required onChange={e=>namechange(e.target.value)} onMouseDown={e=>valchange(true)} value={name} type="text" className='form-control' />
                                        {name.length==0 && validation && <span className="text-danger">*Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input required value={email} onChange={e=>emailchange(e.target.value)} type="text" className='form-control' />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <input required value={phone} onChange={e=>phonechange(e.target.value)} type="text" className='form-control' />
                                    </div>
                                </div>

                                <div className="col-lg-12 mt-2">
                                    <div className="form-check">

                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className='form-check-input' />
                                        <label className='form-check-label'>Is Active</label>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button type='submit' className='btn btn-success me-3'>Save</button>
                                        <Link to={'/'} className='btn btn-danger'>Back</Link>
                                    </div>
                                </div>

                              

                                    

                            </div>

                            

                        </div> 
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Add