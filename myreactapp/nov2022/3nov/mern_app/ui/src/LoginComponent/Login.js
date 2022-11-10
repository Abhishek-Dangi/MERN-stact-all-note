import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _webapi } from '../BaseAPIUrls';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
  
    const handleSubmit=(evt)=>{
      evt.preventDefault();
      let userDetails={"email":email,"password":password};
      //console.log(userDetails);
  
      axios.post(_webapi+"login",userDetails).then((response)=>{
        console.log(response.data);
        /*if(res==0)
          setOutput("Invalid user or verify your account....");
        else
        {
          res==1?navigate("/admin"):navigate("/user");
        }*/
        setOutput('test');  
        setEmail('');
        setPassword('');
      }).catch((err)=>{
  
      });
    };

  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
                <h2>Login Here!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <button type="submit" class="btn btn-success">Login</button>
  </form>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Login;