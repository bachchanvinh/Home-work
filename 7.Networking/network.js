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
    <td><button class="btn_remove">X</button><button class="btn_update">U</button></td>
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
    <td><button class="btn_remove">X</button><button class="btn_update">U</button></td>
    </tr>`)
    inputpro.value = ""
    inputtas.value = ""
    inputtim.value = ""
    inputpro.focus()
    addevent(btnrem, x)
    addevent(btnupd, place)
}
inputtim.addEventListener('keyup', (a) => {
    if (a.key == `Enter` && btnadd.textContent == "Add") {
        add()
    }
    else if (a.key == `Enter` && btnadd.textContent == "Update") {
        upd()
    }

})
btnadd.addEventListener('click', () => {
    if (btnadd.textContent == "Add") {
        add()
    }
    else if (btnadd.textContent == "Update") {
        upd()
    }
})
//---------------------------------REMOVE------------------------
let btnrem = document.getElementsByClassName("btn_remove")
console.log(btnrem)
function x(e) {
    timeSheetData.splice(e.target.id, 1)
    e.target.parentElement.parentElement.remove()
    console.log(timeSheetData)
    removeevent(btnrem, x)
    addevent(btnrem, x)
    removeevent(btnupd, place)
    addevent(btnupd, place)
}
function addevent(btn, func) {
    for (let i = 0; i < btn.length; i++) {
        btn[i].id = i
        btn[i].addEventListener('click', func)
    }
}
function removeevent(btn, func) {
    for (let i = 0; i < btn.length; i++) {
        btn[i].removeEventListener(`click`, func)
    }
}
addevent(btnrem, x)
//----------------------Update--------------------------------
let btnclr = document.getElementById('btn_clr')
btnclr.addEventListener('click', () => {
    inputpro.value = ""
    inputtas.value = ""
    inputtim.value = ""
})


let btnupd = document.getElementsByClassName("btn_update")
console.log(btnadd)
let index = 0
function place(e) {
    btnadd.textContent = "Update"
    inputpro.value = timeSheetData[e.target.id].project
    inputtas.value = timeSheetData[e.target.id].task
    inputtim.value = timeSheetData[e.target.id].Timespent
    index = e.target.id
}
addevent(btnupd, place)
function upd() {
    timeSheetData[index] = {
        project: inputpro.value,
        task: inputtas.value,
        Timespent: inputtim.value
    }
    btnupd[index].parentElement.parentElement.innerHTML = `<tr>
    <td>${inputpro.value}</td>
    <td>${inputtas.value}</td>
    <td>${inputtim.value}</td>
    <td><button class="btn_remove">X</button><button class="btn_update">U</button></td>
    </tr>`
    removeevent(btnupd, place)
    addevent(btnupd, place)
    inputpro.value = ""
    inputtas.value = ""
    inputtim.value = ""
    btnadd.textContent = "Add"
}
