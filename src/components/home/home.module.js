import { module } from 'angular'
import HelloModule from '../hello/hello.module.js'
import HomeComponent from './home.component.js'

export default module('home', [HelloModule])
  .component('home', HomeComponent)
  .name
