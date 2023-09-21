export interface Item {
    id:string,
    name:string,
    img:string,
    price:number,
    DateStock:Date,
    DateStockEnd:Date,

    brand:Brand,
    color:Color,
    size:Size,
    promo?:Promo
}

export interface Brand {
    id:string,
    name:string,
}

export interface Color {
    id:string,
    color:string
}

export interface Size {
    id:string,
    size:number,
}

export interface Promo {
    id:string,
    name:string,
    rate:number,
    start:Date,
    end:Date
}

export interface CartItem {
    id:string,
    name:string,
    img:string,
    amount:number,
    price:number,
}