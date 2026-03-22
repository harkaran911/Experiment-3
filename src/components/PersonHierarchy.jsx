import React from "react";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "Person";
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
    this.role = "Student";
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    this.role = "Teacher";
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function PersonHierarchy() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  return (
    <section className="experiment-section" id="experiment33">
      <div className="section-header">
        <h1>Experiment 3.3: Person Class Hierarchy</h1>
        <p>
          This experiment demonstrates inheritance, method overriding, and
          polymorphism using Person, Student, and Teacher classes rendered in a
          React user interface.
        </p>
      </div>

      <div className="hierarchy-container">
        <h2 className="hierarchy-title">Person Class Hierarchy</h2>

        <div className="person-list">
          {people.map((person, index) => (
            <div className="person-card" key={index}>
              <h3>
                {person.name} ({person.role})
              </h3>

              <p className="person-age">Age: {person.age}</p>

              <p className="person-intro">{person.introduce()}</p>

              {person instanceof Student && (
                <p className="person-extra">Major: {person.major}</p>
              )}

              {person instanceof Teacher && (
                <p className="person-extra">Teaching: {person.subject}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PersonHierarchy;