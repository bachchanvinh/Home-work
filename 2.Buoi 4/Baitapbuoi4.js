//1 for and Object
// const product={
//     name: `Xiaomi rice cooker`,
//     price: 1700,
//     brand: `Xiaomi`,
//     color: `white`,
// };
// // for (let x in product){
// //     console.log(x)
// //     console.log(typeof(x))
// // }
// //1.1 The x receives from product is a string that name of property
// //1.2 Use the for loop to print/log out the following output
// for (let x in product){
//     console.log(x+": "+product[x])
// }


//2  Learn about destructuring object in the following tutorials:
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };
// let {subject,dueDate,assignTo}= task
// console.log(subject,dueDate,assignTo)


//3 Here is the actual data from a job search site, copy all of the data, assign it to a variable
//or a constant named jobSearch in your code. Log or print it out to see its structure then
//answer the following questions:
//3.1 It is Object
//3.2 Hits is an Array
//3.3 Xem o dong cuoi cua Databai3.js

//4.1 Dictionary
// let dic={debug:"The process of figuring out why your program has a certain error and how to fix it",
//         done:"When your task is complete, the only thing you have to do is wait for users to use it (No additional codes or action needed",
//         defect:"To formal word for 'error'",
//         pm:"The short version of Project Manager, the person in charge of the final result of a project",
//         "ui/ux":"UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
// }
// let a =0
// alert("Hi there, this is dev dictionary")
// while(true){
//     let x = prompt("Enter a key word")
//     for(let pro in dic){
//     if(x == pro){
//         alert(x+"\n"+dic[pro]) 
//     a=1}
//     }
//     if(a==0){ alert("We could not find your word: "+x)}
//     a=0
// }

//4.2
// let dic={debug:"The process of figuring out why your program has a certain error and how to fix it",
//         done:"When your task is complete, the only thing you have to do is wait for users to use it (No additional codes or action needed",
//         defect:"To formal word for 'error'",
//         pm:"The short version of Project Manager, the person in charge of the final result of a project",
//         "ui/ux":"UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
// }
// let a =0
// alert("Hi there, this is dev dictionary")
// while(true){
//     let x = prompt("Enter a key word")
//     for(let pro in dic){
//     if(x == pro){
//         alert(x+"\n"+dic[pro]) 
//     a=1}
//     }
//     if(a==0){ y =prompt ("We could not find your word: "+x+", leave your explaination")
//     dic[x] = y
// alert("Done")}
//     a=0
// }

//5 Initialize a variable named products, containing an array of products, each product has a
//name, price, brand, category, and color

// let dt={
//     name:[`Xiaomi portable charger 20000mah`,`VSmart Active 1`,`IPhone X`,`Samsung Galaxy A9`],
//     brand:[`Xiaomi`,`Vsmart`,`Apple`,`Samsung`],
//     price:[428,5487,21490,8490],
//     color:[`white`,`black`,`grey`,`blue`],
//     category:[`Charge`,`Phone`,`Phone`,`Phone`]
// }
//5.1 
// for(let i=0;i<dt.name.length;i++){
// console.log(`-----------`)
// console.log(`Name: `+dt.name[i])
// console.log(`Price: `+ dt.price[i])
// }

//5.2
// for(let i=0;i<dt.name.length;i++){
//     console.log(`#${i+1}. `+dt.name[i])
//     console.log(`Price: `+ dt.price[i])
//     }
// let x =prompt("Enter product position")
// for(let pro in dt){
//     console.log(pro+": "+dt[pro][x-1])
// }

//5.3
// while(true){
// let x = prompt(`Enter your category`)
// let n =0
// let y = dt.category.indexOf(x)
// if(y>-1){
// for(let i =0;i<dt.category.length;i++){
// y = dt.category.indexOf(x,n)
//  if(y==-1){break}
// console.log(`--------------`)
// console.log(`Name: ${dt.name[y]}\nPrice: ${dt.price[y]}`)
// n = y+1
// }}
// else{alert("No")}
// }

//5.4
//dt.providers=[[`Phukienzero`,`Dientuccc`],[`Tgdd`,`Ddghn`,`VhStore`],["Tgdd"],["Tgdd"]]
// for(let i=0;i<dt.name.length;i++){
//     console.log(`#${i+1}. `+dt.name[i])
//     console.log(`Price: `+ dt.price[i])
//     console.log("Providers:",...dt.providers[i])
//     }

