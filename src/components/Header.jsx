import { HStack , Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} spacing={'20'} shadow={"base"} bgColor={'blackAlpha.900'} justifyContent={'center'} alignContent={'center'} >
        <Button   variant={"unstyled"} color={"white"}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to={'/exchange'}>Exchange</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to={'/coins'}>coins</Link>
        </Button>
    </HStack>
  )
}

export default Header