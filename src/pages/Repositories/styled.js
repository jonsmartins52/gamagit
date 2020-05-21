import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 990px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const listItem = styled.li`
    margin: .5em 0;
    background-color: #000;
    color: #fff;
    padding: .5rem;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: #fff;
    padding: .5rem 0;
    text-decoration: none;
`
