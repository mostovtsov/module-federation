import { Forecast } from "src/app/models/forecast";
import * as ForecastActions from "src/app/store/weather.actions";


const initialState = {
    forecasts: [
        new Forecast(new Date(Date.now()), 30, 'hot'),
        new Forecast(new Date(Date.now()), 20, 'ok'),

    ]
};



export function weatherReducer(state = initialState, action: ForecastActions.AddForecast) {
    switch (action.type) {
        case ForecastActions.ADD_FORECAST:
            return {
                ...state,
                forecasts: [...state.forecasts, action.payload]
            };
       
    }
    return undefined;
}