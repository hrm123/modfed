import $ from 'jQuery'

export function createElem(tag, text) {
    const elem = $(`<${tag}>`).text(text)
    $('body').append(elem)
    return elem
}