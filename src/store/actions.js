const postData = (data) => {
    return {
        type: "POST_DATA",
        payload: data,
    }
}
const postLoad = (boolean) => {
    return {
        type: "POST_LOAD",
        payload : boolean
    }
}

export default {
    postData,
    postLoad,
}