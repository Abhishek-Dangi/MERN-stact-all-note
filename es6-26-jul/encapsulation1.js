//encapsulation : bug
class Employee
{
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
obj.setEmployee(1001,"Jarvis");

console.log("Before changes :-");
obj.showEmployee();

obj.eno=0;

console.log("After changes :-");
obj.showEmployee();


