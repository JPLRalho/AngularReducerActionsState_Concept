import { appState } from './../state/app.state';

export function appReducer(action:any, state = appState) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'CounterComponent/add':
            action.payload++;
            return {...state, counter: action.payload};
        case 'CounterComponent/subtract':
            action.payload--;
            return {...state, counter: action.payload};
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
  }