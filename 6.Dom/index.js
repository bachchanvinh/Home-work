//1.insertAdjacentHTML
// const container=document.getElementById(`list`);
// for (let i=0;i<3;i++){
//     container.insertAdjacentHTML("afterend",`<li>${i}</li>`)
// }
//1:D
//2:A
//3:C
//4:B
//--------------------------------------------------

//2.Instead of using setTimeOut to create a timer, we can use setInterval for shorter
// code
// let a =1
//  setInterval(function(){
//       console.log(a)
//     a++
//  },1000)
//----------------------------------------------------

//3.
//3.1 Can a variable declared by let, in a function still exists after the function
// finishes running?
// ----------> No

//3.2 Can var variable declared by var, in a function still exists after the
// function finishes running?
// ----------> No
//----------------------------------------------------

//4.Use getElementsByTagName function to get ALL of the &lt;li&gt; tag. Print/log out the first
// element (which is &lt;li&gt;Articles&lt;/li&gt;) and then use for loop to print ALL of the
// DOM you get from the function.

// let li= document.getElementsByTagName("li")
// console.log(li[0])
// for(let i=0;i<3;i++){
//     console.log(li[i])
// }
//----------------------------------------------------

//5. Use getElementsByTagName function to get ALL of the &lt;div&gt; tag. Print/log out the
// second element (which is &lt;div class=”singer”&gt;Nate Ruess&lt;/div&gt;) and then
// use for loop to print ALL of the DOM you get from the function.

// let classname= document.getElementsByClassName("singer")
// console.log(classname[1])
// for(let i=0;i<5;i++){
//     console.log(classname[i])
// }
//----------------------------------------------------

//6. Learn how to remove (Delete) an HTMLElement using HTMLElement.remove()
// function, refer to this

// document.getElementsByClassName("singer")[1].remove()
//----------------------------------------------------

//7.AI
// console.log(document.getElementById("button1"))
// document.getElementById("button2").addEventListener(`keydown`, (e) => {
//     console.log(e.key)
//     });
//7.1 Catch ‘click’ event from 2 different buttons, id=”button1” and
// id=”button2”, in the callback body of the 2 events, print, or log out e.target.
// What is it?
// ------->    In ra vị trí của button người dùng bấm 

//7.2 Catch a ‘keydown’ event from an input, in the callback body of the
// event, print / log out the e.key. What is it?
// ------->    In ra ký tự nhập vào input
//----------------------------------------------------

//8  Write a function, using alert to show your name and one thing you wish to do this year

//alert(Vinh 2021)
//----------------------------------------------------

//9 Write a function, using alert to show user’s name and one wish of the user this year,
// name and wish are function parameters

// function name(){
//     return prompt("name")
// }
// function wish(){
//     return prompt("wish")
// }
// function aler (callback1,callback2){
//    return  alert(callback1()+callback2())
// }
// aler(name,wish)
//----------------------------------------------------

//10  Write a function, using alert to show user’s name and one wish of the user in this year,
// name and wish are function parameters. Handle the case of missing wish in
// function parameters

// function name(){
//     return prompt("name")
// }
// function wish(){
//     let a=[]
//     let n =Number(prompt("n Wish"))
//     for(let i=0;i<n;i++){
//         a[i]=prompt("Wish "+(i+1))
//     }
//     return a[Math.floor(n*Math.random())]
// }
// function aler (callback1,callback2){
//    return  alert(callback1()+callback2())
// }
// aler(name,wish)
//----------------------------------------------------

// //11 UI
// //11.2 Read Upper it
// let upper=document.getElementById("button")
// console.log(upper)

// //11.3 Catch event when Upper it is clicked
// let evenupper = upper.addEventListener('click',(e)=>{
//     console.log(e.target)
// })

// //11.4 Get (Read) ‘Enter your name’ input
// let input = document.getElementById("input")
// console.log(input)

// //11.5 Get (Read) user name from the input
// let username=""
// function readuser(){
//     username = input.value
//      return username
// }
// //11.6 Convert User's name to uppercase
// let x=""
// function upuser(text){
//     text=text.toUpperCase()
//     return x=text
// }
// //11.7 Get (Read) the ‘Your result will appear here’ tag
// let result=document.getElementById("res")
// console.log(result)

// //11.8 Update the ‘Your result will appear here’ to the username
// // uppercase version
// function showres(callback1,callback2){
//     callback1(callback2())
//     result.textContent = x
// }
//  upper.addEventListener(`click`,()=>{
//  showres(upuser,readuser)
//  })
//----------------------------------------------------

 //12 Take a look at a list of belongings
 //12.1 In JS, Initialize a variable named items to store the data above, log/print
//it out
let items = [`Backpack`, `MiBand watch`, `Ring`]
console.log(items)

// 12.2. In HTML, create an <ul> with some test items. If you have not worked
// with unordered list before, watch the ‘HTML - List and Table’ video or see this
// quick example.

//12.3 Get (Read) the list from DOM
let list =document.getElementById("listitem")
console.log(list)

//12.4 Show ALL of the data in items, each item is a <li> tag
for(let i=0;i<items.length;i++){
list.insertAdjacentHTML(`beforeend`,`<li>${items[i]}<button class="rebtn">Remove</button></li>`)
}
list.getElementsByTagName("li")[0].remove()
list.getElementsByTagName("li")[0].remove()

//12.5 Update the UI (HTML) as follows:
// 12.6. Get the ‘New item’ input and ‘Add’ button
let input=document.getElementById("item_input")
let add=document.getElementById("add_btn")
console.log(input)
console.log(add)
// 12.7. 12.8 12.9  12.10 12.11Register ‘Add‘ button click event and When ‘Add’ button is clicked, the value of ‘New item’ input
function add_btn(){
    add.addEventListener('click', () => {
        let inputvalue = input.value
        items.push(inputvalue)
        console.log(items)
        list.insertAdjacentHTML(`beforeend`, `<li>${inputvalue}<button class="rebtn">Remove</button></li>`)
        input.value = ""
        remove_btn()
    })
}
add_btn()

// 12.14 12.15 Each time a ‘remove’ button clicked, identify the index of the clicked item
let removebutton
function remove_btn(){
   removebutton=document.getElementsByClassName("rebtn")
    for (let i=0; i < removebutton.length; i++) {
        removebutton[i].addEventListener(`click`, () => {
            console.log(i)
        })
    }
}
//chua lam duoc phan remove