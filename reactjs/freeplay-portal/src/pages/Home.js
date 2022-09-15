import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Game from '../components/Game'
import Context from '../context/index'
import ReactPaginate from 'react-paginate';
function Home() {
    const { FetchAction, setOptions, options, games, setGames } = useContext(Context)
    const [url, setUrl] = useState('')
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [allGames, setAllGames] = useState([])
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
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
        const FetchAllGames = async () => {
            let response = await axios.get(url)
            let data = await response.data
            setAllGames(data)
        }
        FetchAllGames()
    }, [])

    useEffect(() => {
        if (options.platform === '' && options.category === '' && options.sort === '') {
            setUrl('/api/games')
        }
        else if (options.platform !== '' && options.category === '' && options.sort === '') {
            setUrl(`/api/games?platform=${options.platform}`)
        }
        else if (options.platform === '' && options.category !== '' && options.sort === '') {
            setUrl(`/api/games?category=${options.category}`)
        }
        else if (options.platform === '' && options.category === '' && options.sort !== '') {
            setUrl(`/api/games?sort-by=${options.sort}`)
        }
        else if (options.platform !== '' && options.category !== '' && options.sort === '') {
            setUrl(`/api/games?platform=${options.platform}&category=${options.category}`)
        }
        else if (options.platform !== '' && options.category === '' && options.sort !== '') {
            setUrl(`/api/games?platform=${options.platform}&sort-by=${options.sort}`)
        }
        else if (options.platform === '' && options.category !== '' && options.sort !== '') {
            setUrl(`/api/games?category=${options.category}&sort-by=${options.sort}`)
        }
        else if (options.platform !== '' && options.category !== '' && options.sort !== '') {
            setUrl(`/api/games?platform=${options.platform}&category=${options.category}&sort-by=${options.sort}`)
        }


        // use pagination in fetchingData function ? maybe it would solve the problem
        const doYourJob = async () => {
            let data = await allGames
            const endOffset = itemOffset + 10;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(data.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(data.length / 10));
        }
        doYourJob()


    }, [options, url, itemOffset])

    const handlePageClick = (event) => {
        const newOffset = event.selected * 10 % allGames.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

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
                <Col md={9} className="bg-transparent py-2 px-3 mb-5">
                    {
                        currentItems !== null && (typeof games !== 'string') && currentItems.length > 0 ?
                            currentItems.map((_, idx) => (
                                <>
                                    <Game key={idx} game={_} />
                                </>
                            ))
                            :
                            'loading'
                    }

                    {
                        console.log(allGames, "asdadasd", currentItems, "asdasdasdasd")
                    }

                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </Col>


            </Row>
        </Container>
    )
}

export default Home