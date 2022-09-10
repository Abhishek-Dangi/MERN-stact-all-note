

function Employee() {
    this.eno = 1001;
    this.enm = "abhishek";
    this.end = "mern devl";
    this.esall = 100000;
    this.endob = "3 / 8 / 22";

    this.showDetials = () => {
        console.log("this is employee details")
        console.log("enumber =" + obj.eno);
        console.log("ename =" + obj.enm);
        console.log("edetial =" + obj.end);
        console.log("esall =" + obj.esall);
        console.log("endob =" + obj.endob);
        console.log("-------------------------------");

    }
}

var obj = new Employee();
showDetials();
