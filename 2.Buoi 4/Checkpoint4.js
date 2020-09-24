//Init

// let movie ={
//     title: `The dark night rises`,
//     year: 2012,
//     rate: 8.4
// }
//Read
// console.log(movie.title)
// let a = 'title'
// console.log(movie[a])
// console.log(movie.aa)//undefined

// let x = prompt("What do you want to know?")

// while(true){
//     if(movie[x]!=undefined){
//         alert(movie[x])
//     }
//     else alert(`'${x}' does not exist in our data`)
//     x = prompt("What do you want to know?")
// }

//Update
// movie.rate = 8.7
// console.log(movie)
// movie.rate += 0.5
// console.log(movie)
// let x = prompt("What do you want to update")
// if(x==undefined){x = prompt("Please type the one we have")}
// let y = prompt("What is the update")
// movie[x]=y
// console.log(movie)

//Create

// let x = prompt("What do you want to update")
// console.log(x)
// console.log(movie)
// if(movie[x]==undefined){x =prompt("Doest not exist, add now")

// let y =prompt("Enter the new data")
// movie[x] = y
// console.log(movie)}

//Array of Objects

// let a = {title: "Im the one",
//      year: 2000,
//      rate: 5.0}
// let b = {title: "Im the two",
// year: 2011,
// rate: 3.0}
// let c = {title: "Im the three",
// year: 2021,
// rate: 9.0}
// let movies =[a,b,c]

// console.log(movies[0])
// console.log(movies[2]) 
// for(let i = 0; i< movies.length; i++)
// {
//     console.log(movies[i])
// }
// for(i = 0; i<movies.length;i++){
//     console.log("---------------------")
//     console.log(movies[i].title+`\nYear: `+movies[i].year+`\nRate: `+movies[i].rate)
// }
// movies[2].rate+=0.7
// console.log(movies[2].rate)

//Object containing array
// let movie = {
//     title:"Im the One",
//     year: 2000,
//     rate:5.0,
//     characters:["Rick","Nick","Bella"]
// }

// console.log(`${movie.title}\nYear: ${movie.year}\nRate: ${movie.rate}`)
// console.log("Caster:", ...movie.characters);

// movie.characters.push("NickyChan")
// console.log(`${movie.title}\nYear: ${movie.year}`)
// console.log("Caster:", ...movie.characters);

//Object and Array mix structure
// let movie = [{
//     title:"Im the One",
//     year: 2000,
//     rate:5.0,
//     characters:["Rick","Nick","Bella"]},
//     {
//     title:"Im the Two",
//     year: 2002,
//     rate:7.0,
//     characters:["Hai","Then","Mot"]},
//     {
//     title:"Im the Three",
//     year: 2003,
//     rate:9.0,
//     characters:["KKKK","Alpha","One"]    
//     }
// ]
// for(let i =0; i<movie.length;i++){
//     console.log("----------------")
//     console.log(`${movie[i].title}\nYear: ${movie[i].year}\nRate: ${movie[i].rate}`)
//     console.log("Cast:",...movie[i].characters)
// }

