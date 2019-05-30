const initialState = {
  playerOneScore: 0,
  playerTwoScore: 0
}

const scoreReducer = (state = initialState, action) => {
  
}

const ADD_PLAYER_ONE_POINT = 'ADD_PLAYER_ONE_POINT'
const ADD_PLAYER_TWO_POINT = 'ADD_PLAYER_TWO_POINT'

const playerOneScoreButton = document.getElementById('add-player-one-point')
const playerTwoScoreButton = document.getElementById('add-player-two-point')


playerOneScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_PLAYER_ONE_POINT
  })
})

playerTwoScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_PLAYER_TWO_POINT
  })
})
