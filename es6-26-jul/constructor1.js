//constructor : paramatrised constructor
class Employee {
   constructor(eno, enm) {
      this.eno = eno;
      this.enm = enm;
   }
   setEmployee(eno, enm) {
      this.eno = eno;
      this.enm = enm;
   }
   showEmployee() {
      console.log("Eno :", this.eno);
      console.log("Enm :", this.enm);
   }
}

var obj = new Employee(0, "NULL");

obj.showEmployee();

obj.setEmployee(1001, "Jarvis");
obj.showEmployee();


