import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Game from '../components/Game'
import Context from '../context/index'
function Home() {
    const { FetchAction, setOptions, options, games, setGames } = useContext(Context)
    const [url, setUrl] = useState('')
    const categories = [
        "mmorpg",
        "shooter",
        "strategy",
        "moba",
        "racing",
        "sports",
        "social",
        "sandbox",
        "open-world",
        "survival",
        "pvp",
        "pve",
        "pixel",
        "voxel",
        "zombie",
        "turn-based",
        "first-person",
        "third-Person",
        "top-down",
        "tank",
        "space",
        "sailing",
        "side-scroller",
        "superhero",
        "permadeath",
        "card",
        "battle-royale",
        "mmo",
        "mmofps",
        "mmotps",
        "3d",
        "2d",
        "anime",
        "fantasy",
        "sci-fi",
        "fighting",
        "action-rpg",
        "action",
        "military",
        "martial-arts",
        "flight",
        "low-spec",
        "tower-defense",
        "horror",
        "mmorts"
    ]

    const platformHandler = (e) => {
        setOptions({ ...options, platform: e.target.value })
    }

    const categoryHandler = (e) => {
        console.log(e.target.value)
        setOptions({ ...options, category: e.target.value })
    }

    const sortHandler = (e) => {
        setOptions({ ...options, sort: e.target.value })
    }



    useEffect(() => {
        if(options.platform === '' && options.category === '' && options.sort === ''){
            setUrl('/api/games')
        }
        else if(options.platform !== '' && options.category === '' && options.sort === ''){
            setUrl(`/api/games?platform=${options.platform}`)
        }
        else if(options.platform === '' && options.category !== '' && options.sort === ''){
            setUrl(`/api/games?category=${options.category}`)
        }
        else if(options.platform === '' && options.category === '' && options.sort !== ''){
            setUrl(`/api/games?sort-by=${options.sort}`)
        }
        else if(options.platform !== '' && options.category !== '' && options.sort === ''){
            setUrl(`/api/games?platform=${options.platform}&category=${options.category}`)
        }
        else if(options.platform !== '' && options.category === '' && options.sort !== ''){
            setUrl(`/api/games?platform=${options.platform}&sort-by=${options.sort}`)
        }
        else if(options.platform === '' && options.category !== '' && options.sort !== ''){
            setUrl(`/api/games?category=${options.category}&sort-by=${options.sort}`)
        }
        else if(options.platform !== '' && options.category !== '' && options.sort !== ''){
            setUrl(`/api/games?platform=${options.platform}&category=${options.category}&sort-by=${options.sort}`)
        }

        axios.get(url)
        .then(res=>res.data)
        .then(data=>setGames(data))
          
    }, [options,url])
    return (
        <Container className="text-light mt-3" fluid>
            <Row className="align-items-start justify-content-center">
                <Col md={2} className="bg-dark mx-1 pt-3 mb-5 pb-3  px-4">
                    {/* <div className="searchBar">
                        <InputGroup className="mb-3 rounded-0">
                            <InputGroup.Text id="basic-addon1" className="rounded-0"></InputGroup.Text>
                            <Form.Control
                                onChange={inputHandler}
                                className="rounded-0"
                                placeholder="Search a game"
                                aria-label="Search a game"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        {

                        }
                    </div> */}
                    <div className="categories">
                        <h5>Categories</h5>
                        <Form.Select size="sm" className="rounded-0 mb-1" onChange={sortHandler}>
                            <option>Sort by</option>
                            <option value="release-date">Release Date</option>
                            <option value="popularity">Popularity</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="relevance">Relevance</option>
                        </Form.Select>
                        <Form className="mt-3" onChange={categoryHandler}>
                            {
                                Array.from(categories).map((_, idx) => (
                                    <Form.Check

                                        label={`${_.toUpperCase()}`}
                                        name="games"
                                        value={`${_}`}
                                        type={'radio'}
                                        id={`category-1`}
                                    />
                                ))
                            }
                        </Form>
                    </div>
                    <div className="platforms mt-3">
                        <h5>Platforms</h5>
                        <Form onChange={platformHandler}>
                            <Form.Check
                                inline
                                label="PC"
                                name="games"
                                value="pc"
                                type={'radio'}
                                id={`category-1`}
                            />
                            <Form.Check
                                inline
                                label="Browser"
                                value="browser"
                                name="games"
                                type={'radio'}
                                id={`category-1`}
                            />
                        </Form>
                    </div>
                </Col>
                <Col md={9} className="bg-dark py-2 px-3 mb-5">
                    {
                       games.length >0?
                       games.map((_,idx)=>(
                        <>
                        <Game key={idx} game={_}/>
                        </>
                       ))
                       :
                       'loading'
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Home