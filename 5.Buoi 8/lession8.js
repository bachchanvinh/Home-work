//Bai con cuu
// //8.1
// let sheep = [5,7,300,90,24,50,75]

// console.log("Hello, my name is Vinh and here is my sheep sizes:\n",...sheep)
// //8.2 In con map nhat
// let maxsize =Math.max(...sheep)
// console.log("Now my biggest sheep has size",maxsize,", let's shave it")
// //8.3 Cao long con map nhat
// function caolong(max){
//     sheep[sheep.indexOf(max)]=8
//     console.log("Afer shearing, here is my flock\n",...sheep)
// }
// caolong(maxsize)
// //8.4  Thang 1
// function quamotthang(flock,thang){
// for(let i=0;i<flock.length;i++){
//     flock[i]=flock[i]+50
// }
// console.log("Month ",`${thang}`)
// console.log("One month has passed, my sheeps have grown, here are their sizes \n",...sheep)
// }
// quamotthang(sheep,1)
// //8.5 sau 5s se qua 1 thang 
// // --------------------Dung setInterval---------------------------
// let month = 6
// let count = 2
// function incuu(){
//     if(month==2){
//         clearInterval(b)
//     }
//     else{
//         month--
//         console.log("___________________________________________________________________")
//         quamotthang(sheep,count)
//         console.log("Now my biggest sheep has size",Math.max(...sheep),", let's shave it")
//         caolong(Math.max(...sheep))
//         count++
//     }
// }
// let b = setInterval(function(){incuu()},5000)

////--------------------Dung setTimeout---------------------------
// let n = 4
// let seconds =5000
// let month=1
// for(i=0;i<n;i++){
//     setTimeout(function(){
//         console.log("___________________________________________________")
//         quamotthang(sheep,month+=1)
//         console.log("Now my biggest sheep has size",Math.max(...sheep),", let's shave it")
//        caolong(Math.max(...sheep))
//     },seconds)
//     seconds+=5000
// }



////_____________________________________________________________________________________________________



//Bai tap xoa dau $$$$$
// function removeDollarsign(text){
//     let string = text
//     let arr =string.split("")
//     for(let i =arr.length;i>-1;i--){
//         if(arr[i]=="$"){
//             arr.splice(i,1)
//         }
//     }
//     string=arr.join("")
//     return string
// };
// console.log(removeDollarsign(`$80% precent of $life is to show $up`))

////______________________________________________________________________________________________________

//Bai tap tim chu dai nhat trong string

// function longestword(text){
//     let string =text
//     let arr = string.split(" ")
//     let wlength =[]
//     for(let i =0;i<arr.length;i++){
//         wlength.push(arr[i].length)
//     }   
//     for(i=wlength.length;i>-1;i--){
//         if(wlength[i]!=Math.max(...wlength)){
//           arr.splice(i,1)
//         }
//     }
//     return arr
// }
// console.log(...longestword("Web Development Tutorial"))
// console.log(...longestword("Vinh dep trai nhat nhe haha"))

////______________________________________________________________________________________________________




