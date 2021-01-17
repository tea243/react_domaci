import React from 'react'
import { Pokusaj } from '../App'
import StavkaStatistike from './StavkaStatistike'
interface Props {
    pokusaji: Pokusaj[]
}
export default function Statistika(props: Props) {
    const duzina = props.pokusaji.length;
    const brojGlava = props.pokusaji.filter(element => element.glava).length;
    const brojPismo = duzina - brojGlava;
    return (
        <div className='container mt-5'>
            <StavkaStatistike naziv='Ukupno pokusaja' vrednost={duzina} />
            <StavkaStatistike naziv='Ukupno glava' vrednost={brojGlava} />
            {duzina > 0 && <StavkaStatistike naziv='Procentualno glava' vrednost={brojGlava / duzina} />}
            <StavkaStatistike naziv='Ukupno pismo' vrednost={brojPismo} />
            {duzina > 0 && <StavkaStatistike naziv='Procentualno pismo' vrednost={brojPismo / duzina} />}
        </div>
    )
}
