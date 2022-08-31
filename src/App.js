import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Login from './pages/Login'
import { useAuthContext } from './hooks/useAuthContext';
import { gsap } from "gsap"
import { useRef, useEffect } from 'react'
import Year from './pages/years/Year';
import AllTimeTable from './pages/general_stats/AllTimeTable';
import AllTime from './pages/general_stats/AllTime';
import LiveGameweek from './pages/live_season/live_gwk/LiveGameweek';
import CurrentSeason from './pages/live_season/live_gwk/CurrentSeason';
import Transfers from './pages/live_season/transfers/Transfers';
import Squads from './pages/live_season/squads/Squads';
import Months from './pages/live_season/months/Months';
import YearlyTransfers from './pages/transfer_centre/YearlyTransfers';



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


