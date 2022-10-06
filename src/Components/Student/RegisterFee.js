import React from 'react'
import Dropdown from './Dropdown';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MultiSelect from './MultiSelect';

export default function RegisterFee() {
    const studentoption =[{label:"Unnati Shukla",value:1},
    {label:"Astha Vishwakarma",value:2}];
    const [value, setValue] = useState([]);
    const [valueStud,setStudentdd] = useState({});
    const handleregisteredfees = ()=>{
        alert(value);
        alert(valueStud);
    }
  return (
  <>
    <div className="container mt-5 mb-5 d-flex justify-content-left">
    <div className="card col-md-4">
        <div className="card-body">
            <h4 className="information mt-2">Register Fees</h4>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                    
                            <Dropdown
                            isMulti={false}
                            id="ddstudents"
                            label="Select Student Name"
                            options={studentoption}
                            value={value}
                            onChange={setStudentdd}
                            /> 
                    </div> 
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                         <MultiSelect
                            options={studentoption}
                            value={value}
                            onChange={setValue}
                            /> 
                       
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="number" placeholder="Fee Amount Rs."/> </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column text-center mt-3 mb-3">
            <button className="btn btn-primary btn-md-12 btn-block confirm-button" onClick={handleregisteredfees}>Confirm</button>
         </div>
        </div>
    </div>
</div>
  </>
  )
}
