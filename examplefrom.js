import { from } from 'rxjs';

import 'regenerator-runtime/runtime'

const observer = {
    next: val => console.log('next from', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!')
}

//generator function
function* hello() {
    yield 'Hello';
    yield 'World';
}

const iterator = hello();

const source$ = from([1, 2, 3, 4, 5]); // emits data sychronously, behind runs a loop to array. no flattening done
const source2$ = from("Hello");
const source3$ = from(fetch('https://api.github.com/users/octocat'));
const source4$ = from(iterator);

source$.subscribe(observer); // event listener is not listening untill we subscribe
source2$.subscribe(observer);
source3$.subscribe(observer);
source4$.subscribe(observer);