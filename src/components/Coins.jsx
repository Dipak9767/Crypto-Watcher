import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

    const [coins , setCoins ] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page , setPage] = useState(1); 
    const [currency , setCurrency] = useState('inr');
    const currencySymbol = currency === 'inr' ?'₹':currency === 'eur' ? '€' :'$';
    const pageBtn= new Array(132).fill(1);
    const [errorMsg , setErrorMsg] = useState("ERROR")

    useEffect(()=>{
        const fetchCoins = async()=>{
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setCoins(data);
                setLoading(false);
              } catch (error) {
                setError(true);
                setLoading(false);
                setErrorMsg(error);
              }
        }
        fetchCoins();
    },[currency,page])

    const changePage = (page) =>{
      setPage(page);
      setLoading(true);
    }

    if(error)
    return <ErrorComponent msg = {errorMsg}/>

  return (
   <Container maxW={"container.xl"}>
   {
     loading ?
     <Loader/> : <>
     <RadioGroup value={currency} onChange={setCurrency}>
      <HStack p={9}>
        <Radio value={'inr'}>INR</Radio>
        <Radio value={'usd'}>USD</Radio>
        <Radio value={'eur'}>EUR</Radio>
      </HStack>
     </RadioGroup>
     <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
        {
            coins.map((i)=>{
                return(
                    <CoinCard key={i.id}img= {i.image} name={i.name} price ={i.current_price} symbol={i.symbol} id = {i.id}currencySymbol={currencySymbol}/>
                )
            })
        }
     </HStack>

     <HStack w={'full'} overflow={'auto'} p={'8'}>
      {
        pageBtn.map((btn , idx) =>{
          return (
            <Button key={idx}
            bgColor={'blackAlpha.900'}
            color={'white'}
            onClick={()=>{
              changePage(idx+1)
            }}>
            {idx+1}
            </Button>
          )
        })
      }
     </HStack>
     </>
   }
   </Container>
  )
}

export default Coins;