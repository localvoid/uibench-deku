/** @jsx element */

import { createApp, element } from 'deku';
import stateful from 'deku-stateful'

const TableCell = stateful({
  initialState({props}) {
    return {
      onClick: function(e) {
        console.log('Clicked' + props.text);
        e.stopPropagation();
      }
    };
  },

  render({state, props}) {
    return <td class="TableCell" onClick={state.onClick}>{props.text}</td>;
  }
});

const TableRow = {
  render({props}) {
    const data = props.data;
    let classes = 'TableRow';
    if (data.active) {
      classes = 'TableRow active';
    }
    const cells = data.props;

    const children = [<TableCell text={'#' + data.id}></TableCell>];
    for (let i = 0; i < cells.length; i++) {
      children.push(<TableCell text={cells[i]}></TableCell>);
    }

    return <tr class={classes} data-id={data.id}>{children}</tr>;
  }
};

const Table = {
  render({props}) {
    const items = props.data.items;

    const children = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(<TableRow key={item.id} data={item} />);
    }

    return <table class="Table"><tbody>{children}</tbody></table>;
  }
};

const AnimBox = {
  render({props}) {
    const data = props.data;
    const time = data.time;
    const style = `border-radius:${time % 10}px;background:rgba(0,0,0,${0.5 + ((time % 10) / 10)})`;

    return <div class="AnimBox" data-id={data.id} style={style} />;
  }
};

const Anim = {
  render({props}) {
    const data = props.data;
    const items = data.items;

    const children = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(<AnimBox key={item.id} data={item} />);
    }

    return <div class="Anim">{children}</div>;
  }
};

const TreeLeaf = {
  render({props}) {
    return (<li class="TreeLeaf">{props.data.id}</li>);
  }
};

const TreeNode = {
  render({props}) {
    const data = props.data;
    const children = [];

    for (let i = 0; i < data.children.length; i++) {
      const n = data.children[i];
      if (n.container) {
        children.push(<TreeNode key={n.id} data={n} />);
      } else {
        children.push(<TreeLeaf key={n.id} data={n} />);
      }
    }

    return <ul class="TreeNode">{children}</ul>;
  }
};

const Tree = {
  render({props}) {
    return <div class="Tree"><TreeNode data={props.data.root} /></div>;
  }
};

const Main = {
  render({props}) {
    const data = props.data;
    const location = data.location;

    let section = null;
    if (location === 'table') {
      section = <Table data={data.table}></Table>;
    } else if (location === 'anim') {
      section = <Anim data={data.anim}></Anim>;
    } else if (location === 'tree') {
      section = <Tree data={data.tree}></Tree>;
    }

    return <div class="Main">{section}</div>;
  }
};

uibench.init('Deku', '2.0.0-rc16');

document.addEventListener('DOMContentLoaded', function (e) {
  const container = document.querySelector('#App');
  const render = createApp(container);

  uibench.run(
    function(state) {
      render(<Main data={state} />);
    },
    function(samples) {
      render(<pre>{JSON.stringify(samples, null, ' ') }</pre>);
    }
  );
});