//5.5
// while(true){
// let x = prompt(`Enter your provider`)
// let n =0
// let aa =dt.providers
// for(ii=0;ii<aa.length;ii++){
//     y = aa[ii].indexOf(x)
// if(y>-1){
//     console.log(`------------------`)
// for(let a in dt){
//     console.log(a+": "+dt[a][ii])
//     n=1
// }}
// }
// if(n==0){alert("Wrong")}}
//______________________________________________________________________________________________________
//6.1
// let ob={
//     prog:[`HTML`,`CSS`,`Basic of JavasScript`,`Node package Manager (npm)`,`Git`],
//     Complete:[`False`,`False`,`False`,`False`,`False`]
// }
// let {prog,Complete}=ob
// for(let i =0;i<ob.prog.length;i++){
//     console.log(`${i+1}. ${ob.prog[i]}`)
//     console.log("Complete: "+ob.Complete[i])
// }console.log(`--------------------------------------`)
// while(true){let x = prompt("Enter your command (New, Delete, Update, Complete):").toLowerCase()
// let j=0
// //6.2 New
// while(j==0){if(x=="new"){
//     let a =prompt("Enter the new task: ")
//     prog.push(a)
//     Complete.push("False")
//     j=1
// }
// //6.3 Update
// else if(x=="update"){
//     let a=prompt("Enter position:")
//     let b=prompt("Enter new title")
//     prog[a-1]=b
//     j=1
// }
// //6.4 Complete
// else if(x=="complete"){
//     let a=prompt("Enter position:")
//     Complete[a-1]="True"
//     j=1
// }
// //6.5 Delete
// else if(x=="delete"){
//     let a=Number(prompt("Enter position:"))
//     prog.splice(a-1)
//     Complete.splice(a-1)
//     j=1
// }
// else(x=prompt("Please enter again").toLowerCase())}
// for(let i =0;i<ob.prog.length;i++){
//     x=""
//     if(Complete[i]=="True"){x="x"}
//     console.log(`${i+1}. [${x}] ${ob.prog[i]}`)
// }console.log(`--------------------------------------`)}
//______________________________________________________________________________________________________

//7
// const pos = {
// x: 200,
// y: 50,
// }
// penup()
// rt(90)
// fd(pos.x)
// lt(90)
// fd(pos.y)
//______________________________________________________________________________________________________

//8 
// 8
// const square = {
// x: 100,
// y: 50,
// width: 20,
// };
// penup()
// rt(90)
// fd(square.x)
// lt(90)
// fd(square.y)
// pendown()
// for(i=0;i<4;i++){
//   fd(20)
//   rt(90)}
//______________________________________________________________________________________________________
//9
// const rect = {
// x: 100,
// y: 50,
// width: 20,
// height: 40,
// };
// penup()
// rt(90)
// fd(rect.x)
// lt(90)
// fd(rect.y)
// pendown()
// for(i=0;i<2;i++){
// fd(40)
// rt(90)
// fd(20)
// rt(90)}
//______________________________________________________________________________________________________

//10
// clear()
// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ]
// for(let i=0;i<cmds.length;i++)
// {if(cmds[i].shape='square'){
//   penup()
//   rt(90)
//   fd(cmds[i].x)
//   lt(90)
//   fd(cmds[i].y)
//   pendown()
//  for(ii=0;ii<4;ii++){
//     fd(cmds[i].width)
//  	rt(90)}
//   penup()
// home()}
// if(cmds[i].shape='rect'){
//    penup()
//   rt(90)
//   fd(cmds[i].x)
//   lt(90)
//   fd(cmds[i].y)
//   pendown()
//  for(iii=0;iii<2;iii++){
//     fd(cmds[i].height)
//     rt(90)
//     fd(cmds[i].width)
//     rt(90)}
//    home()}}
//______________________________________________________________________________________________________

// 11.
// clear()
// const circle = {
// shape:'circle',
// x: 100,
// y: 50,
// radius: 30,
// };
// penup()
// rt(90)
// fd(circle.x)
// lt(90)
// fd(circle.y)
// pendown()
// i = 0
// while (i <360) {
//   fd(circle.radius*2*3.14/360)
//   lt(1)
//   i++
// }
//______________________________________________________________________________________________________
//12 
//const cmds = [
//     {
//         shape: 'circle',
//         x: 0,
//         y: -20,
//         radius: 60,
//     },
//     {
//         shape: 'circle',
//         x: 0,
//         y: 80,
//         radius: 40,
//     },
//     {
//         shape: 'circle',
//         x: -75,
//         y: 10,
//         radius: 20,
//     },
//       {
//         shape: 'circle',
//         x: 75,
//         y: 10,
//         radius: 20,
//     },
//     {
//         shape: 'square',
//         x: -65,
//         y: -100,
//         width: 30,
//     },
//       {
//         shape: 'square',
//         x: 38,
//         y: -100,
//         width: 30,
//     },
  
//   {
//         shape: 'rect',
//         x: -30,
//         y: 80,
//         width: 20,
//         height: 4
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 80,
//         width: 20,
//         height: 4
//     },
//       {
//         shape: 'rect',
//         x: -10,
//         y: 50,
//         width: 20,
//         height: 6
//     },
//   {
//         shape: 'square',
//         x: 500,
//         y: 500,
//         width: 20,
//     }]
// for(let i=0;i<cmds.length;i++)
// {if(cmds[i].shape='square'){
//   penup()
//   rt(90)
//   fd(cmds[i].x)
//   lt(90)
//   fd(cmds[i].y)
//   pendown()
//  for(ii=0;ii<4;ii++){
//     fd(cmds[i].width)
//  	rt(90)}
//   penup()
// home()}
// if(cmds[i].shape='rect'){
//    penup()
//   rt(90)
//   fd(cmds[i].x)
//   lt(90)
//   fd(cmds[i].y)
//   pendown()
//  for(iii=0;iii<2;iii++){
//     fd(cmds[i].height)
//     rt(90)
//     fd(cmds[i].width)
//     rt(90)}
//    home()}
// if(cmds[i].shape='circle'){
// penup()
// rt(90)
// fd(cmds[i].x)
// lt(90)
// fd(cmds[i].y)
// pendown()
// for(y=0;y<360;y++){
//   fd(cmds[i].radius*2*3.14/360)
//   lt(1)}
// home()}
//_____________________________________________________________________________________________________
//13
//14 Khong thay hien tuong gi xay ra
//_______________________________________________________________________________________________________