export interface ITour{
    id:string,
    tourname:string,
    tdestination:string,
    tdescription:string,
    tprice:number,
    isDeleted:number
}

export interface addTour{
    tourname:string,
    tdestination:string,
    tdescription:string,
    tprice:number
}
export interface AddTourResponse{
    message: string
}

export interface UpdateTourResponse{
    message: string
}

export interface DeleteTourResponse{
    message: string
}

