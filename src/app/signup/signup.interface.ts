export interface user {
    firstName: string;
    lastName: string;
    email: string;
    account: {
        password: string;
        confirmPassword: string;
    }

}