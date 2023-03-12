import { Action } from "@ngrx/store";
import { Forecast } from "../models/forecast";

export const ADD_FORECAST = 'ADD_FORECAST';

export class AddForecast implements Action {
    readonly type: string = ADD_FORECAST;
    payload: Forecast | undefined;

}