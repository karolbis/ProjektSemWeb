import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import ProfileView from './ProfileView'
import {Colors} from '../styledHelpers/Colors'
// components/styledHelpers/Colors

// import icons
import commentsIcon from '../../assets/icons/comments.svg'
import editIcon from '../../assets/icons/plus.svg'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.White};
    padding: 1em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 6px;
`;

const Header = styled.section`
    align-self: flex-start;
    border-bottom: #ccc solid 1px;
    width: 97%;
    padding: 0 1em 2em 1em;
    position: relative;
`;

const HeaderTopBar = styled.div`
    text-align: right;
    display: flex;
    justify-content: flex-end;
`;

const Container = styled.div`
    width: 100%;
    align-self: flex-end;
    display: flex;
    position: relative;
`;

const ProfileRow = styled.div`
    justify-self: flex-start;
    align-self: center;
    padding: 0 2em;
`;

const Row = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const RightRow = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ExpandRow = styled.div`
    justify-self: flex-start;
    /* align-self: center; */
    flex-grow: 2;
    color: #232c47;
    display: flex;
    h3 {
        font-size: 1.2em;
        font-weight: bolder;
        line-height: 1.2;
    }
    p {
        margin-top: 0.6em;
        font-size: 1em;
        line-height: 1.4;
    }
`;
const Row1 = styled.div`
    width: 16%;
    float:left;
   
`;
const Row2 = styled.div`
    width: 16%;
    float:left;
  
`;
const Row3 = styled.div`
    width: 16%;
    float:left;
   
`;
const Row4 = styled.div`
    width: 16%;
    float:left;
    
`;
const Row5 = styled.div`
    width: 16%;
    float:left;
    
`;
const Row6 = styled.div`
    width: 16%;
    float:left;
   
`;
const Row7 = styled.div`
    width: -80%;
    float:left;
`;

const Section = styled.section`
    border-bottom: #ccc solid 1px;
    padding: 2em 1em;
    position: relative;
    width: 100%;
`;

const SectionTitle = styled.h3`
    font-size: 1.2em;
    color: #a5a8b4;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0em;
`;

const Tag = styled.span`
    color: #5a9eb0;
    background-color: #e6f0f3;
    padding: .4em;
    margin: 0 .4em;
    border-radius: 3px 6px;
    &:first-child { margin-left: 0; }
