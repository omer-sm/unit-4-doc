import React from 'react'
import './App.css'
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from "@mui/joy/Sheet"
import DocPageContainer from './Containers/DocPageContainer'
import TopBar from './Containers/TopBar'
import NavMenu from './Containers/NavMenu'
import Stack from "@mui/joy/Stack"
import Divider from "@mui/joy/Divider"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Drawer from '@mui/joy/Drawer'
import LandingPage from './Containers/LandingPage'
function App() {
  const [pageIndex, setPageIndex] = React.useState(0)
  const theme = useTheme()
  const isDesktopLayout = useMediaQuery(theme.breakpoints.up("sm"))
  const [menuDrawerOpen, setMenuDrawerOpen] = React.useState(false)
  return (
    <CssVarsProvider>
      <Sheet sx={{ height: "100vh", overflow: "hidden" }}>
        <Stack sx={{height: "100vh"}}>
        <TopBar displayMenuIcon={!isDesktopLayout} toggleMenuDrawer={() => {setMenuDrawerOpen(p => !p)}}/>
        <Stack direction="row" height="100%" px={4} pt={2} useFlexGap spacing={isDesktopLayout ? 8 : 0}>
          {isDesktopLayout && <NavMenu currentPageIndex={pageIndex} setPageIndex={setPageIndex} isInDrawer={false} closeDrawer={()=>{}}/>}
          <Drawer open={menuDrawerOpen} onClose={() => {setMenuDrawerOpen(false)}} anchor='right'>
            <NavMenu currentPageIndex={pageIndex} setPageIndex={setPageIndex} isInDrawer closeDrawer={() => {setMenuDrawerOpen(false)}}/>
          </Drawer>
          {isDesktopLayout && <Divider orientation='vertical' />}
          {pageIndex === -1 ? 
          <LandingPage isDesktopLayout={isDesktopLayout}/> :
          <DocPageContainer pageIndex={pageIndex} showSideNav={isDesktopLayout} />}
        </Stack>
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
