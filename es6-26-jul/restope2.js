//rest operator (...)
/* function overloading : cannot be implemented by traditional approach */

function test(s,...args)
{
 if(s=="add")
     console.log("Add = "+(args[0]+args[1]))
 else
     console.log("Concatinate = "+(args[0]+args[1]))    
}

test("add",10,20);
test("concatinate","Universal","Informatics");