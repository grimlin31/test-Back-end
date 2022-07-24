const copy = (obj) => {
    if (!obj) return {};
    return JSON.parse(JSON.stringify(obj))
}

export {
    copy
}