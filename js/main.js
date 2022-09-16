//1
const arr = [ 1, 2, 3, 4, 5, 6];

for(let index = 0; index < arr.length; index++){
    console.log(arr[index])
};

//2
const sayHello = () => {
    const userName = prompt('Введите своё имя');
    alert(`Привет, ${userName}`)
};

sayHello();

//3

const sayOld = () => {
    const userAge = prompt('Введите свой возраст');

if (userAge <= 5){
        alert(`Вы младенец`)
    } else if (userAge> 5 && userAge <10){
        alert(`Вы ребенок`)
    }else if (userAge>= 10 && userAge <18){
        alert(`Вы подросток`)
    }else if (userAge >= 18 && userAge <65){
        alert(`Вы взрослый`)
    }else {
        alert(`Вы старик`)
    }};
    

sayOld();

//4 почти получилось =)

const sayDates = () => {
    const userNumbers = prompt('Введите любое число');

if (userNumbers ==3){
    alert(`Fizz`)
} else if (userNumbers == 5){
    alert(`Buzz`)
} else if (userNumbers == 3 && userNumbers == 5){
    alert(`FizzBuzz`)
} else {
    alert(`Введите число`)
}};

sayDates();