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
