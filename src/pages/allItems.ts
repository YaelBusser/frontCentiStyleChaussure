import { brands } from "./brands"
import { colors } from "./colors"
import { promos } from "./promos"
import { shoesImages } from "./shoesImages"
import { sizes } from "./sizes"
import { Item } from "./typing"

export const allItems:Item[] = ([
    {
        id:'0',
        name:'Azerty',
        img:shoesImages[1],
        DateStock:new Date,
        DateStockEnd:new Date,
        price:5,  

        brand:brands[0],
        color:colors[1],
        size:sizes[0],
        promo:promos[0],
    },

    {
        id:'1',
        name:'Uiop',
        img:shoesImages[0],
        DateStock:new Date,
        DateStockEnd:new Date,
        price:2,  

        brand:brands[1],
        color:colors[1],
        size:sizes[0]
    }
])