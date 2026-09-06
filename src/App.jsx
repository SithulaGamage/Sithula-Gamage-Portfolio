import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects/:slug" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
