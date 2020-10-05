const url = "https://pokeapi.co/api/v2/pokemon"

let datas = []
let html = []
let pokemon = document.getElementsByClassName("pokemon")
let body = document.getElementById("body")
async function getData() {
    for (i = 1; i < 55; i++) {
        const response = await fetch(url + `/${i}`)
        var data = await response.json()
        datas.push(data)
    }
    console.log(datas)
    creatMembers(datas)
    //  console.log(html)
    body.insertAdjacentHTML('beforeend', html.join(""))
    addeventhinh(datas)
}
getData()

function creatMembers(lists_member) {
    for (i = 0; i < lists_member.length; i++) {
        html.push(
            `
    <div class="pokemon">
            <img class ="hinh" id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${lists_member[i].id}.png">
            <p>Name: ${lists_member[i].name} </p>
            <p>Order: ${lists_member[i].order}</p>
            <p>Type: ${lists_member[i].types[0].type.name}</p>

        </div>
    `)
    }
}
let hinh = document.getElementsByClassName("hinh")

function addeventhinh(lists_member) {
    for (let i = 0; i < hinh.length; i++) {
        hinh[i].addEventListener(`click`, (e) => {
            body.textContent = ""
            console.log(e.target.parentElement)
            body.insertAdjacentHTML(`beforeend`,
                `
            <div class="pokemon">
                    <img class ="hinh" id="${e.target.id}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${lists_member[i].id}.png">
                    <p>Name: ${lists_member[e.target.id].name} </p>
                    <p>Order: ${lists_member[e.target.id].order}</p>
                    <p>Type: ${lists_member[e.target.id].types[0].type.name}</p>
                    <p>Weight: ${lists_member[e.target.id].weight} Kg</p>
                    <p>Skill: ${lists_member[e.target.id].abilities[0].ability.name}
                </div>
            `
            )
        })
    }
}

let back = document.getElementById("back")
back.addEventListener(`click`, () => {
    html = []
    body.textContent = ""
    datas = []
    getData()
})

let input = document.getElementById("inputname")
let find = document.getElementById("find")
find.addEventListener('click', () => {
    let arrayfind = datas.map(function (x, index) {
        if (input.value == x.name) {
            return {
                namefind: x.name,
                idfind: index
            }
        }
        else return ""
    })
    console.log(arrayfind[3] != "")
    for (let i = arrayfind.length - 1; i > 0; i--) {
        if (arrayfind[i] != "") {
            arrayfind = arrayfind[i]
            break
        }
    }
    body.textContent = ""
    body.insertAdjacentHTML(`beforeend`,
        `
    <div class="pokemon">
            <img class ="hinh" id="${arrayfind.idfind}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${arrayfind.idfind + 1}.png">
            <p>Name: ${datas[arrayfind.idfind].name} </p>
            <p>Order: ${datas[arrayfind.idfind].order}</p>
            <p>Type: ${datas[arrayfind.idfind].types[0].type.name}</p>
            <p>Weight: ${datas[arrayfind.idfind].weight} Kg</p>
            <p>Skill: ${datas[arrayfind.idfind].abilities[0].ability.name}
        </div>
    `)
})
