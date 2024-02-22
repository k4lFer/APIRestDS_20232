export interface IUser {
    allUsers: User[];
    insertUser: insertUser[];
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

export interface insertUser {
    
    idUser ?: string;
    userName: string;
    password: string;
    firstName: string;
    surName: string;
    dni: string;
    birthDate: Date | null;
    gender: boolean;
    //registerDate: string;
    //modificationDate: string;
}