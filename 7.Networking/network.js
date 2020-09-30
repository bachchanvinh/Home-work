// let url = 'https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json'
// fetch(url).then(function (item) {
//     return item.json()
// }).then(function (datas) {
//     console.log(datas)
//     let btn = document.getElementById("btn")
//     btn.addEventListener(`click`, () => {
//         let quotetext = document.getElementById("text")
//         let aut = document.getElementById("author")
//         let data = datas[Math.floor(Math.random() * datas.length)]
//         console.log(data)
//         quotetext.textContent= data.quoteText
//         console.log(quotetext)
//         aut.textContent=data.quoteAuthor
//     })
// })
//----------------------------------------------------------------------------

let timeSheetData = [{
    project: 'Learn font-end',
    task: 'Learn HTML',
    Timespent: '6'
}, {
    project: 'Learn font-end',
    task: 'Learn CSS',
    Timespent: '8'
}, {
    project: 'Learn font-end',
    task: 'Learn JS Variables and Data Types',
    Timespent: '6'
}, {
    project: 'Learn git',
    task: 'Learn git basics',
    Timespent: '2'
},]
console.log(timeSheetData)
//read table
let tablebody = document.getElementById('body')
console.log(tablebody)
for (let i = 0; i < timeSheetData.length; i++) {
    tablebody.insertAdjacentHTML('beforeend', `<tr>
    <td>${timeSheetData[i].project}</td>
    <td>${timeSheetData[i].task}</td>
    <td>${timeSheetData[i].Timespent}</td>
    <td><button class="btn_remove">X</button></td>
    </tr>`)
}
document.getElementById("remove1").remove()
//------------------------------------add button-----------
let inputpro = document.getElementById("input_project")
let inputtas = document.getElementById("input_task")
let inputtim = document.getElementById("input_timespent")
let btnadd = document.getElementById("btn_add")
console.log(inputpro)
console.log(inputtas)
console.log(btnadd)
function add() {
    timeSheetData.push({
        project: inputpro.value,
        task: inputtas.value,
        Timespent: inputtim.value,
    })
    console.log(timeSheetData)
    tablebody.insertAdjacentHTML('beforeend', `<tr>
    <td>${inputpro.value}</td>
    <td>${inputtas.value}</td>
    <td>${inputtim.value}</td>
    <td><button class="btn_remove">X</button></td>
    </tr>`)
    inputpro.value = ""
    inputtas.value = ""
    inputtim.value = ""
    inputpro.focus()
}
inputtim.addEventListener('keyup' || 'click', (a) => {
    if (a.key == `Enter`) {
        add()
    }
})
btnadd.addEventListener('click', () => {
    add()
})
//---------------------------------REMOVE------------------------
let btnrem = document.getElementsByClassName("btn_remove")
console.log(btnrem)
function x(e) {
    console.log(e.target.parentElement)
    e.target.parentElement.parentElement.remove()
    timeSheetData.splice(e.target.id, 1)
    console.log(timeSheetData)
    removecallback()
    removeadd()
}
function removeadd() {
    for (let i = 0; i < btnrem.length; i++) {
        btnrem[i].id=i
        btnrem[i].addEventListener('click', x)    
    }
}
removeadd()

function removecallback() {
    for (let i = 0; i < btnrem.length; i++) {
        btnrem[i].removeEventListener(`click`,x)
    }
}
