import React, { useState, useEffect } from 'react';
import { Row, PopupContainer,Column, Label, Br, Button} from '../utils/Styles'
import Popup from 'reactjs-popup';
import axios from 'axios';


function Viewdetails() {
    const [data,setdata]=useState()
    const [selectEmployee,setSelectEmployee] = useState()
    const [modalOpen,setModalopen] = useState(false)
    
    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/')
        .then(res =>{
            console.log(res.data)
            setdata(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const AddEmployee =() => {
        setModalopen(true)
        setSelectEmployee({"id":"","email":""})
    }

    const UpdateEmployee =(index) => {
        setModalopen(true)
        setSelectEmployee(data[index])

    }
    const contentStyle = {
        margin: "auto",
        background: "rgb(255, 255, 255)",
        width: "700px",
        padding: "20px",
        border: "1px solid #d7d7d7",
        height: "350px"
    };

    const overlayStyle = { background: 'rgba(0,0,0,0.1)' };

    return (
        <div>
            <div className="div2">
                <div className="container">
                <Button  style={{"float":"right","background":"#0097f1"}} onClick ={ () => AddEmployee()}>Add Employee</Button>
                <Popup modal open={modalOpen}{...{ contentStyle, overlayStyle}}>
                    <EmployeePopup setModalopen={setModalopen} selectEmployee={selectEmployee}/>
                </Popup>
                
                {data && 
                <table id="t01">
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>password</th>
                        <th>address</th>
                        <th>dob</th>
                        <th>company</th>
                        <th>Mobile</th>
                        <th>city</th>
                        <th>Actions</th>
                    </tr>
                    {data.map((data,index) =>(
                    <tr>
                        <td style={{"width":"2px"}}>1</td>
                        <td>{data.email}</td>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.password}</td>
                        <td>{data.address}</td>
                        <td>{data.dob}</td>
                        <td>{data.company}</td>
                        <td>{data.mobile}</td>
                        <td>{data.mobile}</td>
                        <td>
                            <Row>
                                <Button id="small-button" style={{"background":"#0097f1"}} onClick ={ () => UpdateEmployee(index)}>Update</Button>
                                <Button id="small-button" style={{"background":"#FF7F50"}}>Delete</Button>
                            </Row>
                        </td>
                    </tr>
                    ))}
                    </table>
}
                </div>
            </div>    
            
        </div>
    )
}

export default Viewdetails

const EmployeePopup = (props) => {
    const { setModalopen,selectEmployee } = props;

    const Cancel = () => {
        setModalopen(false)
    }

    return(
        <div>
            <Label>Add Employee Details</Label>
            <Br/>
        <PopupContainer>
            <Column>
            <Row>
                <label>Id:</label>
                <input type="number"style={{"marginLeft":"58px"}} name="emp_id" id="emp_id" value={selectEmployee.id} />
            </Row>   
            <Row>
                <label>Email:</label>
                <input type="text" style={{"marginLeft":"30px"}} name="email" id="email" value={selectEmployee.email} />
            </Row>    
            <Row>
                <label>Firstname:</label>
                <input type="text" name="firstname" id="firtsname" value={selectEmployee.firstname}/>
            </Row>
            <Row>
                <label>Lastname:</label>
                <input type="text" name="lastname" id="lastname" value={selectEmployee.lastname} />
            </Row>
            <Row>
                <label>password:</label>
                <input type="password" name="password" id="password" value={selectEmployee.password} />
            </Row>
            </Column>
            <Column>
            <Row>
                <label>Address:</label>
                <input type="text" style={{"marginLeft":"13px"}} name="address" id="address" value={selectEmployee.address} />
            </Row>    
            <Row>
                <label>Dob:</label>
                <input type="text" style={{"marginLeft":"40px"}} name="dob" id="dob" value={selectEmployee.dob} />
            </Row>
            <Row>
                <label>Company:</label>
                <input type="text" name="company" id="company" value={selectEmployee.company} />
            </Row>
            <Row>
                <label>Mobile:</label>
                <input type="text" style={{"marginLeft":"21px"}} name="mobile" id="mobile" value={selectEmployee.mobile} />
            </Row>
            <Row>
                <label>city:</label>
                <input type="text" style={{"marginLeft":"42px"}} name="city" id="city" value={selectEmployee.city} />
            </Row>
            <Row>
                <Button style={{"float":"center","background":"#0097f1"}}>Save</Button>
                <Button style={{"float":"center", "background":"#FF7F50"}} onClick ={ () => Cancel()}>Cancel</Button>
            </Row>
            </Column>
        </PopupContainer>
        </div>
    )
}
