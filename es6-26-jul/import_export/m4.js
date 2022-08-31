class TestClass {
    a = 100;
    b = 200;

    demo() {
        console.log("Module m2 , demo function invoked");
    }

    demo1() {
        console.log("Module m2 , demo1 function invoked");
    }
}

export default new TestClass();