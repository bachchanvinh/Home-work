//01 Values, Types, Operators
//rad to degree//--------------------------------------------------------1
// function radiansToDegrees(rad){
//     return (180/3.14)* rad
// }
// console.log(radiansToDegrees(50))

//Celsius to Fahrenheit//---------------------------------------------------2
// function celsiusToFahrenheit(cel){
//     return cel*1.8+32
// }
// console.log(celsiusToFahrenheit(20))

//Pound to Kilogram//----------------------------------------------------3
// function PoundToKilogram (pound){
//     return pound*0.45359237
// }
// console.log(PoundToKilogram(80))

//Matchstick Houses//-------------------------------------------------------------4
// function matchHouses(num){
//     if(num==0){return 0}
//     return num*5+1
// }
// console.log(matchHouses(87))

//Sum of Cubes//-----------------------------------------------------------------5
// function sumOfCubes(cube1,cube2,cube3){
//    if(cube1==cube2&&cube2==cube3){
//        return cube1**3
//    }
//    else if(cube1==cube3||cube2==cube3){
//        return cube1**3+cube2**3
//    }
//    else if (cube1==cube2){
//     return cube1**3+cube3**3
//    }
//     return cube1**3+cube2**3+cube3**3
// }
// console.log(sumOfCubes(3,4,5))

//Pythagorean Triplet//-------------------------------------------------6
// function isTriplet(inter1,inter2,inter3){
//     let arr1=[inter1,inter2,inter3]
//     let arr2=[]
//     let max = Math.max(...arr1)
//     arr2.push(arr1[arr1.indexOf(max)])
//     arr1.splice(arr1.indexOf(max),1)
//     let a = arr1[0]**2+arr1[1]**2
//     let b = arr2[0]**2
//     if(a==b){
//         return true
//     }
//     return false
// }
// console.log(isTriplet(1,2,3))

//Last Digit Ultimate//--------------------------------------------------7
// function lastDig(digit1,digit2,digit3){
//   let fir=digit1.toString()
//   let sec = digit2.toString()
//   let thir = digit3.toString()
//   fir = Number(fir.substr(-1,1))
//   sec= Number(sec.substr(-1,1))
//   thir=Number(thir.substr(-1,1))
//   if(fir*sec==thir){
//       return true
//   }
//   return false
// }
// console.log(lastDig(25,21,-125))

//Automorphic Numbers//---------------------------------------------------8
// function isAutomorphic(num){
//     let checknum = num**2
//     let numstr=num.toString()
//     checknum=checknum.toString().substr(-numstr.length)
//    if(checknum==numstr){
//        return true
//    }
//    return false
// }
// console.log(isAutomorphic(5))

//BMI calculator//-------------------------------------------------------------9
// function BMI(hei,wei){
// let bmi=wei/((hei/100)**2)
// console.log(bmi)
// if(bmi<=15){
//     return "Very Underweight"
// }
// else if(bmi<=16){
//     return "Severely Underweight"
// }
// else if(bmi<=18.5){
//     return "Underweight"
// }
// else if(bmi<=25){
//     return "normal"
// }
// else if(bmi<=30){
//     return "Overweight"
// }
// else if(bmi<=35){
//     return "Obese class I"
// }
// else if(bmi<=40){
//     return "Obese class II"
// }
// else return "Obese class III"
// }
// console.log(BMI(165,57))