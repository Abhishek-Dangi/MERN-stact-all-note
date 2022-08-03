
class cons {
    constructor(enm, eno) {
        this.enm = enm;
        this.eno = eno;
    }
    setdata(enm, eno) {
        this.enm = enm;
        this.eno = eno;
    }
    showdata() {
        console.log("name is ", this.enm)
        console.log("number is ", this.eno)
    }
}

var obj = new cons("none", 0);
obj.showdata();
obj.setdata("hello", 3923);
obj.showdata();
obj.setdata("dear", 3);
obj.showdata();