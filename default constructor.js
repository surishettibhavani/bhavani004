class Employee
{
    constructor(rollno, name){
        this.rollno=rollno;
        this.name=name;
    }
    display(){
        console.log(this.rollno+" "+this.name);
    }
}
let emp=new Employee(1001,"ajayreddy");//object creation done
emp.display();