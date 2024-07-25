import {useState} from 'react'
import './Lottery.css';
import { genTicket,sum } from './helper';
import Ticket from './Ticket';

export default function Lottery({n=3,winCondition}){

    let [ticket, useTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        useTicket(genTicket(n));
    }

    return(
        <div>
            <h2>Lottery Game</h2>
            <div className='ticket'>
                <Ticket ticket={ticket}/>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation you won"}</h3>
        </div>
    )
}