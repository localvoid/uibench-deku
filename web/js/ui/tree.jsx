/** @jsx element */

import { element } from 'deku'
import stateful from 'deku-stateful'

let TreeLeaf = stateful({
  render({props, setState}) {
    return (<li class="TreeLeaf">{props.data.id}</li>);
  }
});

let TreeNode = stateful({
  render({props, setState}) {
    var data = props.data;
    var children = [];

    for (var i = 0; i < data.children.length; i++) {
      var n = data.children[i];
      if (n.container) {
        children.push((<TreeNode key={n.id} data={n} />));
      } else {
        children.push((<TreeLeaf key={n.id} data={n} />));
      }
    }

    return (<ul class="TreeNode">{children}</ul>);
  }
});

export let Tree = stateful({
  render({props, setState}) {
    return (<div class="Tree"><TreeNode data={props.data.root} /></div>);
  }
});
