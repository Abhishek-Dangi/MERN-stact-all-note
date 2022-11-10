import IndexModel from '../models/IndexModel.js';
import AdminModel from '../models/AdminModel.js';

class AdminController
{
 manageUsers(condition_obj)
 {
  return new Promise((resolve,reject)=>{
    IndexModel.fetchUsers(condition_obj).then((result)=>{
     resolve(result);  
    }).catch((err)=>{
     reject(err);  
    });  
  });
 }

 manageUserStatus(urlobj)
 {
  return new Promise((resolve,reject)=>{
    AdminModel.manageUserStatusModel(urlobj).then((result)=>{
     resolve(result);  
    }).catch((err)=>{
     reject(err);  
    });  
  });
 }

}

export default new AdminController();