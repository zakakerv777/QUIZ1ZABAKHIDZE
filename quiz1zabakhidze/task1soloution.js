
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.makeSound = function() {
    return "Some sound";
};


function Dog(name, age, jish) {
    Animal.call(this, name, age); 
    this.jish = jish;
}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


Dog.prototype.makeSound = function() {
    return "Woof!";
};


function Cat(name, age, color) {
    Animal.call(this, name, age);
    this.color = color;
}


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


Cat.prototype.makeSound = function() {
    return "Meow!";
};


const dog = new Dog("Rex", 3, "German Shepherd");
const cat = new Cat("Whiskers", 2, "Gray");

console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);
console.log(dog.makeSound()); 

console.log(cat.name);
console.log(cat.age);
console.log(cat.color); 
console.log(cat.makeSound());

/*
შექმენით მარტივი მემკვიდრეობის სისტემა პროტოტიპების გამოყენებით:

1. შექმენით ბაზისური ობიექტი სახელად 'Animal' შემდეგი თვისებებით:
   - სახელი (string)
   - ასაკი (number)
   - makeSound() მეთოდი, რომელიც აბრუნებს "Some sound"

2. შექმენით 'Dog' ობიექტი, რომელიც მემკვიდრეობით იღებს 'Animal'-დან და დაამატება:
   - ჯიში (string)
   - makeSound() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და აბრუნებს "Woof!"

3. შექმენით 'Cat' ობიექტი, რომელიც მემკვიდრეობით იღებს 'Animal'-დან:
   - ფერი (string)
   - makeSound() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და აბრუნებს "Meow!"

მოთხოვნები:
- გამოიყენეთ პროტოტიპული მემკვიდრეობა
- ყველა ობიექტს უნდა ჰქონდეს საკუთარი კონსტრუქტორი ფუნქცია ან კლასი
*/