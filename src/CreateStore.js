import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { HttpInterceptor } from './helpers/HttpInterceptor'
import RootReducer from "./store/reducers/RootReducer";


export const middleware = [thunk];
export const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// export const createStoreWithMiddleware = composeWithDevToolsapplyMiddleware(...middlewares)(createStore);
// export const store = createStoreWithMiddleware(RootReducer);

// HttpInterceptor(store);