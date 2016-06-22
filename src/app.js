// file : /src/app.js

import { module } from 'angular'
import run from './module.run'
import HomeModule from './components/home/home.module'

export default module('app', [HomeModule])
  .run(run)
