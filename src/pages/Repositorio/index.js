import React from "react";
import { useParams } from "react-router-dom";

export default function Repositorio({match}){
  const { repositorio } = useParams();
  return(
    <h1 style={{color:'#FFF'}}>
      Repositorio:
      {decodeURIComponent(repositorio)}  
    </h1>
    
  )
}