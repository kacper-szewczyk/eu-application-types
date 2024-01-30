// Napisz funkcję, która sprawdza typ przekazanego argumentu i zwraca odpowiednią wartość w zależności od typu z wykorzystaniem typeof
const foo = (value: unknown): void => {
  switch (typeof value) {
    case 'string':
      console.log("that's string")
      break;
    case 'number':
      console.log("that's number")
      break;
    case 'boolean':
      console.log("that's boolean")
      break;
    default:
      console.log("that's any other type")
  }
}


// Napisz funkcję, która sprawdza typ przekazanego argumentu i jeśli jest typu TestTypeGuard wywołuje get

class TestTypeGuard<T, U> {
  object: T;
  key: U;

  constructor(object: T, key: U) {
    this.object = object;
    this.key = key;
  } 

  get (): T {
    return this.object;
  }

  set (key: U): void {
    this.object = {
      ...this.object,
      value: key
    }
  }
}

const checkInstance = <T>(object: unknown): T | undefined => {
  return object instanceof TestTypeGuard ? object.get() : undefined;
}


// Napisz funkcję, która sprawdza czy obiekt zawiera odpowiednie pole i zwraca zawartość 
// tego pola lub rzuca wyjątek z wykorzystaniem operatora in

//const checkProperty = (object: object): 

type Square = {
  sideLength: number;
}

type Rectangle = {
  width: number;
  height: number;
}

const calculateArea = (shape: Square | Rectangle): number | never => {
  if ('sideLength' in shape) {
    return shape.sideLength * shape.sideLength;
  } else if ('width' in shape && 'height' in shape) {
    return shape.height * shape.width;
  } else {
    throw new Error('kj');
  }
}


// Napisz funkcję, która wraca informacje ze obiekt jest danego typu operator is

const checkIsSquare = (shape: Square | Rectangle): shape is Rectangle => {
  return 'width' in shape && 'height' in shape
}

const obj = {
    width: 10,
    height: 12
}

if (checkIsSquare(obj)) {
    console.log(obj)
}
