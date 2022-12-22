import { configureStore} from '@reduxjs/toolkit';
import counter from './counterReducer';
import customers from './customersReducer'
import todoItem from './todoReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './redux/sagas';
import weather from './redux/reducers/weatherReducer'

const middleware = [];
const sagaMiddleware = createSagaMiddleware({
  onError: (err) => {
    store.dispatch({type: 'ERROR', payload: err})
  }
});
middleware.push(sagaMiddleware)
const enhancers = [...middleware]

export const store = configureStore({
  reducer: {
    counter,
    customers,
    todoItem,
    weather
  },
  middleware: enhancers,
});

sagaMiddleware.run(rootWatcher)
