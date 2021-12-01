import React, {useState} from "react";
import './UserCard.scss';

const UserCard = (props) => {
    let [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count !== 0){
            setCount(count - 1);
        }
    }

    const handleIncrement = () => {
        if (count !== 10){
            setCount(count + 1);
        }        
    }

    return (
        <div className="card">
            <h3 className="card__name">{props.name}</h3>
            <h4 className="card__role">{props.role}</h4>
            <div className="card__counter">
                <h5 className="card__counter-title">Counter</h5>
                <p className="card__counter-num">{count}</p>
                <button className="card__counter--minus" onClick={() => handleDecrement()}>-</button>
                <button className="card__counter--plus" onClick={() => handleIncrement()}>+</button>
                <progress className="card__progress" max="10" value={count}/>
            </div>
        </div>
    )
}

export default UserCard;