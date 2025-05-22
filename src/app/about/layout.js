import SideMenu from '@/components/sideMenu'
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div style={{display:'flex'}}>
        <SideMenu />
        {children}
    </div>
  )
}
export default AboutLayout
