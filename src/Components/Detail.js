import React from 'react'
import { useParams } from 'react-router-dom';



export default function Detail({ formatted , vid }) {
    const match = useParams();
    return (
        <div className="container">
            {formatted.filter(el => el.id === parseInt(match.id, 10)).map(el => {
                return (
                    
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <h2>{el.title}</h2>  
                            <h5>{el.author}</h5>
                            <br />
                            <p>{el.abstract}</p>
                            <br />
                            <p>{el.description}</p>

                            
                            <iframe width="560" height="315" src={vid} className ="mt-5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="row">
                                <ul className="list-group w-75 p-3">
                                {el.topics.map(topic => {
                                    return (
                                        <li className="list-group-item bg-light mt-1">{topic}</li>
                                        )
                                })}
                                </ul>
                            </div>
                            <div className="row">
                                <ul className="list-group w-75 p-3">
                                {el.technologies.map(technology => {
                                    return (
                                        <li className="list-group-item bg-light mt-1">{technology}</li>
                                        )
                                })}
                                </ul>
                            </div>
                        </div>
                        
                    </div>)
            })}
                
                

        </div>
    )
}


