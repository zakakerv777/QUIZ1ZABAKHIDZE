const students = [
    { name: "Alice", age: 20, grade: 85, attendance: 90 },
    { name: "Bob", age: 19, grade: 92, attendance: 85 },
    { name: "Charlie", age: 20, grade: 85, attendance: 95 },
    { name: "David", age: 18, grade: 88, attendance: 88 },
    { name: "Eve", age: 19, grade: 92, attendance: 92 },
  ];
  
  function sortByGrade(students) {
    return [...students].sort((x, y) => y.grade - x.grade);
  }

  function sortByAgeAndGrade(students) {
    return [...students].sort((x, y) => {
      if (x.age === y.age) {
        return y.grade - x.grade; // nishani desc
      }
      return x.age - y.age; // asaki asc
    });
  }


    function sortByGrade(students) {
    //
  }
  
     function sortByAgeAndGrade(students) {
    //
  }
  
     console.log(sortByGrade(students));
  
     console.log(sortByAgeAndGrade(students));

     /*
მოცემულია სტუდენტების მასივი, განახორციელეთ შემდეგი დალაგების ფუნქციები:

1. sortByGrade(students)
  - დაალაგეთ სტუდენტები ქულების მიხედვით კლებადობით

2. sortByAgeAndGrade(students)
  - დაალაგეთ სტუდენტები პირველ რიგში ასაკის მიხედვით (ზრდადობით)
  - თუ ასაკი ტოლია, დაალაგეთ ქულების მიხედვით (კლებადობით)

მოთხოვნები:
- არ შეცვალოთ ორიგინალი მასივი
- დააბრუნეთ ახალი დალაგებული მასივები
*/