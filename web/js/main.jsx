/** @jsx element */

import { createApp, element } from 'deku';
import {Main} from './ui/main';

uibench.init('Deku', '2.0.0');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');
  var render = createApp(container);

  uibench.run(
      function(state) {
        render(<Main data={state} />);
      },
      function(samples) {
        render(<pre>{JSON.stringify(samples, null, ' ')}</pre>);
      }
  );
});
