export type Lover = {
    name: string,
    password: string,
    age: number,
    sex: string,
    description: string,
    hobbies: Array<string>,
    photo: string,
    comments: comment[],
}

export type comment = {
    user: string;
    message: string;
};
  
