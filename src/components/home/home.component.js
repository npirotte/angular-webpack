class HomeController {
  constructor ($log) {
    $log.debug('Welcome home !')
    this.name = 'Nicolas'
  }
}

HomeController.$inject = ['$log']

export default {
  controller: HomeController,
  template: `
    <div>
      <h1>This is our home page !</h1>
      <hello name="$ctrl.name"></hello>
    </div>
  `
}
