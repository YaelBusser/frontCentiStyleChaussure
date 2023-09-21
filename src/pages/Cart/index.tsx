import React, { useState } from "react"
import { Item } from "../typing"
import { Button, Card, IconButton } from '@mui/material'
import { shoesImages } from "../shoesImages"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import './index.css'
import { allItems } from "../allItems"

export const Cart = () => {
    const [items, setItems] = useState<any[]>([
        {
            ...allItems[0],
            amount:1500,
        },
        {
            ...allItems[1],
            amount:2000
        }
    ])

    const addItem = (id:string, amount:number) => {
        setItems([
            ...items.map(item => {
                return item.id == id ? {...item, amount:item.amount+amount}:item
            })
        ])
    }

    const removeItem = (id:string) => {
        setItems([...items.filter(item => item.id != id)])
    }

    return (
        <div className="cart">
            <div>
                <h1>Panier</h1>
                <p>{items.length} items</p>
            </div>
            <div style={{display:'flex'}}>
                <p className="column"></p>
                <p className="column">Produit</p>
                <p className="column">Quantité</p>
                <p className="column">Prix unitaire</p>
                <p className="column">Total</p>
                <p className="column"></p>
            </div>

            <div style={{display:'flex', flexDirection:'column', rowGap:'1rem'}}>
                {items.map((item, index) => {
                    return (
                        <Card key={index} style={{display:'flex', alignItems:'center', rowGap:'2rem'}}>
                            <div className='column'>
                                <img src={item.img} style={{width:'2rem', height:'2rem'}}/>
                            </div>

                            <p className='column'>{item.name}</p>

                            <div className="column" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                                <IconButton style={{width:'1rem', height:'1rem'}} onClick={()=>addItem(item.id, -1)}>
                                    <RemoveIcon/>
                                </IconButton>

                                <p style={{width:'3rem'}}>{item.amount}</p>

                                <IconButton style={{width:'1rem', height:'1rem'}} onClick={()=>addItem(item.id, 1)}>
                                    <AddIcon/>
                                </IconButton>
                            </div>

                            <p className="column">{item.price} €</p>

                            <p className="column">{item.price*item.amount} €</p>

                            <IconButton style={{width:'1rem', height:'1rem'}} onClick={()=>{removeItem(item.id)}}>
                                <DeleteIcon/>
                            </IconButton>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}