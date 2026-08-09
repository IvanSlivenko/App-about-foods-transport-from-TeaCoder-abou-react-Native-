// export const errorCatch = (error : any): string => {
//     const message = error?. response?.data?.message 

//     return message
//         ? typeof error.response.data.message === 'object'
//         ? message[0]
//         : message
//         : error.message
// }

export const errorCatch = (error: any): string => {
    
    // console.log("--------------------------- errorCatch in error.api.ts");
    

    const message = error?.response?.data?.message

    if (message) {
        // console.log("---------------------------message in errorCatch in error.api.ts", message);
        return typeof message === 'object'
            ? message[0]
            : message
    }

    // console.log("----------------------Something went wrong _ 0 in errorCatch in error.api.ts");

    return error?.message || 'Something went wrong'
}