function removeSynbols(code: string) {
    return !code ? '0' : code.replace(/\D+/g, "");
}

function format(code: string, type: string) {
    const len = type == 'ncm' ? 8 : 7
    code = code.replace(/\D+/g, "")
    for (let i = 0; code.length < len; i++) {
        code = `0${code}`
    }
    return code;
}
export { format, removeSynbols };