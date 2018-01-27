import css from './css/index.css';
import sass from './css/common.scss';
import $ from 'jquery';
let json = require('../author');
let a = 1;
document.write('xixi111122211');
console.log(json);
$('#div1').css('color','blue').html(json.name);