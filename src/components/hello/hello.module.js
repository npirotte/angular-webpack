import { module } from 'angular'
import HelloService from './hello.service.js'
import HelloComponent from './hello.component.js'

export default module('hello', [])
    .service('hello', HelloService)
    .component('hello', HelloComponent)
    .name
