import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as styles from './styled';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        const repoName = localStorage.getItem('repositoriesName');

        if (repoName !== null) {
            const repositories = JSON.parse(repoName);
            setRepositories(repositories);
            localStorage.clear();
        } else {
            history.push('/')
        }
    }, [])

    return(
        <styles.Container>
            <styles.Title>Repositórios</styles.Title>
            <styles.List>
                { repositories.map(repository => {
                    return (
                        <styles.listItem>Repositótio: { repository }</styles.listItem>
                    )
                }) }
            </styles.List>
            <styles.LinkHome to="/">Voltar</styles.LinkHome>
        </styles.Container>
    ); 
}
