import { Show } from 'solid-js';

import { deviceInfo } from '../store/deviceInfo';

const DeviceInfo = () => {
	return (
		<Show when={deviceInfo.state == 'ready'} fallback={<h2 class='mt-4'>Loading...</h2>}>
			<div class='card my-4'>
				<div class='card-body'>
					<h2>Hostname: {deviceInfo()['hostname']}</h2>
				</div>
			</div>

			<div class='card my-4'>
				<div class='card-body'>
					<h2>MAC Address: {deviceInfo()['MAC_address']}</h2>
				</div>
			</div>

			<div class='card my-4'>
				<div class='card-body'>
					<h2>
						Address: {deviceInfo()['net_address']} (Over {deviceInfo()['network']['name']} in{' '}
						{deviceInfo()['network']['network']})
					</h2>
					<h2>
						Local address: {deviceInfo()['local_address']} (Location:{' '}
						{deviceInfo()['network']['location']})
					</h2>

					<h2>Port: {deviceInfo()['net_port']}</h2>
				</div>
			</div>
		</Show>
	);
};

export default DeviceInfo;
