// //Cau 1 Variable swap
// let a = [1,2]
// //vd 1
// a = [2 ,1]
// //vd 2
// console.log (a)
// let b =a [0]
// a[0] =a [1]
// a[1]= b
// console.log(a)
// vd 3
//array =[b,b=a]
//-------------------------------------
// //Cau 2 Split String into Array
// let s= (`Hello, beauty, there`)
// let a = s.split(", ")
// console.log(a)

// //Cau 3 In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of
//these tasks is to log (print out) an array without using loops, try it:
// const a =[4,5, 7,-8]
// console.log(a)
// console.log(...a)

// // Cau 4 Write a script to simulate a clothes shop, asking and performing certain tasks from users
// let a = ["Jean","T-Shirt", "Socks"]
// let f=""
// let b =["C","R","U","D","c","r","u","d","huy"]
// let x =0
// let y=0
// while(y==0){
// let intro = prompt("Hi there, welcome to shop admin panel, what do you want? (C,R,U,D)")
// while(x==0){
//     for (let i =0; i<b.length;i++){
//         if(intro==b[i]){x=1}
//     }
//     if(x==0){alert("This command is not supported ")
//         intro = prompt("Hi there, welcome to shop admin panel, what do you want? (C,R,U,D)")}
// }
// //Nhap R
// if(intro=="r"||intro=="R"){
//     for(i =0;i<a.length;i++){
//         f+=`${i+1}. ${a[i]}\n`
//     }
//     alert(`The current item:\n${f}`)
//     f=""
// }
// //Nhap C
// else if(intro=="c"||intro=="C"){
//    let  newitem= prompt("Enter the name of new item")
//     a.push(newitem)
//     alert("Done")
//    }
// //Nhap U
// else if(intro == "u"||intro=="U"){
//     let upd = prompt("Enter the position you want to update")
//     let newname=prompt("Enter the new name")
//     a[upd-1]=newname
//     alert("Done")
//     }

// //Nhap D
// else if(intro=="d"||intro=="D"){
//     let del =prompt("Enter the position you want to delete")
//     a.splice(del,1)
//     alert("Done")
//     }
// else if(intro=="huy"){break}
// }

//Cau 5 Write a script to ask users enter a sequence of numbers, the Numbers are separated by
//commas, calculate the sum of the numbers and show it to users
// let b=prompt("Enter a sequence of Number, seperated by commas (,)")
// let a = b.split(",")
// let c =0
// for(let i=0;i<a.length;i++){
//     a[i]=Number(a[i])
// }
// console.log(a)
// for(i=0;i<a.length;i++){
//     c +=a[i]}
// console.log(c)

//Cau 6 Write a script asking users to enter a sequence of numbers, the numbers are separated
//by commas, find the smallest number and log it out to users
// let b=prompt("Enter a sequence of Number, seperated by commas (,)")
// let a = b.split(",")
// let c =0
// for(let i=0;i<a.length;i++){
//     a[i]=Number(a[i])
// }
// console.log(a)
// let d = Math.min(...a)
// console.log(...a)
// alert(`The smallest number is ${d}`)

//Cau 7 Create an array containing at least 5 numbers, then ask users enter a number, perform a
//search to look for the number in the array, if the number is found, tell user that with the
//index of it in the array, if not, also tell them so
// const arr = [3,4,6,-9,10,-88,2]
// let a =0
// let i =0
// let n = Number(prompt("Enter a number"))
// console.log(n)
// while (typeof(n)==NaN){
//     n = Number(prompt("Please enter a number"))
// }
// console.log (n)
// for(i=0;i<arr.length;i++){
//     if(n==arr[i]){a =1 
//     break}
// }
// if(a==1){alert(n+" is FOUND in my array at index "+i)}
// else alert(n+" is NOT found in my array") 

//Cau 8 You are a shepherd who owns a flock of sheep
// let shsize=[11,20,123,334,32,12,76,88]

//8.1
// console.log("8.1 Hello, my sheep size is here:")
// console.log(...shsize)

//8.2
// console.log("8.2 Now my biggest sheep has size "+Math.max(...shsize)+", let's shave it")

//8.3
// let i =shsize.indexOf(Math.max(...shsize))
// shsize[i] =(8)
// console.log("8.3 After shaering, here is my flock")
// console.log(...shsize)

//8.4
// console.log(`8.4 Month 1\nOne month has passed, my sheep had grown, here are their size`)
// for(let j =0;j<shsize.length;j++){
//     shsize[j]+=50
// }
// console.log(...shsize)
// console.log("Now my biggest sheep has size "+Math.max(...shsize)+", let's shave it")
// shsize[i] =(8)
// console.log("After shaering, here is my flock")
// console.log(...shsize)

//8.5
// for( jj= 2;jj<5;jj++){
//     console.log(`Month ${jj}\nOne month has passed, my sheep had grown, here are their size`)
//     for(j =0;j<shsize.length;j++){
//         shsize[j]+=50
//     }
//     i =shsize.indexOf(Math.max(...shsize))
//     console.log(...shsize)
//     console.log("Now my biggest sheep has size "+Math.max(...shsize)+", let's shave it")
//     shsize[i] =(8)
//     console.log("After shaering, here is my flock")
//     console.log(...shsize)}

// let a = 0
// for(j=0;j<shsize.length;j++){
//     a+=shsize[j]}
// console.log("My flock has size in total "+a)
// console.log("I would get "+ a+" * 2$ = "+a*2+"$")//8.6

//Cau 10 (Optional) Write a script asking users to enter a sequence of names, separated by
//commas (,), Create a new array containing the names, each surrounded with &lt;&gt;. If you
//need hints, find them at the end of this homework

// let name = prompt("Enter a sequence of names")
// let array = name.split(",")
// let array1 = ["=>"]
// for (let i =0; i< array.length;i++){
//     array1.push("<"+array[i]+">")}
// array1.splice(0,0,...array)
// console.log(array1)

//Cau 11 (Optional) Write a script asking users to enter a sequence of Numbers, separated by
//commas (,). Create a new array containing only the odd Numbers of the entered
//sequence. If you need hints, they are at the end of this homework

// let Num =prompt("Enter a sequence number")
// let array = Num.split(",")
// for(let i=0;i<array.length;i++){
//     array[i]=Number(array[i])
// }
// console.log(array)
// let n = array.filter(x =>x%2!=0)
// console.log(array + "=>"+n)




