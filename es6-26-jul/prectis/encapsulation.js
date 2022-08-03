
// encapsulat in this we change value out side of scope

class inscap {
    setdata(a, b) {
        this.name = a;
        this.num = b;
    }
    showdata() {
        console.log("name is " + this.name);
        console.log("number is " + this.num);
    }
}

var obj = new inscap();
console.log("before change -----");
obj.setdata("abhishek dangi", 12332);
obj.showdata();
console.log("---after change----");
obj.name = "dangi";
obj.showdata();