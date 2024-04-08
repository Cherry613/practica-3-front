export type Lover = {
    _id: string,
    name: string,
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
  
