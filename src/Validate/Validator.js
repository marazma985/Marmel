export const required = (value) =>{
    if(value) return undefined;
    return 'need send text'
}
export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length < maxLength) return undefined;
    return `Max ${maxLength} simbols`
}