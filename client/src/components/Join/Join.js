import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import { DataContext } from "../../App";
import './Join.css';


const Join = () => {
    const context = useContext(DataContext);

    return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div>
                        <input placeholder="Name" className="joinInput" type="text" onChange={(event) => { return context.setName(event.target.value) }} />
                        <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => context.setRoom(event.target.value)} />
                        <Link 

                        onClick={(event => (!context.name || !context.room) ? event.preventDefault() : null )}
                        
                        to={`/chat`}>
                            <button className="button mt-20" type="submit">Sign In</button>
                        </Link>
                    </div>
                </div>
                
            </div>
    )
}
export default Join;
