import { createResource } from "solid-js";
import axios from 'axios';


export const [deviceInfo, { refetch: refetchDeviceInfo }] = createResource(() => axios.get('http://172.16.229.50:8080/discovery').then(res => res.data))