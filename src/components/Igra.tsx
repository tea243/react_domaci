import React, { useState } from 'react'
import { Pokusaj } from '../App'
interface Props {
    sacuvaj: (p: Pokusaj) => void,
    pokusaji: Pokusaj[]
}
export default function Igra(props: Props) {
    const [prikaz, setPrikaz] = useState<'glava' | 'pismo' | undefined>(undefined);
    const [poruka, setPoruka] = useState<string | undefined>(undefined);
    const naKlik = (glava: boolean) => () => {
        const odabir = Math.random() > 0.5;
        setPrikaz(odabir ? 'glava' : 'pismo');
        props.sacuvaj({
            glava: odabir,
            pogodio: glava === odabir
        });
        setPoruka(glava === odabir ? 'Pogodak' : 'Promasaj');
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <h1 >Glava ili pismo</h1>
                    <div className='mt-5 md-5'>
                        <button className='btn btn-primary mr-5' onClick={naKlik(true)}>Glava</button>
                        <button className='btn btn-secondary' onClick={naKlik(false)}>Pismo</button>
                    </div>
                    <div>
                        <h1>{poruka}</h1>
                    </div>
                    {
                        props.pokusaji.length > 0 && (
                            <div >
                                <h2>Istorija</h2>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Vas izbor</th>
                                            <th>Izaslo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.pokusaji.slice().reverse().map((element, index) => {
                                            return (
                                                <tr>
                                                    <td>{props.pokusaji.length - index}</td>
                                                    <td>{
                                                        (element.pogodio === element.glava) ? 'Glava' : 'Pismo'
                                                    }</td>
                                                    <td>
                                                        {element.glava ? 'Glava' : 'Pismo'}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>

                                </table>
                            </div>
                        )
                    }
                </div>
                <div className='col-6'>

                    {

                        prikaz === 'glava' && <img src="https://i.ucoin.net/coin/6/055/6055707-2/serbia-5-dinara-2013.jpg" alt="Glava" />
                    }
                    {
                        prikaz === 'pismo' && <img src="https://i.ucoin.net/coin/6/055/6055707-1/serbia-5-dinara-2013.jpg" alt="Pismo" />
                    }
                </div>
            </div>
        </div>
    )
}
