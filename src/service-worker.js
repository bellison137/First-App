/* eslint-disable no-restricted-globals */

// Import workbox directly
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);
