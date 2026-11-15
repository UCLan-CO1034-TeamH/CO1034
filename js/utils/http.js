function myFetch(url, method, body, pathVariables) {
    let urlSuffix = ""
    if (pathVariables.length > 0) {
        urlSuffix += "?"
        pathVariables.forEach((pathVariable, index) => {
            if (index != 0) {
                urlSuffix += "&"
            }
            urlSuffix += (pathVariable.name + "=" + pathVariable.value)
        });
    }
    return fetch(
        url + urlSuffix, {
            method: method,
            body: body
        }
    )
}

export function get(url, ...pathVariables) {
    return myFetch(url, "GET", undefined, pathVariables)
}

export function postForObject(url, object, ...pathVariables) {
    return myFetch(url, "POST", JSON.stringify(body), pathVariables)
}