import React from 'react'
import { useParams } from 'react-router-dom';



export default function Detail({ formatted , vid }) {
    const match = useParams();
    return (
        <div className="container">
            {formatted.filter(el => el.id === parseInt(match.id, 10)).map(el => {
                return (
                    <div className="row">
                        <div className="col-md-8">
                            <h2>{el.title}</h2>  
                            <h5>{el.author}</h5>
                            <br />
                            <p>{el.abstract}</p>
                            <br />
                            <p>{el.description}</p>

                            
                            <iframe width="560" height="315" src={vid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                            {el.topics.map(topic => {
                                return (
                                    <li className="list-group-item">{topic}</li>
                                    )
                            })}
                            </ul>
                        </div>
                        
                    </div>)
            })}
                
                

        </div>
    )
}


