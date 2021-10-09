import React from "react";
import { Suspense } from "react";
import PreLoader from "../Conponents/PreLoader/PreLoader";


export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<PreLoader />}>
            <Component {...props} />
        </Suspense>
    }
}