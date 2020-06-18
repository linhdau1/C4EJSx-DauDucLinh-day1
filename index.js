//bai1:In JavaScript, in what cases, you will get the SyntaxError telling you that some
//of your variables have invalid names? Can you give 3 different examples of
//invalid variable names?
// var &linhducdau
// var 83linh
// var 312314131
//b:In JavaScript, how to check a variable data types?

//Dùng lệnh typeof để xem kiểu dữ liệu của biến

//bai3
let x = 'Coding is Great';
console.log(x);
let y =0;
console.log(y);
let s= x.toLowerCase();
console.log(s);


//bai4
x = 'Coding might not be easy, but still great';
console.log(x);
y = 16;
console.log(y);
y++;
console.log(y);


//bai 5

alert('Wish you a good day');


//bai 6

let name = prompt('hi, your name?');
alert("hello" + " " + name );


//bai7
let fname = prompt(' what your first name :');
let lname = prompt(' what your last name :');
alert("hello" + " " + lname + " " + fname);


//bai8

let x = prompt("Nhap: ");
alert("dien tich  " + x*x);


//bai9

let x = prompt("ban kinh : ");
alert("dien tich + x*x*3.14");


//bai10
let x = prompt("nhap gia tri do C :");
let y = x*1.8 + 32;
alert("gia tri do F la " + y  );
