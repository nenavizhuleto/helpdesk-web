import { createEffect, createSignal, Show } from 'solid-js';
import Navbar from './components/Navbar';
import DeviceInfo from './components/DeviceInfo';
import { refetchDeviceInfo } from './store/deviceInfo';

function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<div className='container mt-4'>
				<h1>Device Information</h1>
				<a class='btn btn-dark' onclick={() => refetchDeviceInfo()}>
					Refresh
				</a>
				<DeviceInfo />
			</div>
		</div>
	);
}

export default App;
