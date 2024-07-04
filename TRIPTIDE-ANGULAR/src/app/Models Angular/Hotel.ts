export interface IHotel {
    id: string,
    hotelname: string,
    hotellocation: string,
    hotelrating: number,
    isDeleted:number

}

export interface addHotel{
    hotelname: string,
    hotellocation: string,
    hotelrating: number,
}

export interface AddHotelResponse{
    message: string
}

export interface UpdateHotelResponse{
    message: string
}

export interface DeleteHotelResponse{
    message: string
}


