/** @jsx element */

import { element } from 'deku'
import stateful from 'deku-stateful'

let TableCell = stateful({
  initialState({props}) {
    return {
        onClick: function(e) {
          console.log('Clicked' + props.text);
          e.stopPropagation();
        }
    };
  },

  render({state, setState, props}) {
    return (<td class="TableCell" onClick={state.onClick}>{props.text}</td>);
  }
});

let TableRow = stateful({
  render({props, setState}) {
    var data = props.data;
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
});

export let Table = stateful({
  render({props, setState}) {
    var items = props.data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push((<TableRow key={item.id} data={item} />));
    }

    return (<table class="Table"><tbody>{children}</tbody></table>);
  }
});
