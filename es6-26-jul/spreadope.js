//spread operator (...)

var empDetails={"eno":1001,"enm":"John","esal":10000.67};

/*empDetails.edes="trainer";*/
empDetails.edob=15;

empDetails={...empDetails,"edes":"trainer","edob":15};

console.log("Employee Details :");
console.log(empDetails);