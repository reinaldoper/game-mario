const state = {
  view: {
    squaries: document.querySelectorAll('.square'),
    enemy: document.querySelector('.enemy'),
    timeLeft: document.querySelector('#time-left'),
    score: document.querySelector('#score'),
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60
  },
  actions: {
    timerId: setInterval(randonSquare, 1000),
    countDownId: setInterval(countDown, 1000),
  }
}

function countDown() {
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime

  if(state.values.currentTime <= 0){
    clearInterval(state.actions.timerId)
    clearInterval(state.actions.countDownId)
    alert('Game over, Your point -> ' + state.values.result)
  }
}

function randonSquare(){
  state.view.squaries.forEach((square) => {
    square.classList.remove('enemy')
  })
  let randon = Math.floor(Math.random() * 9)
  let randon1 = state.view.squaries[randon]
  randon1.classList.add('enemy')
  state.values.hitPosition = randon1.id
}


function addListener(){
  state.view.squaries.forEach((i) =>{
    i.addEventListener('click', () => {
      if(i.id === state.values.hitPosition){
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
      }
    })
  })
}

const init = () => {
  addListener()
};

init();