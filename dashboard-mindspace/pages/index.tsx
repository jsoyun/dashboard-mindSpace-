import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { styled } from 'styled-components';

const Header = styled.header`
  height: 60px;
  background-color: #9f4298;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cfdb31;
  // text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  text-shadow: 1px 1px 3px #57648c;
`;

const HeaderBottom = styled.div`
  background-color: #cfdb31;
  padding: 5px;
`;

const Body = styled.main`
  flex: 1;
  padding: 20px;
  // background-color: #cfdb31;

  // color: #9f4298;
  // text-shadow: 1px 0px 2px #9f4298;
`;

const Footer = styled.footer`
  height: 40px;
  background-color: #9f4298;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledText = styled.p`
  position: relative;
  display: inline-block;
  color: #9f4298;
  font-size: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #cfdb31;
    z-index: -1;
  }

  &:hover {
    // opacity: 1;
    color: #9f4298;
    font-size: 25px;
  }
`;

export default function Home() {
  const [state, setState] = useState('');
  const router = useRouter();
  const login = () => {
    router.push('/login');
  };

  //   const data = {
  //     name:'jisung'
  //   }  as RequestInit

  //   const option = {
  //     method:'POST',
  //     headers :{ 'Content-Type': 'application/json'},
  //     body: JSON.stringify(data)
  //   }

  //   const post = ()=>{

  //  fetch("http://localhost:8080/post",
  //  option

  // ).then((e)=>{
  //   console.log("프론트e",e)
  // return e.json()
  // }).then((d)=>{
  //   console.log("d",d)
  // })
  //   }

  //   const test = ()=>{
  //     fetch("http://localhost:4000/test").then((e)=>{
  //       return e.json()
  //       }).then((d)=>{
  //         console.log("d",d)
  //         setState(d)
  //       })
  //   }

  return (
    <Wrapper>
      <Header>
        {/* 햄쮜가 최애, 로봇이 나다 */}
        {/* 로봇 옆에 말풍선으로 해도 재밌을듯.. 즉 로봇은 일단 주인장임ㅋ */}
        {/* 둘이 만나서 병아리가 탄생된다 */}
        {/* 요즘 날 유혹하는 남자(2D임) */}
        {/* 애정 랭킹 ex 박지성 */}
        {/* 빈도랭킹 ex 모브사이코의 시게오 */}
        {/* 사람들이 최애자랑하게끔하면 좋겠다 게시판, 사진 넣어야함 */}
        {/* 공지사항: 이 사이트 뭐뭐뭐에요? 사장님 당황하셨죠잉~  */}
        <h1>🐹"FAVORITE💖"🤖</h1>
      </Header>
      <HeaderBottom />
      <Body>
        <h2>내가 사랑했던(하는) 모든 최애들에게</h2>

        <Link href="/Showcase">
          {' '}
          <StyledText>🐤 내 애기는 말이야 </StyledText>
        </Link>
        <h2>🐤 당신의 최애는 누구인가요?</h2>
        <h2>내 애기가 세상에서 제일 이뻐</h2>
        <p>fdfdfdf</p>
        <p>🐤 </p>
        <p>🐣</p>
        <p>🐥</p>
      </Body>
      <Footer>
        <p>fdfd</p>
      </Footer>
    </Wrapper>

    //     <>

    // <Button variant="contained" onClick ={login}>로그인 페이지 </Button>

    //        <h2 onClick={post}>
    //               post
    //             </h2>

    //             <h2>{state.message}</h2>
    //             <h2 onClick={test}>
    //               test
    //             </h2>

    //     </>
  );
}
