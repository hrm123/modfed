export function createElem(tag, innerText, parent) {
    const elem = document.createElement(tag);
    if (innerText) elem.innerText = innerText;
    if (parent) parent.appendChild(elem);
    return elem;
}

export function deadCode(){
    return 'deadCodeTreeShaking'
}