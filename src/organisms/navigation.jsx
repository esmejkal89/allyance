import React from 'react'
import styled from '@emotion/styled'
import { Flex, Link as ExternalLink } from '@rebass/emotion'
import { Twitter, Instagram } from 'react-feather'
import { Link } from 'react-router-dom'

import { LightLogo } from '../atoms/logo'
// import { H4 } from '../atoms/text'

const NavigationContainer = styled.div`
  background: transparent;
  padding: 40px 0 0 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
`
const LogoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`

const SocialBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

const IconBox = styled.div`
  padding-left: 20px;

  svg {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover {
      opacity: 0.6;
    }
  }
`

export function Navigation(props) {
  return (
    <NavigationContainer>
      <Flex flexWrap="wrap" width={1} ml={[4, 4, 6, 6]} mr={[4, 4, 6, 6]}>
        <LogoBox width={[1, 1, 1 / 2, 3 / 5]}>
          <Link to="/">
            <LightLogo />
          </Link>
        </LogoBox>

        <SocialBox width={[1, 1, 1 / 2, 2 / 5]}>
          <IconBox>
            <ExternalLink href="https://twitter.com/ourallyance" target="_blank">
              <Twitter color="white" />
            </ExternalLink>
          </IconBox>
          <IconBox pl={4}>
            <ExternalLink href="https://instagram.com/ourallyance" target="_blank">
              <Instagram color="white" />
            </ExternalLink>
          </IconBox>
        </SocialBox>
      </Flex>
    </NavigationContainer>
  )
}
