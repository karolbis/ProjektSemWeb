import { FC } from 'react'
import styled from 'styled-components'

// Components
import Publications from '../MainContent/LatestPublications/LatestPublications'
import Workspaces from '../MainContent/Workspaces/Workspaces'
import ResumeYourWork from '../MainContent/ResumeYourWork/ResumeYourWork'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    gap: 1.5em;
`;

const HomePage: FC = () => {
    return (
        <Wrapper>
            <Publications />
            <Workspaces />
            <ResumeYourWork />
        </Wrapper>
    );
}

export default HomePage;