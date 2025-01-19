import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Body from './Components/Body/Body';
import Work from './Components/Work/Work';
import Writing from './Components/Writing/Writing';
// import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import MorphingAircraftWing from './Components/WorkBlocks/MorphingAircraftWing/MorphingAircraftWing';
import PersonalWebsite from './Components/WorkBlocks/PersonalWebsite/PersonalWebsite';
import Tinkering from './Components/WorkBlocks/Tinkering/Tinkering';

function App() {
  return (
    <Router>
		<Routes>
			{/* Main Route */}
			<Route path='/' element={
				<div>
					<Navbar />
					<Body />
					<Footer />
				</div>
			} 
			/>

			{/* Work Route */}
			<Route
				path="/work"
				element={
					<div>
						<Navbar />
						<Outlet />
						<Footer />
					</div>
				}
				>
				<Route index element={<Work />} />
				<Route path='morphing-aircraft-wing' element={<MorphingAircraftWing />} />
				<Route path='personal-website' element={<PersonalWebsite />} />
				<Route path='tinkering' element={<Tinkering />} />
			</Route>

			{/* Writing Route */}
			<Route path="/writing" element={
				<div>
					<Navbar />
					<Writing />
					<Footer />
				</div>
			} 
			/>

			{/* About Route */}
			{/* <Route path="/about" element={
				<div>
					<Navbar />
					<About />
					<Footer />
				</div>
			} 
			/> */}

			{/* Contact Route */}
			<Route path="/contact" element={
				<div>
					<Navbar />
					<Contact />
					<Footer />
				</div>
			} 
			/>

			{/* Morphing Aircraft Wing Route */}
			<Route
				path="/morphing-aircraft-wing"
				element={
					<div>
						<Navbar />
						<MorphingAircraftWing />
						<Footer />
					</div>
				}
        	/>
		</Routes>
    </Router>
  );
}

export default App;
