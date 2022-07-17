import type { NextPage } from 'next'
import AppLayout from "../components/AppLayout";
import React, { useState, useEffect } from 'react';



const Home: NextPage = () => {
  function loginCheck(){
    // console.log("hi");
    alert("로그인 상태를 채크한뒤 만약 로그인 상태면 다시 유저 정보를 초기화2");
    console.log("get token : ", localStorage.getItem("mes-token"));
    
  }

  useEffect(() => {
    loginCheck();
  }, []);


  return (
    <AppLayout>
      hello world
    </AppLayout>
  )
}

export default Home
