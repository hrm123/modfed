import { createElem } from './createElem.js'

createElem('p', 'Local package');

import('remote_path/entry');

import('remote_path/info').then((res) => {
    console.log(res)
})

import('remote_path/createElem').then((res) => {
    console.log(res)
})
