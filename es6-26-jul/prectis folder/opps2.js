class add {
    a;
    b;
    c;
    getdata(a, b) {
        this.a = a;
        this.b = b;
    }
    adddata() {
        this.c = this.a + this.b;

    }
    showdata() {
        console.log("a = " + this.a);
        console.log("b = " + this.b);
        console.log("add = " + this.c);

    }
}

var obj = new add();
obj.getdata(120, 200);
obj.adddata();
obj.showdata();
