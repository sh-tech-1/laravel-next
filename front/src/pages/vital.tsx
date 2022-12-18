import React, { useEffect } from 'react';
import Main from "../components/Main";
import axios from "../../libs/axios";

export default function Vital() {
  console.log('can i vital see')
  useEffect(() => {
    const url = "/vital"
    axios.get(url).then((res) => {
      const data = res.data;
      console.log('=== api response ====');
      console.log(data);
      console.log('=== api response ====');
    });
  }, []);
  return <Main />;
}
