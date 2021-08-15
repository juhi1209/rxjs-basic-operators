import { EMPTY, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap, takeUntil, tap } from "rxjs/operators";

const BASE_URL = 'https://api.openbrewerydb.org/breweries';
const input = document.getElementById('text-input');
const input$ = fromEvent(input,'keyup');

const result$ = input$.pipe(
    debounceTime(500),
    pluck('target','value'),
    distinctUntilChanged(),
    tap((val)=>  console.log(!!val)),
    switchMap(searchTerm => {    
     return  ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`).pipe(
         catchError((error,caught) => {
           //  return caught;
         })
     )
    })

);

const dropdownValue = document.getElementById('dropdown-value');

result$.subscribe((res) =>{
    if(res) dropdownValue.innerHTML = res.map(x=>x.name).join('<br>')
    else dropdownValue.innerHTML = ''
});