// Load Styles
import '../scss/main.scss';

// Load Core
window.$ = window.jQuery = require('jquery');
import {initBootstrap} from "./bootstrap";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});
