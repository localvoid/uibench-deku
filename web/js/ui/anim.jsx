import element from 'virtual-element'

let AnimBox = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    var data = component.props.data;
    var time = data.time;
    var style = {
      'borderRadius': (time % 10).toString() + 'px',
      'background': 'rgba(0,0,0,' + (0.5 + ((time % 10) /10)).toString() + ')'
    };

    return <div class="AnimBox" data-id={data.id} style={style} />;
  }
};

export let Anim = {
  shouldUpdate(component, nextProps, nextState) {
    return component.props.data !== nextProps.data;
  },

  render(component, setState) {
    var data = component.props.data;
    var items = data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push((<AnimBox key={item.id} data={item} />));
    }

    return (<div class="Anim">{children}</div>);
  }
};
