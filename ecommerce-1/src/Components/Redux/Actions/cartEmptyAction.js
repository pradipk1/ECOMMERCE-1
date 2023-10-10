import reduxStore from "../ReduxStore";

const cartEmptyAction = () => {
    reduxStore.dispatch({
        type:'EMPTY'
    });
}

export default cartEmptyAction;