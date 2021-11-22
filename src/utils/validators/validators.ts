export const notEmpty = (value: string) => {
    if (!value) return 'The field cannot be empty...'
    return undefined
}


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value) if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}
