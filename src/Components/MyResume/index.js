import React from 'react'
import Paper from '@material-ui/core/Paper';


export default function index(props) {
const {data}=props;
    return (
        <div style={{padding:"100px",}}>
        <Paper elevation={5} style={{height:"500px",width:"300px",padding:"30px",}}>
            <h3>Resume</h3>
         
        <table>
          <tr>
            <th><b>First Name</b></th>
            <td> {data.FirstName}</td>
          </tr>
          <tr>
            <th><b>Last Name</b></th>
            <td> {data.LastName}</td>
          </tr>
          <tr>
            <th><b>D.O.B</b></th>
            <td> {data.DOB}</td>
          </tr>
          <tr>
            <th><b>Email</b></th>
            <td>{data.Email}</td>
          </tr>
          <tr>
            <th><b>Phone Number</b></th>
            <td>{data.PhoneNumber}</td>
          </tr>
          <tr>
            <th><b>Gender</b> </th>
            <td> {data.Gender}</td>
          </tr>
          <tr>
            <th><b>Education</b></th>
            <td> {data.Education}</td>
          </tr>
          <tr>
            <th><b>Percentage</b></th>
            <td>{data.Percentage}</td>
          </tr>
          <tr>
            <th><b>College Name</b></th>
            <td> {data.CollegeName}</td>
          </tr>
          <tr>
            <th><b>City</b></th>
            <td>  {data.City}</td>
          </tr>
          <tr>
            <th><b>Hobbies</b></th>
            <td>{data.Hobbies}</td>
          </tr>
          <tr>
            <th><b>Skills</b></th>
            <td> {data.Skills}</td>
          </tr>
        </table>
        </Paper>
            
        </div>
    )
}
