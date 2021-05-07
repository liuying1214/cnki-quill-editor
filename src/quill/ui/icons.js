import * as Icon from '../assets/icons/svgIcon'
// const alignLeftIcon = require('quill/assets/icons/align-left.svg');
// const alignCenterIcon = require('quill/assets/icons/align-center.svg');
// const alignRightIcon = require('quill/assets/icons/align-right.svg');
// const alignJustifyIcon = require('quill/assets/icons/align-justify.svg');
// const backgroundIcon = require('quill/assets/icons/background.svg');
// const blockquoteIcon = require('quill/assets/icons/blockquote.svg');
// const boldIcon = require('quill/assets/icons/bold.svg');
// const cleanIcon = require('quill/assets/icons/clean.svg');
// const codeIcon = require('quill/assets/icons/code.svg');
// const colorIcon = require('quill/assets/icons/color.svg');
// const directionLeftToRightIcon = require('quill/assets/icons/direction-ltr.svg');
// const directionRightToLeftIcon = require('quill/assets/icons/direction-rtl.svg');
// const formulaIcon = require('quill/assets/icons/formula.svg');
// const headerIcon = require('quill/assets/icons/header.svg');
// const header2Icon = require('quill/assets/icons/header-2.svg');
// const italicIcon = require('quill/assets/icons/italic.svg');
// import imageIcon from '../assets/icons/image';
// const indentIcon = require('quill/assets/icons/indent.svg');
// const outdentIcon = require('quill/assets/icons/outdent.svg');
// const linkIcon = require('quill/assets/icons/link.svg');
// const listBulletIcon = require('quill/assets/icons/list-bullet.svg');
// const listCheckIcon = require('quill/assets/icons/list-check.svg');
// const listOrderedIcon = require('quill/assets/icons/list-ordered.svg');
// const subscriptIcon = require('quill/assets/icons/subscript.svg');
// const superscriptIcon = require('quill/assets/icons/superscript.svg');
// const strikeIcon = require('quill/assets/icons/strike.svg');
// const tableIcon = require('quill/assets/icons/table.svg');
// const tableIcon = '../assets/icons/image';
// const underlineIcon = require('quill/assets/icons/underline.svg');
// const videoIcon = require('quill/assets/icons/video.svg');

const imageIcon = Icon.imageIcon
const tableIcon = Icon.tableIcon
const boldIcon = Icon.boldIcon
const underlineIcon = Icon.underlineIcon
const codeIcon = Icon.codeIcon
const listBulletIcon = Icon.listBulletIcon
const listCheckIcon = Icon.listCheckIcon
const listOrderedIcon = Icon.listOrderedIcon
const formulaIcon = Icon.formulaIcon
const mineIcon = Icon.formulaIcon

export default {

  // align: {
  //   '': alignLeftIcon,
  //   center: alignCenterIcon,
  //   right: alignRightIcon,
  //   justify: alignJustifyIcon,
  // },
  // background: backgroundIcon,
  // blockquote: blockquoteIcon,
  bold: boldIcon,
  // clean: cleanIcon,
  code: codeIcon,
  // 'code-block': codeIcon,
  // color: colorIcon,
  // direction: {
  //   '': directionLeftToRightIcon,
  //   rtl: directionRightToLeftIcon,
  // },
  formula: formulaIcon,
  // header: {
  //   '1': headerIcon,
  //   '2': header2Icon,
  // },
  // italic: italicIcon,
  image: imageIcon,
  // indent: {
  //   '+1': indentIcon,
  //   '-1': outdentIcon,
  // },
  // link: linkIcon,
  mylist: {
    bullet: listBulletIcon,
    check: listCheckIcon,
    ordered: listOrderedIcon,
    number: listOrderedIcon,
    love: listOrderedIcon,
  },
  list: {
    bullet: listBulletIcon,
    check: listCheckIcon,
    ordered: listOrderedIcon,
    number: listOrderedIcon,
    love: listOrderedIcon,
  },
  mine: mineIcon,

  // script: {
  //   sub: subscriptIcon,
  //   super: superscriptIcon,
  // },
  // strike: strikeIcon,
  table: tableIcon,
  underline: underlineIcon,
  // video: videoIcon,
};

