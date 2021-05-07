import Block from '../blots/block';
import Container from '../blots/container';
import Quill from '../core/quill';
const COL_ATTRIBUTES = ['width']
const COL_DEFAULT = {
  width: 'auto'
}
class MyTable extends Container {
  static create (value) {
    const node = super.create();
    node.setAttribute('border', 1);
    return node;
  }
}
MyTable.blotName = 'my-table';
MyTable.tagName = 'TABLE';

class MyTr extends Block {
  static create (value) {
    const node = super.create(value)
    COL_ATTRIBUTES.forEach(attrName => {
      node.setAttribute(`${attrName}`, COL_DEFAULT[attrName])
    })
    return node
  }

  static formats (domNode) {
    const tts = COL_ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(`${attribute}`)) {
        formats[attribute] =
          domNode.getAttribute(`${attribute}`) || undefined
      }
      return formats
    }, {})
    console.log('tts', tts)
    return tts
  }
  static register () {
    Quill.register(MyTable);
  }
  format (name, value) {
    if (COL_ATTRIBUTES.indexOf(name) > -1) {
      this.domNode.setAttribute(`${name}`, value || COL_DEFAULT[name])
    } else {
      super.format(name, value)
    }
  }
}
MyTr.blotName = 'my-tr';
MyTr.tagName = 'TR';

class MyTd extends Block {
  static register () {
    Quill.register(MyTr);
  }
}
MyTd.blotName = 'mine';
MyTd.tagName = 'TD'

MyTable.allowedChildren = [MyTr, MyTd];
MyTr.allowedChildren = [MyTd];
MyTd.requiredContainer = MyTr;

MyTr.requiredContainer = MyTable;
MyTd.requiredContainer = MyTr;

export { MyTable, MyTr, MyTd as default };
