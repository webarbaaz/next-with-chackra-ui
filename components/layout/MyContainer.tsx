import { Container } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function MyContainer({
  children,
  ...props
}: Props) {
  return (
    <Container
      {...props}
      px={{ base: 2, md: 4 }}
      width={'100%'}
      maxW={{
        lg: 'container.xl',
        xl: '1400px',
      }}
      mx={'auto'}
    >
      {children}
    </Container>
  )
}