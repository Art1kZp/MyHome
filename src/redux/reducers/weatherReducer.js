const defaultState = {
    loading: false,
    success: false,
    error: false,
    data: {}
};

export const LOAD_WEATHER = 'LOAD_WEATHER';
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';
export const LOAD_WEATHER_FAILURE = 'LOAD_WEATHER_FAILURE'

const weatherReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOAD_WEATHER: {
            return {
                ...state,
                loading: true,
            }
        }
        case LOAD_WEATHER_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: action.payload
            }
        }
        case LOAD_WEATHER_FAILURE: {
            console.log('[action]', action);
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        
        default: 
            return state
    }
}

export const loadWeather = payload => ({
    type: LOAD_WEATHER,
    payload
})

export default weatherReducer;