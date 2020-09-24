// //Init
//let phim =["Iron man", "Spiderman", "Captain America", "Thor"]
// console.log(phim)

//Create
// let x =prompt("New movie")
// phim.push(x)
// console.log(phim)

// //Read
// let phimso=prompt("Phim thu may?")
// console.log(phim[phimso-1])

//Update
// let update = prompt("Nhap ten phim thay doi")
// phim[0]=update
// console.log(phim)
// update =  prompt("Nhap ten phim thay doi")
// let i = prompt("Phim thu may")
// phim[i-1]=update
// console.log(phim)

//Delete
// let delete1= Number(prompt("Phim thu may bi xoa"))

// phim.splice(delete1-1,1)
// console.log(phim)

// let delete2=Number(prompt("Phim thu may bi xoa"))
// n=Number(prompt("May phim bi xoa"))
// phim.splice(delete2-1,n)
// console.log(phim)

//Read all
//1
// let x  =phim.length

// for(let i= 0;i<x;i++){
//     console.log(phim[i])
// }
// console.log("")
// //2 
// x = phim.length/2
// for(i= 0;i<x;i++){
//     console.log(phim[i])
// }
// console.log("")
// //3
// x  =phim.length

// for(i= 0;i<x;i++){
//     console.log(i+1+"."+phim[i])
// }

//Update all

// for(let i =0; i<phim.length;i++){
//     phim[i]= phim[i].toLowerCase()
// }
// console.log(phim)

//Purpose of while
//Cau 1

// let username = prompt("Nhap username")
// let x = 1

// while (x==1){
//     if(username.length>15){
//         alert("Your username is too long")
//         username = prompt("Nhap lai username")
//     }
//     else{x=0}
// }

// Cau 2

// let a = ['None', '4 legs', '8 legs', '12 legs']
// let b = [1,2,3,4]
// let c = 0
// alert (`How many legs does the spider have?\n1. ${a[0]} \n2. ${a[1]}\n3. ${a[2]}\n4. ${a[3]}`)
// let x = Number(prompt("Choose number: "))
// console.log()
// while(c==0){
// for (let i =0;i<4;i++){
//     let e = b[i]
//     console.log(e)
//     if(e ==x){
//      c = 1  
//     break}}
// if(c==0){ x = Number(prompt("Your answer is invalid, please choose one number from 1 to 4"))
// }}
// if(x==3){alert("Bravo, you're correct")}
// else{alert("Good luck next time")}

//Bai tap them

// let a =[]
// let n = Number(prompt("Ban se nhap may so nguyen"))
// let x= 0
// while(x==0){
//     if(Number.isInteger(n)&&n>=0){break}
//     n= Number(prompt("Yeu cau nhap so nguyen"))
// }
// for(let i = 0;i < n;i++){
//     let A = Number(prompt(`Nhap so nguyen thu ${i+1}`))
//     while(x==0){
//         if(Number.isInteger(A)){break}
//            A = Number(prompt("Yeu cau nhap so nguyenn"))
//     }
//     a.push(A)
// }
// console.log(a)
// // // cau a
// for(let i = 0; i<n;i++){
//     for(let ii = i+1;ii<n;ii++){
//         if(a[i]>a[ii]){
//             x=a[ii]
//             a[ii]=a[i]
//             a[i]=x
//         }
//     }
// }
// console.log(`Cau a \n ${a}`)
// // cau b
// let b1=[]
// let b2=[]
// for (i=0; i<n;i++){
//     if(a[i]%2==0){
//         b1.push(a[i])
//     }
//     else b2.push(a[i])
// }    
// console.log(`Cau b \n ${b1} \n ${b2}`)

// // cau c
// let j =0
// for(i=0;i<b1.length;i++){
//     for(let ii=i+1;ii<b1.length;ii++){       
//        if(b1[i]==b1[ii]){
//            j++
//        }
// }
// b1.splice(i+1,j)
// j=0
// }
// console.log(`Cau c \n So chan ${b1}`)

// for(i=0;i<b2.length;i++){
//     for(let ii=i+1;ii<b2.length;ii++){       
//        if(b2[i]==b2[ii]){
//            j++
//        }
// }
// b2.splice(i+1,j)
// j=0
// }
// console.log(`Cau c \n So le ${b2}`)


