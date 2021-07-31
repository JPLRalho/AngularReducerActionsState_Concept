import { appReducer } from '../reducer/app.reducer';

export function incrementAction(value:number):number{
    const action = {
        type: 'CounterComponent/add',
        payload: value
    }
    const currentState = appReducer(action);
    return currentState.counter;
}

export function decrementAction(value:number):number{
    const action = {
        type: 'CounterComponent/subtract',
        payload: value
    }
    const currentState =  appReducer(action);
    return currentState.counter;
}

export function getCounterAction():number{
    const action = {
        type: undefined,
        payload: undefined
    }
    const currentState =  appReducer(action);
    return currentState.counter;
}