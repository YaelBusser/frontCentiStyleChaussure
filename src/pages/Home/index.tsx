import React, { useState } from "react";
import './index.css';
import { Item } from "../typing";
import { allItems } from "../allItems";
import { Card } from "@mui/material"

const Home = () => {
    const [ items, setItems ] = useState<Item[]>(allItems)

    return (
        <div className='home'>
            <h1>Produits</h1>
            <div  style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
                {items.map(item => {
                    return (
                        <Card>
                            <img src={item.img} alt={item.name} style={{width:'25rem', height:'25rem'}}/>
                            <h2>{item.name}</h2>
                            {item.promo ?
                                <p><span style={{textDecoration:'line-through'}}>{item.price}</span>{item.price*item.promo.rate} €</p>
                                :
                                <p>{item.price} €</p>
                            }
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;