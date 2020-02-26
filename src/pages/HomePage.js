import React from 'react';
import styled from "styled-components";
import {useTrail, animated} from "react-spring";

import AnimWrapper from "../components/wrapper/AnimWrapper";
import PageWrapper from "../components/wrapper/PageWrapper";
import Modal from "../components/modal/Modal";

const Row = styled.div`
    min-width: 100%;
    text-align: center;
    padding: 0 1rem;
`;

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "Tämä",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "feidaa",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "sisään",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "yksitellen",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
];

const HomePage = () => {
    const [postProps] = useTrail(posts.length, i => {
        return {
            opacity: 1,
            transform: 'translate(0,0)',
            from: {
                opacity: 0,
                transform: 'translate(100%,0)'
            }
        }
    });

    return (
        <AnimWrapper>
            <PageWrapper>
                <Row>
                    {/*<h1>Homepage</h1>*/}
                    <Modal/>
                    {postProps.map((post, i) =>
                        <animated.h1 key={posts[i].id} style={post}>
                            {posts[i].title}
                        </animated.h1>
                    )}
                </Row>
            </PageWrapper>
        </AnimWrapper>
    );
};

export default HomePage;