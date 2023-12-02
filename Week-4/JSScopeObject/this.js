class Person{
    constructor(Name,Age,Gender,Nationality){
        this.Name = Name;
        this.Age = Age;
        this.Gender= Gender;
        this.Nationality = Nationality;
    }   
    introduce()
    {
       return "My name is "+ this.Name+", I am "+ this.Age+" years old, I am "+this.Gender+", and I am "+this.Nationality+".";
    }
}
class Student extends Person{
    Subject;
    constructor(Name,Age,Gender,Nationality,subject)
    {
        super(Name,Age,Gender,Nationality);
        this.Subject = subject;
       
    }
    study()
    {
        return "I am studying "+ this.Subject;
    }
}
let person1 = new Person("John",25,"male","American");
let person2 = new Person("Jane",30,"female","Canadian");
let person3 = new Person("Bob",20,"male","Australian");
let student1 = new Student("Sarah",18,"female","British","Computer Science");
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
console.log(student1.introduce() + " " +student1.study());