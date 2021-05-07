import Quill from '../quill/quill.js'
import '../quill/dist/quill.core.css'
import '../quill/dist/quill.snow.css'
const toolbarOptions = [
  ['bold', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }],
];
class CnkiEditor {
  constructor(container, options = {}) {
    this.options = options;
    this.addDom('editor')
    this.quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: '',
      modules: {
        // toolbar: '#toolbar',
        toolbar: toolbarOptions,
        // 'cnki-image': true,
        // 'cnki-imageDrop': true,
        // 'cnki-kityformula': true,
        // 'cnki-table': true,
        // 'cnki-code': true,
        // 'better-table': true
      }
    })
  }
  addDom (id, refNode = null) {
    let container = null
    if (typeof id === 'string') {
      container = document.createElement('div');
      container.setAttribute('id', id);
    }
    console.log(container)
    document.body.appendChild(container);
    return container;
  }
}

export default CnkiEditor;