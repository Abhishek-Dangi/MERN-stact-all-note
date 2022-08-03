class emp {

    constructor() {
        this.enm = "none";
        this.eno = 0;
    }

    setdata(a, b) {
        this.enm = a;
        this.eno = b;
    }
    getdata() {
        console.log("name of person is " + this.enm);
        console.log("number of person is " + this.eno);
    }
}

var obj = new emp();
obj.getdata();
obj.setdata("abhidangi", 3992);
obj.getdata();

