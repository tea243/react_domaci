import React from 'react'
interface Props {
    naziv: string,
    vrednost: number | string,
}
export default function StavkaStatistike(props: Props) {
    return (
        <div className='row border-top border-bottom'>
            <div className='col-5 text-center'>
                <h2>{props.naziv}</h2>
            </div>
            <div className='col-7'>
                <h2>{props.vrednost}</h2>
            </div>
        </div>
    )
}
