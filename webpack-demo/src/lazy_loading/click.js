// import {join} from 'lodash-es'

export default function(){
    let p = document.createElement('p');
    p.innerText = join(['on-demand ', 'codes'],' ') //"on-demand codes"
    document.body.appendChild(p);
}