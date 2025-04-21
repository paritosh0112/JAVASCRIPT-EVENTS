//OBJECTS

// const student={name:"paritosh",marks:95.5,
//     printMarks :function(){
//         console.log("marks=",this.marks);//student.marks
//     }
// };
// const employee={
//     calTAx(){
//         console.log("tax is given by employeee");
//     }
// }
// const karanArjun={
//     salary:50000
// }
// karanArjun.__proto__=employee;

//CLASSES
// class Toyotocar{
//     constructor(brand){
//         console.log("Creating new Object");
//         this.brand=brand;
//     }
//   start(){
//     console.log("Start");
//   }
//   stop(){
//     console.log("Stop");
//   }
// }
// let fortuner=new Toyotocar();
// // fortuner.setbrand("fortuner");
// let lexus=new Toyotocar();

//Inheritence
// class Parent{
//     hello(){
//         console.log("hello buddy");
//     }
// }
// class child extends Parent{}
// let obj=new child();

//2nd exapmple inheritence
class person{
    contructor(){
        this.species="Homo sepians";
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class engineer extends person{
    work(){
        console.log("solve problem and build saomething");
    }
}
class doctor extends person{
    work(){
        console.log("give treatements for health");
    }
}
let ParitoshObj=new engineer();