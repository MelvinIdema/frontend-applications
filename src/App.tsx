import { useErika } from "./setupTests"
import React, { useState, useEffect, useRef } from "react"
import useFetch from "./hooks/useFetch"

import ButtonRow from "./compositions/ButtonRow"
import Container from "./components/Container"
import PieChart from "./components/PieChart";

import { Grid, Aside, Main, BeerThumbnail } from "./App.styled"

import  { ApiResponse } from "punkApi"

function App() {
    const [beers, setBeers] = useState<ApiResponse[]>([])
    const [beerId, setBeerId] = useState<number>(24)
    const [beer, setBeer] = useState<ApiResponse>()
    const audioRef = useRef(null)

    const {get, loading} = useFetch('https://api.punkapi.com/v2')

    useEffect(() => {
        get<ApiResponse[]>('/beers')
            .then(data => setBeers(data))
            .catch(err => console.error('Error fetching API: ', err));
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setBeer(beers.filter(beer => beer.id === beerId)[0])
    }, [beerId, beers])
    useErika(audioRef, beerId)
    function handleButtonClick(e: MouseEvent, itemId: number) {
        e.preventDefault()
        setBeerId(itemId)
    }

    return (
        <Grid>
            {beers && <ButtonRow selected={beerId} style={{gridArea: 'BR'}} data={beers} onButtonClick={handleButtonClick} loading={loading} />}
            <Aside>
                <Container fluid>
                    <h1>Different Hops</h1>
                    {beer && <PieChart  colorScaleValue={['#a8d2a7', '#669f67']} data={beer.ingredients.hops.map(hop => ({ name: hop.name, amount: hop.amount.value, attribute: hop.attribute }))} height={150} width={150} html={d => `<strong>${d.data.amount}g</strong> <br> ${d.data.name} <br> for ${d.data.attribute}`}/>}
                </Container>

                <Container fluid>
                    <h1>Different Malts</h1>
                    {beer && <PieChart colorScaleValue={['#FFE194', '#FBA633']} data={beer.ingredients.malt.map(malt => ({ name: malt.name, amount: malt.amount.value * 1000 }))} height={150} width={150} html={d => `<strong>${d.data.amount}g</strong> <br> ${d.data.name}`}/>}
                </Container>
            </Aside>
            <Main fluid>
                {beer &&
                    <section className="beer-section">
                            <BeerThumbnail src={beer.image_url} alt="" />
                            <h1>{beer.name}</h1>
                            <p>{beer.description}</p>
                    </section>
                }
            </Main>
            <audio src={`erika.mp4`} ref={audioRef} />
        </Grid>
    )
}

export default App
