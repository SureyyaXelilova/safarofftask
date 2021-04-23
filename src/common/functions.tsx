export function convertFirebaseArray(firebaseArray: any) {
    const convertedArray:any = []
    Object.keys(firebaseArray).map(item => {
        firebaseArray[item].id = item
        convertedArray.push(firebaseArray[item])
    })
    return convertedArray
}