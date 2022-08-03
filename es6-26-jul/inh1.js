//inheritance

class A
{
 a=100;   
 aData()
 {
  console.log("Class A , aData method invoked");    
 }    
}

class B extends A
{
 b=200;   
 bData()
 {
  console.log("a = "+this.a);
  console.log("b = "+this.b);   
  console.log("Class B , bData method invoked");    
 }    
}

var obj = new B();
obj.aData();
obj.bData();