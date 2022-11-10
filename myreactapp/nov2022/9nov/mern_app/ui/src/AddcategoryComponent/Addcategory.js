import './Addcategory';

import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapi, _webapiadmin } from '../BaseAPIUrls';
import { useNavigate } from 'react-router-dom';

function Addcategory()
{
  
    
  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
<h2>Add Category Here!!!</h2>
<br/>
<form onSubmit="" >

<label>
Category Name:
<input type="text" value={catName}
onChange={e => setCatName(e.target.value)} />
</label>
<br/><br/>

<label>
Category Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Category" />

</form>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Addcategory;