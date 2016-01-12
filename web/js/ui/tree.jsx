/** @jsx element */

import element from 'virtual-element'

let TreeLeaf = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    return (<li class="TreeLeaf">{component.props.data.id}</li>);
  }
};

let TreeNode = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    var data = component.props.data;
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
};

export let Tree = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    return (<div class="Tree"><TreeNode data={component.props.data.root} /></div>);
  }
};
