// Click event starting to roll dice, executes 'rollDice'
totalScore = 0 
let search = document.getElementById('roll')
    search.addEventListener('click', (event) => rollDice(event))

// rollDice creates HTML elements and displays random dice roll, then runs myRoundScore function
// to calculate score
const rollDice=()=>{
    let myDice = document.getElementById('mydice')
    newDice(myDice)
    let diceList = []

    for (let i = 0; i < 5; i ++){
        let dice = Math.ceil(Math.random() * 6) 
        diceList.push(dice)
    }
    let diceRoll = document.createElement('h2')
    console.log(diceRoll)
    diceRoll.innerText = `${diceList[0]}, ${diceList[1]}, ${diceList[2]}, ${diceList[3]}, ${diceList[4]}`
    myDice.appendChild(diceRoll)
    myRoundScore(diceList)
  }
  
// Calculates the results of the round.   
// 1's are worth 100 points
// 5's are worth 50 points
// Triple 1's are worth 1000
// triple 2-6's are worth the face value * 100 (2=200, 3=300, 6=600 ect)

const myRoundScore=(dice)=>{
let myScore = document.getElementById('roundscore')
let finalScore = document.getElementById('finalScore')
newDice(myScore)
const numDice ={
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
}

roundScore = 0

for (i = 0; i < 5; i++){
    numDice[dice[i]] += 1
}
for ([key, value] of Object.entries(numDice)){
    if (parseInt(key) === 1){
        if (value >= 3){
            roundScore += 1000
        }
        else {
            roundScore += 100
        }
    }
    else if (parseInt(key) === 2){
        if (value >= 3){
            roundScore += (key * 100)
        }
    }
    else if (parseInt(key) === 3){
        if (value >= 3){
            roundScore += (key * 100)
        }
    }
    else if (parseInt(key) === 4){
        if (value >= 3){
            roundScore += (key * 100)
        }
    }
    else if (parseInt(key) === 5){
        if (value >= 3){
            roundScore += (key * 100)
        }
        else {
            roundScore += (50)
        }
    }
    else if (parseInt(key) === 6){
        if (value >= 3){
            roundScore += (key * 100)
        }
    }
}
    totalScore += roundScore
    console.log(`TOTAL SCORE ${totalScore}`)
    let tempScore = document.createElement('h2')
    tempScore.innerText = roundScore
    myScore.appendChild(tempScore)

    let tempFinal = document.createElement('h2')
    tempFinal.innerText = totalScore
    finalScore.appendChild(tempFinal)
}

let newDice=(parent)=>{
while(parent.firstChild){
    parent.removeChild(parent.firstChild);
    }
}