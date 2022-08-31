//oops : data member + member method
//local parameters

class Add {
    addData() {
        //local parameters   
        var a, b, c;
        a = 100;
        b = 200;
        c = a + b;
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("add = " + c);
    }
}

var obj = new Add();
obj.addData();