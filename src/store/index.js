import { createStore } from 'redux';
import todoApp from '../reducers/reducers';

const Store = createStore(todoApp);
