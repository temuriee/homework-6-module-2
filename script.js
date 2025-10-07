class Person {
  username = null;
  age = null;

  constructor(studentName, age) {
    this.username = studentName;
    this.age = age;
  }
  introduce = () => {
    return `Hi my name is ${this.username} I am ${this.age} years old`;
  };
}

const person = new Person("Temo", 16);
// console.log(person.introduce());

class Student extends Person {
  grade = null;
  subjects = null;

  constructor(username, age, grade) {
    super(username, age);
    this.grade = grade;
    this.subjects = [];
  }

  study(...subject) {
    this.subjects.push(...subject);
  }

  getInfo = () => {
    return `Student:${this.username}, Age:${this.age},  Grade:${this.grade}, Subjects:${this.subjects}`;
  };
}

const student = new Student("Temo", 16, "A+");
student.study("Math", "English", "Science", "History");

// console.log(student);
// console.log(student.getInfo());
class Teacher extends Person {
  constructor(salary, username) {
    super((username = []));
    this.salary = salary;
    this.subjects = [];
  }

  subject(...subject) {
    this.subjects.push(...subject);
  }

  teacherName(...teacherName) {
    this.username.push(...teacherName);
  }

  teach = () => {
    return `Mr/Ms. ${this.username} is teaching ${this.subjects}`;
  };

  getInfo = () => {
    return `Teacher: ${this.username}, Subject: ${this.subjects}, Salary: ${this.salary} GEL`;
  };
}

const teacher = new Teacher(800);
teacher.teacherName("Miranda");
teacher.subject("Math");
// console.log(teacher.getInfo());
// console.log(teacher.teach());

class Classroom {
  constructor(teacher) {
    this.teacher = teacher;
    this.students = [];
  }

  addStudent(...student) {
    this.students.push(...student);
  }

  listMembers() {
    console.log(`Teacher: ${this.teacher}`);

    this.students.forEach((element, i) => {
      console.log(`Student:  ${++i}) Name: ${element} `);
    });
  }

  findStudent(studentName) {
    const test = this.students.find((student) => student === studentName);

    if (test) {
      console.log(`Found Student: ${test}`);
    } else {
      console.log("Couldnt Find Student Try Again");
    }
  }
}

const classroom = new Classroom("Giorgi");
classroom.addStudent("Temo", "Saba", "Kaxa");
classroom.listMembers();
classroom.findStudent("Temo");
