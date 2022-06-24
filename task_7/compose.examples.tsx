import * as React from "react"
import { getValue } from "./utils/react/pickFromSynteticEvent"
import { preventDefault } from "./utils/react/preventDefault"
import { stopPropagation } from "./utils/react/preventDefault"

function InputExample({value, onChange}: any) {
  <input
    value={value}
    // onChange={preventDefault(stopPropagation(getValue(onChange)))}
    onChange={compose(onChange, getValue, preventDefault, preventDefault)}
  />
}

function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
  fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
  fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

//const (onChange) => pipe(preventDefault, preventDefault, getValue, onChange);

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick('value')({ value: 1 }); // => 1

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [{id: 1, text: 'one'}, {id: 2, text: 'two'}];

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
const filteredWithId = createFilterBy('id'); //(id: number) => pipe(pick('id'), isEqual(id), cond);
const filteredWithId22 = createFilterBy('id')(22);
const filteredByValue = createFilterBy('value');

const filteredComments = comments.filter(filteredWithId22);

function cond(b: boolean) {
  return !b;
}


const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
);
