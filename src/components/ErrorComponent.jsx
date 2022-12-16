import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({msg}) => {
  return (
    <Alert status='error' position={'fixed'} >
      <AlertIcon/>
      {msg.toString()}
    </Alert>
  )
}

export default ErrorComponent