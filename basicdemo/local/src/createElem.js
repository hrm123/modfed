export function createElem(tag, text) {
    const elem = document.createElement(tag);
    elem.innerText = text;
    document.body.append(elem);
}