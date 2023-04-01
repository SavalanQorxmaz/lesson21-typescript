export type ParentProps = {
 
}


export type ChildProps = {
    firstName: string,
    lastName: string,
    age: number,
    address: {
      street: string,
      home: number
    },
    family: string[],
}