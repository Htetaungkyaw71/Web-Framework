import { init } from '../node_modules/snabbdom/build/init.js'
import { eventListenersModule }  from '../node_modules/snabbdom/build/modules/eventlisteners'

const patch = init([eventListenersModule]);

export const render = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};