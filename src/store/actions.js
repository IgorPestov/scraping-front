const postData = (data) => {
    return {
        type: "POST_DATA",
        payload: data,
    }
}

export default {
    postData,
}