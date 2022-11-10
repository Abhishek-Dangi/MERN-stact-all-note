import './Manageusers.css';

import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapi, _webapiadmin } from '../BaseAPIUrls';

function Manageusers()
{
  
  const [userDetails , setUserDetails] = useState([]);
  useEffect(()=>{
        axios.get(_webapiadmin+"manageusers").then((result)=>{
         //console.log(result.data.userDetails);
         setUserDetails(result.data.userDetails);
        })
  },[]);        
    
  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
<h2>View & Manage User Details</h2>
<br/>
<table class="table table-bordered">
<tr>
<th>ID</th>
<th>Name</th>    
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>   
{
 userDetails.map((row) => (
 <tr>
    <td>{row._id}</td>
    <td>{row.name}</td>
    <td>{row.email}</td>
    <td>{row.mobile}</td>
    <td>{row.address}</td>
    <td>{row.city}</td>
    <td>{row.gender}</td>
    <td>{row.info}</td>
    <td></td>
    <td></td>
 </tr>
 ))
} 
</table>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Manageusers;