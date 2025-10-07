
// import {join} from 'lodash-es'

let h1 = document.createElement('h1');
h1.innerText = join(['Lazy ', 'Loading'],' ') // "Lazy Loading"
document.body.appendChild(h1);

let button = document.createElement('button');
button.innerText = "Click to lazy load";
document.body.appendChild(button);

button.onclick = async () => {
    let {default:click} = await import('./click.js')
    click();
}