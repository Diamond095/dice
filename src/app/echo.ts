import Echo from "laravel-echo";
import Pusher from 'pusher-js';

declare global {
    interface Window {
      Echo: any;
      Pusher: any;
    }
}

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'e580f4676a5aa65abf76',
    cluster: 'eu',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
});

