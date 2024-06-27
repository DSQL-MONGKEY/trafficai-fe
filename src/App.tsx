import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import OverviewPage from './pages/overview/OverviewPage'
import Sidebar from './components/common/Sidebar'
import RightConsole from './components/common/RightConsole'
import CameraPage from './pages/camera/CameraPage'
import AnalyzePage from './pages/analyze/AnalyzePage'

function App() {

	return (
		<div className='flex max-w-6xl mx-auto'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/overview' element={<OverviewPage />} />
				<Route path='/camera' element={<CameraPage />} />
				<Route path='/analyze' element={<AnalyzePage />} />
			</Routes>
			<RightConsole />
		</div>
	)
}

export default App
