import { robots } from "./robots.js";

console.log(robots[0].series);
console.log(robots[0].id);
console.log(robots[0].name);


const {series, id, name} = robots[0];

console.log("-------------------");
console.log(`La serie es: ${series}`);
console.log(`El id es: ${id}`);
console.log(`El nombre es: ${name}`);

const getrobotbyid = (id='013') =>{
    return robots.find((robot) =>{
        return robot.id === id;
    })
}


console.log(getrobotbyid('012'));


// function getrobotbyid(id){
//     return robots.find(function(robot){
//         return robot.id === id;
//     })
// }


let robot= getrobotbyid("002")
// console.log(robot);
// console.log(getrobotbyid('003'));



// const getrobotsbyseries = (series=1)=>{
//     return robots.filter((robot)=>{
//         return robot.series===series
//     })
// }


// console.log(getrobotsbyseries(2));


function getrobotsbyseries(series){
        return robots.filter(function(robot){
             return robot.series === series;
       });
}

robot = getrobotsbyseries(2);
console.table(robot);


const createCard = (series,id,name,weapon,avatar,sprit1)=>{
    return`
    <div class="col-lg-4 col-md-4 col-sm-12">
    <div class="card">
        <img src="${avatar}" class="card-img-top" alt="${name}">
        <img src="$sprite1" class="card-img-top mt-1 w-50" alt="${name}">
        <div class="card-body">
        <h5 class="card-tittle">${name}</h5>
        <p>${series}</p>
        <p>${weapon}</p>
        </div>
    </div>
    </div>
    `;
}



const robotCardsRow = document.getElementById('robotCardsRow');
    robots.map( (robot) =>{
        const card = createCard(robot.series,robot.id,robot.name,robot.weapon,robot.avatar,robot.sprite1)
        robotCardsRow.innerHTML += card;
    });