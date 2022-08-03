// getter methods

class getter {
    setdata(a, b) {
        this.a = a;
        this.b = b;
    }
    adddata() {
        this.c = this.a + this.b;
    }
    getadd() {
        return { "a": this.a, "b": this.b, "c": this.c };
    }
}

var obj = new getter();
obj.setdata(100, 300);
obj.adddata();
obj.getadd();
var res = obj.getadd();
console.log("a= " + obj.getadd().a);
console.log("b= " + obj.getadd().b);
console.log("c= " + obj.getadd().c);

