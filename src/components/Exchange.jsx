import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';

const Exchange = () => {

    const [exchanges , setExchanges ] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(false);
    const[errorMsg , setErrorMsg] = useState('ERROR');

    useEffect(()=>{
        const fetchExchanges = async()=>{
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
              } catch (error) {
                setError(true);
                setLoading(false);
                setErrorMsg(error);
              }
        }
        fetchExchanges();
    },[])

    if(error)
    return <ErrorComponent msg = {errorMsg}/>

  return (
   <Container maxW={"container.xl"}>
   {
     loading ?
     <Loader/> : <>
     <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
        {
            exchanges.map((i)=>{
                return(
                    <ExchangeCard  key={i.id}img= {i.image} name={i.name} url={i.url} rank={i.trust_score_rank} />
                )
            })
        }
     </HStack>
     </>
   }
   </Container>
  )
}

export default Exchange