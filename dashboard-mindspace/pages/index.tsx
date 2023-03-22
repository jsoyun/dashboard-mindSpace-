import Head from 'next/head'
import Image from 'next/image'

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls'
import { useRouter } from 'next/router'

import Button from '@mui/material/Button';




export default function Home() {

  const [state , setState] = useState('')
const router = useRouter()
const login = ()=>{
  router.push('/login')
}

  const data = {
    name:'jisung' 
  }  as RequestInit


  const option = {
    method:'POST',
    headers :{ 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }

  const post = ()=>{

 fetch("http://localhost:4000/post", 
 option

).then((e)=>{
return e.json()
}).then((d)=>{
  console.log("d",d)
})
  }

  const test = ()=>{
    fetch("http://localhost:4000/test").then((e)=>{
      return e.json()
      }).then((d)=>{
        console.log("d",d)
        setState(d)
      })
  }




  
  return (
    <>

<Button variant="contained" onClick ={login}>로그인 페이지 </Button>
    

       <h2 onClick={post}>
              post 
            </h2>

            <h2>{state.message}</h2>
            <h2 onClick={test}>
              test 
            </h2>
    
    </>
  )
}
