/** @jsx element */

import { element } from 'deku'

import {Table} from './table';
import {Anim} from './anim';
import {Tree} from './tree';

export let Main = {
  render({props}) {
    var data = props.data;
    var location = data.location;

    var section;
    if (location === 'table') {
      section = (<Table data={data.table}></Table>);
    } else if (location === 'anim') {
      section = (<Anim data={data.anim}></Anim>);
    } else if (location === 'tree') {
      section = (<Tree data={data.tree}></Tree>);
    }

    return (<div class="Main">{section}</div>);
  }
};
