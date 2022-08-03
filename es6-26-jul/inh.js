//inheritance

class A
{
 aData()
 {
  console.log("Class A , aData method invoked");    
 }    
}

class B extends A
{
 bData()
 {
  console.log("Class B , bData method invoked");    
 }    
}

var obj = new B();
obj.aData();
obj.bData();