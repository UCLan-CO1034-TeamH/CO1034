async function myFetch(url, method, body, pathVariables = []) {
    const params = new URLSearchParams()

    pathVariables.forEach(pathVariable => {
        if (pathVariable.value !== undefined) {
            params.append(pathVariable.name, pathVariable.value)
        }
    })

    const queryString = params.toString()
    const finalUrl = queryString ? `${url}?${queryString}` : url

    const response = await fetch(finalUrl, {
        method: method,
        body: body
    })

    return response.json()
}


async function get(url, ...pathVariables) {
    return myFetch(url, "GET", undefined, pathVariables)
}

// function postForObject(url, object, ...pathVariables) {
//     return myFetch(url, "POST", JSON.stringify(object), pathVariables)
// }