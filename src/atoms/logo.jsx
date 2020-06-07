import React from 'react'
import styled from '@emotion/styled'

const WhiteLogo = styled.div`
  display: block;
`

const BlackLogo = styled.div`
  display: block
`

export function LightLogo(props) {
  return (
    <WhiteLogo className={props.className ? props.className + 'logo__light' : 'logo__light'}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" height="auto" width="140px" viewBox="0 0 273 50" >
        <path className="st0" fill="#fff"  d="M98 37.9h-8.5v-1.4c-1.9 1.2-4.2 1.9-7 1.9-6.9 0-12.7-5.7-12.7-13.3 0-7.6 5.8-13.3 12.7-13.3 2.8 0 5.1.7 7 1.9v-1.4H98v25.6zm-8.5-8.8v-7.9c-1.6-1.8-3.4-2.4-5.3-2.4-3.5 0-6 2.8-6 6.4 0 3.5 2.5 6.3 6 6.3 1.8 0 3.7-.6 5.3-2.4zM110.7 37.9h-8.5V.6h8.5v37.3zM123.5 37.9H115V.6h8.5v37.3zM141.3 49.7h-8.9l4.8-11.5-12.1-25.8h9.1l7.3 15.7 6.6-15.7h8.9l-15.7 37.3zM184.3 37.9h-8.5v-1.4c-1.9 1.2-4.2 1.9-7 1.9-6.9 0-12.7-5.7-12.7-13.3 0-7.6 5.8-13.3 12.7-13.3 2.8 0 5.1.7 7 1.9v-1.4h8.5v25.6zm-8.6-8.8v-7.9c-1.6-1.8-3.4-2.4-5.3-2.4-3.5 0-6 2.8-6 6.4 0 3.5 2.5 6.3 6 6.3 1.9 0 3.8-.6 5.3-2.4zM215 23.4V38h-8.6V24.7c0-3.6-1.8-5.4-4.6-5.4-1.6 0-3.3.9-4.7 2.6v16h-8.5V12.4h8.5v1.7c2.1-1.6 4.3-2.5 7.1-2.5 6.3 0 10.8 4.5 10.8 11.8zM236.3 27.5h8.1c-.6 6.6-6 11.1-13.1 11.1-8.1 0-14-5.6-14-13.4 0-7.7 5.9-13.3 14-13.3 7.1 0 12.5 4.5 13.1 11.1h-8.1c-.4-2.3-2.4-3.8-5-3.8-3.6 0-5.8 2.6-5.8 6.1s2.2 6.2 5.8 6.2c2.7-.2 4.6-1.7 5-4zM272.8 27.5l.1.2h-18.2c.7 2.3 2.5 4.1 5.7 4.1 1.8 0 3.2-.7 3.9-1.8h8.4c-1.2 5.3-6.1 8.6-12.4 8.6-8.4 0-14-5.6-14-13.4 0-7.7 5.4-13.3 13.6-13.3 7.4 0 13.1 5.1 13.1 12.8 0 .9 0 1.9-.2 2.8zm-18.2-4.8H265c-.5-2.8-2.3-4.3-5.1-4.3s-4.7 1.7-5.3 4.3z"/><path d="M64.9 22.7L42.8.6 32.3 11 21.8.6-.3 22.7l22.1 22.1 10.5-10.5 10.5 10.5 22.1-22.1zM21.8 37.3L7.2 22.7 21.8 8l6.8 6.8-7.9 7.9 7.9 7.9-6.8 6.7zm10.5-18.8l4.2 4.2-4.2 4.2-4.2-4.2 4.2-4.2zm11.6 4.2L36 14.8 42.8 8l14.7 14.7-14.7 14.6-6.8-6.7 7.9-7.9z" fill="#474747"/>
        <path transform="rotate(-45.009 32.24 22.669)" className="st0" d="M29.2 19.7h6v6h-6z" fill="#fff" /></svg>
    </WhiteLogo>
  )
}

export function DarkLogo(props) {
  return (
    <BlackLogo className={props.className ? props.className + 'logo__dark' : 'logo__dark'}>
    allyance
    </BlackLogo>
  )
}
