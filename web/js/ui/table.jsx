/** @jsx element */

import element from 'virtual-element'

let TableCell = {
  initialState(props) {
    return {
        onClick: function(e) {
          console.log('Clicked' + props.text);
          e.stopPropagation();
        }
    };
  },

  shouldUpdate(component, nextProps, nextState) {
    return component.props.text !== nextProps.text;
  },

  render(component, setState) {
    return (<td class="TableCell" onClick={component.state.onClick}>{component.props.text}</td>);
  }
};

let TableRow = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    var data = component.props.data;
    var classes = 'TableRow';
    if (data.active) {
      classes = 'TableRow active';
    }
    var cells = data.props;

    var children = [(<TableCell text={'#' + data.id}></TableCell>)];
    for (var i = 0; i < cells.length; i++) {
      children.push((<TableCell text={cells[i]}></TableCell>));
    }

    return (<tr class={classes} data-id={data.id}>{children}</tr>);
  }
};

export let Table = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    var items = component.props.data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push((<TableRow key={item.id} data={item} />));
    }

    return (<table class="Table"><tbody>{children}</tbody></table>);
  }
};
