// Import Workbox from 'workbox-window'
import { Workbox } from 'workbox-window';

const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox(swUrl);

    wb.addEventListener('activated', event => {
      if (!event.isUpdate) {
        console.log('Service worker activated for the first time!');
      } else {
        console.log('Service worker has been updated!');
      }
    });

    wb.register();
  }
}
