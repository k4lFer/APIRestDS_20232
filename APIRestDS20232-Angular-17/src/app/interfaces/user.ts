export interface IUser {
    allUsers: User[];
    insertUser: number;
}

export interface User {
    registerDate: string;
    modificationDate: string;
    idUser: string;
    userName: string;
    password: string;
    firstName: string;
    surName: string;
    dni: string;
    birthDate: Date;
    gender: boolean;
}