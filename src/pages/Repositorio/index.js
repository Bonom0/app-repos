import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButton } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";

export default function Repositorio({match}){
  const { repositorio } = useParams();
  
  const [ repositorioSelecionado, setRepositorioSelecionado ] = useState({});
  const [ issues, setIssues ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function load(){
      const nomeRepo = decodeURIComponent(repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepositorioSelecionado(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);

    }

    load();
  }, [repositorio])
  
  if(loading){
    return(
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    )
  }

  return(
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30}/>
      </BackButton>
      <Owner>
        <img 
          src={repositorioSelecionado.owner.avatar_url} 
          alt={repositorioSelecionado.owner.login} 
        />
        <h1>{repositorioSelecionado.name}</h1>
        <p>{repositorioSelecionado.description}</p>
      </Owner>
    </Container>
    
  )
}