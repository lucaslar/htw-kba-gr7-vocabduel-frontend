import { TokenData } from './token-data';

export class LoggedInUser {
    readonly authTokens!: TokenData;
    readonly email!: string;
    readonly firstName!: string;
    readonly id!: number;
    readonly lastName!: string;
    readonly username!: string;
}
