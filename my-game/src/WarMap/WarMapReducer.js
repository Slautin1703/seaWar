// import {warMapAction} from "./warMapActions";
import {warMapOnLoad} from "./warMapTypes";
// import {getWarMap} from "./wapMapAPI";

export const warMapReducer = (state = '' ,action) => {
    console.log(action)
    switch (action.type) {
        case warMapOnLoad: {
            return {coordinates:action.payload}
        }
        default : return null
    }
}
