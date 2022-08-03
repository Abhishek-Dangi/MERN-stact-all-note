//Abstraction
class Employee
{
 #eno;
 #enm;
 setEmployee(eno,enm)
 {
    this.#eno=eno;
    this.#enm=enm;
 }
 showEmployee()
 {
    console.log("Eno :",this.#eno);
    console.log("Enm :",this.#enm);
 }
} 

var obj = new Employee();
obj.setEmployee(1001,"Jarvis");
obj.showEmployee();

//obj.#eno=0;
//console.log(obj.#eno);

