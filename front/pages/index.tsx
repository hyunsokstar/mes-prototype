import type { NextPage } from 'next'
import AppLayout from "../components/AppLayout";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import api from "../utils/api"
import UserContainer from "../components/UserContainer"



const Home: NextPage = () => {
  const loginCheck = async () => {
    // console.log("hi");
    // alert("로그인 상태를 채크한뒤 만약 로그인 상태면 다시 유저 정보를 초기화2");
    // console.log("get token : ", localStorage.getItem("mes-token"));

    // const newCatResponse = await axios.post(`${api.cats}/upload` , {
    //   withCredentials: true,
    //   headers: {
    //     Authorization: "Bearer " + me.token,
    //   },
    // });
  }

  useEffect(() => {
    loginCheck();
  }, []);


  return (
    <AppLayout>
      <UserContainer />
    </AppLayout>
  )
}

export default Home
