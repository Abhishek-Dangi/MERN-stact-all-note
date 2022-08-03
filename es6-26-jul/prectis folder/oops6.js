// methed overriding  
class show {
    enm = "null"
    eno = 0;

    setdata(a, b) {
        this.enm = a;
        this.eno = b;
    }
    getdata() {
        console.log("name = " + this.enm);
        console.log("number = " + this.eno);
    }
}


var obj = new show();
obj.getdata();
obj.setdata("abhi", 2003);
obj.getdata();