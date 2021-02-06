class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "masib";
    }
}

const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "jahir");

console.log(student1.name, student2);