import React from "react";
import {warMapAction} from "./warMapActions";
import {warMapOnLoad} from "./warMapTypes";

export const warMapReducer = (state = '' ,action) => {
    switch (action.type) {
        case warMapOnLoad: {
            return action.payload
        }
        default : return 'hui'
    }
}
