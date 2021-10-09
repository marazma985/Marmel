import { createSelector } from "reselect"

export const getProfileInfoS = (state)=>{
    return state.profilePage.profileInfo
}
export const getProfileStatusS = (state)=>{
    return state.profilePage.status
}
export const getProfileStatusSuper = createSelector(getProfileStatusS,(status)=>{
    return status //monipulations
})