`;


class Profile extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <HeaderTopBar>
                        <HeaderButton to="/comments" icon={commentsIcon}>Message</HeaderButton>
                        <HeaderButton to="#" icon={editIcon}>Create a request</HeaderButton>
                        <HeaderButton to="#" icon={editIcon}>Add to a cluster</HeaderButton>
                    </HeaderTopBar>

                    <Container>
                        
                        <ProfileRow>
                            <ProfileView />
                        </ProfileRow>

                        <ExpandRow>
                            <Row>
                                <h3>
                                    Humberta swift<br />
                                    Clifford Chance
                                </h3>

                                <p>
                                    New-york<br />
                                    Partner
                                </p>
                            </Row>
                            <RightRow>
                                <p>
                                humbertaswift@gmail.com<br />
                                +33 (0)6 12 34 56 78
                                </p>
                            </RightRow>
                        </ExpandRow>
                    </Container>
                </Header>

                <Section>
                    

                    <SectionTitle>Expertise</SectionTitle>
                    <Tags>
                        <Tag>Mergers and acquisition</Tag>
                    </Tags>

                    <SectionTitle>Specialties</SectionTitle>
                    <Tags>
                        <Tag>Cross border operation</Tag>
                        <Tag>Transaction over 500M/$</Tag>
                    </Tags>

                    <SectionTitle>Admission to practice law</SectionTitle>
                    <Tags>
                        <Tag>Paris bar association</Tag>
                        <Tag>Tunisian bar association</Tag>
                    </Tags>

                    <SectionTitle>Counties</SectionTitle>
                    <Tags>
                        <Tag>Tunisia</Tag>
                    </Tags>
              </Section>
              <Section>
                   <h3> Panel Informations </h3><br/><br/>
               <SectionTitle>Hourly fee</SectionTitle>
                    610$/hour (Negociated)<br/><br/>
                <SectionTitle>Terms & conditions </SectionTitle>
                    Monthly 10k$ retainer - see with Jeanny Smith<br/><br/>      
                    <img src="" alt="Attachment_lorem-ipsum25425.jpg"></img>            
                 </Section>                 
                 <Section>                 
                   Services & projects<br/><br/>
                    Corporate M&A and international acquisitions<br/><br/><br/>
                    Internal correspondates 
                </Section> 
                <Section>
                Proposals<br/><br/>                
                <Row1>Name</Row1>          
                <Row2> Entity</Row2>  
                <Row3>Location</Row3>
                <Row4>Expertise</Row4>
                <Row5> Date</Row5>
                </Section>
                <Section>
                <Row1>Operati Ti..<br/><br/>
                Op. Prometh..<br/><br/>
                Op. Latandre 
                </Row1>
                <Row2>
                Renaualt Co.. <br/> <br/>
                Renaualt HQ..<br/><br/>
                Renaualt Br..
                </Row2>
                <Row3>France<br/><br/>
                USA<br/><br/>
                Italia
                </Row3>
                <Row4>#Tax<br/><br/>
                #MSA<br/><br/>
                #Social
                </Row4>
                <Row5>20/01/2018<br/><br/>           
                18/02/2018<br/><br/>               
                18/02/2018<br/><br/>               
                </Row5>
                <Row6>Racine <br/><br/>
                Clifford Chance <br/> <br/>
                 SVZ
                </Row6>
               <Row7>
               <SectionTitle>See more proposals</SectionTitle>
               </Row7>
               </Section> 
                <Section>
                Internal Reviews <br/><br/><br/>
                <Row1>Name</Row1>          
                <Row2>Entity</Row2>  
                <Row3>Location</Row3>
                <Row4>Expertise</Row4>
                <Row5>Date</Row5>
                </Section>
                <Section>
                <Row1>
                Operati Ti..<br/><br/>
                Op. Prometh..<br/><br/>
                Op. Latandre <br/>
                </Row1>          
                <Row2>
                Renaualt Co..<br/><br/>
                Renaualt HQ..<br/> <br/>
                Renaualt Br..                                       
                </Row2>  
                <Row3>
                France<br/> <br/>
                USA<br/> <br/>
                Italia
                </Row3>
                <Row4>
                #Tax<br/> <br/>
                #MSA<br/> <br/>
                #Social
                </Row4>
                <Row5>
                20/01/2018<br/> <br/>           
                18/02/2018<br/><br/>               
                18/02/2018
                </Row5>
                <Row7>
                <br/><br/>
               <SectionTitle>See more Reviews</SectionTitle>
               </Row7>
                </Section>
                <Section>
                    Amount of fees<br/><br/>
                    <Row1>Year<br/><br/>
                     2019<br/>
                     2018<br/>
                     2017
                    </Row1>
                    <Row2>
                    Cost center<br/><br/>
                     CS 153<br/>
                     CS 153<br/>
                     CS 47<br/>
                     CS 153<br/>
                     CS 32
                    </Row2>
                    <Row3>
                    Total amount<br/><br/>
                     3 500$<br/>
                     9 500$<br/>
                     10 500$<br/>
                     18 500$<br/>
                     15 500$
                    </Row3>
                    <Row4>
                    Law firm<br/><br/>
                     Cliford chance<br/>
                     Linklaters<br/>
                     Linklaters<br/>
                     Linklaters<br/>
                     Linklaters
                    </Row4>
                </Section>
                </Wrapper>        
        )
    }
}
export default Profile; 