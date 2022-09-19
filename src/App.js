import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Login from './pages/Login'
import { useAuthContext } from './hooks/useAuthContext';
import { gsap } from "gsap"
import { useRef, useEffect } from 'react'
import Year from './pages/years/Year';
import AllTimeTable from './pages/general-stats/AllTimeTable';
import AllTime from './pages/general-stats/AllTime';
import LiveGameweek from './pages/live-season/live-gwk/LiveGameweek';
import CurrentSeason from './pages/live-season/live-gwk/CurrentSeason';
import Transfers from './pages/live-season/transfers/Transfers';
import Squads from './pages/live-season/squads/Squads';
import Months from './pages/live-season/months/Months';
import YearlyTransfers from './pages/transfer-centre/YearlyTransfers';
import RandomTradeFinder from './pages/transfer-centre/RandomTradeFinder';
import TradeFinder from './pages/transfer-centre/TradeFinder';
import DraftFinder from './pages/transfer-centre/DraftFinder';



function App() {
  const { user } = useAuthContext()
  const refOne = useRef()
  const refTwo = useRef()
  const refThree = useRef()
  const refFour = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })
    tl.add('start')
    tl.to(refOne.current, { y: "-100%", duration: 1 }, 'start')
    tl.to(refTwo.current, { y: "100%", duration: 1 }, 'start')
  })

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })
    tl.add('start')
    tl.to(refThree.current, { y: "100%", duration: 0.0 }, 'start')
    tl.to(refFour.current, { y: "-100%", duration: 0.0 }, 'start')
    tl.add('end')
    tl.to(refThree.current, { y: "-100%", duration: 1.5 }, 'end')
    tl.to(refFour.current, { y: "100%", duration: 1.5 }, 'end')
  })

  return (
    <div className="bg-primary h-screen w-screen overflow-x-hidden font-montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={ user ? <Navigate to='/live-gameweek' /> : <Login />}/> 
          <Route path="/year/:id" element={ user ? <Year /> : <Login /> } /> 
          <Route path="/all-time-league-table" element={ user ? <AllTimeTable /> : <Login /> } />
          <Route path="/all-time" element={ user ? <AllTime /> : <Login />} />
          <Route path="/live-gameweek" element={ user ? <LiveGameweek /> : <Login />} />
          <Route path="/current-season-stats" element={ user ? <CurrentSeason /> : <Login />} />
          <Route path="/transfers" element={ user ? <Transfers /> : <Login />} />
          <Route path="/squad_stats" element={ user ? <Squads /> : <Login />} />
          <Route path="/monthly_standings" element={ user ? <Months /> : <Login />} />
          <Route path="/transfers/:id" element={ user ? <YearlyTransfers /> : <Login />} />
          <Route path="/trade_finder" element={ user ? <TradeFinder /> : <Login />} />
          <Route path="/draft_finder" element={ user ? <DraftFinder /> : <Login />} />
          <Route exact path="/" element={ user ? <Navigate to='/live-gameweek' /> : <Navigate to='/login' /> }/> 
        </Routes>
      </BrowserRouter>
      { user && <div className='bg-secondary fixed top-0 left-0 h-1/2 w-screen' ref={refOne}></div>}
      { user && <div className='bg-secondary fixed bottom-0 left-0 h-1/2 w-screen' ref={refTwo}></div>}
      { !user && <div className='bg-secondary fixed -top-1/2 left-0 h-1/2 w-screen' ref={refThree}></div>}
      { !user && <div className='bg-secondary fixed -bottom-1/2 left-0 h-1/2 w-screen' ref={refFour}></div>}
    </div>
  );
}

export default App;


