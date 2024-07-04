export interface IUser{
    username: string
    upassword: string,
    uemail: string

}
export interface SignUpResponse{
    message: string
}

export interface SignInRequest{
    username: string,
    upassword: string
}

export interface Payload{
    sub: string;
    username: string;
    isAdmin:number,

}

export interface SignInResponse{
    message: string,
    token: string,
    payload:Payload

}