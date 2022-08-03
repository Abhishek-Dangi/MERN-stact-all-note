class Employee
{
 //to assign default value to class parameters   
 eno=0
 enm=null    
 setEmployee(eno,enm)
 {
    this.eno=eno;
    this.enm=enm;
 }
 showEmployee()
 {
    console.log("Eno :",this.eno);
    console.log("Enm :",this.enm);
 }
} 

var obj = new Employee();

obj.showEmployee();

obj.setEmployee(1001,"Jarvis");
obj.showEmployee();


