/** @jsx element */

import element from 'virtual-element';
import {tree, deku, render} from 'deku'
import {Main} from './ui/main';

uibench.init('Deku', '1.0.0');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');
  var app = deku();
  render(app, container, { batching: false });

  uibench.run(
      function(state) {
        app.mount(<Main data={state}/>);
      },
      function(samples) {
        app.mount(<pre>{JSON.stringify(samples, null, ' ')}</pre>);
      }
  );
});
