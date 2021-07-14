//1. Напишите тип функции, конкатенирующей две строки

function concat(firstString: string, secondString: string): string {
    return `${firstString} ${secondString}`;
} 

let result = concat('Hello ', 'World');

//2. Напишите интерфейс для описания следующих данных

// const MyHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

interface MyHometask {
    howIDoIt: string;
    simeArray: Array<string | number>;
    withData: { howIDoIt: string, simeArray: Array<string | number> };
}

//3. В уроке про Generics мы написали интерфейс массива MyArray
let myArray: MyArray<number> = [1, 2, 3];
const initialValue = 0;

interface MyArray<T> {
    [N: number]: T;
    //добавьте типизацию для метода reduce
    reduce<T>(fn: (accumulator: T, currentValue: T) => T): T;
}

myArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue);
myArray.reduce((accumulator: number, currentValue: number) => accumulator + currentValue + "df"); //Будет ошибка, так как не number


//4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}



