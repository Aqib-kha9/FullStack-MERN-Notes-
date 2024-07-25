import Card from './Card'
import './Card.css'

export default function CardTab(){
    return (
        <div className="allCards">
            <Card title="Logitech MX Master" disc1="8000 DPI" disc2="5 Programmable Buttons" oldPrice={12495} newPrice={8999}/>
            <Card title="Logitech MX Master" disc1="8000 DPI" disc2="5 Programmable Buttons" oldPrice={12495} newPrice={8999}/>
            <Card title="Logitech MX Master" disc1="8000 DPI" disc2="5 Programmable Buttons" oldPrice={12495} newPrice={8999}/>
            <Card title="Logitech MX Master" disc1="8000 DPI" disc2="5 Programmable Buttons" oldPrice={12495} newPrice={8999}/>
        </div>
        
    )
}