class HelloController {
  constructor (hello) {
    // bind $injections to instance
    this.hello = hello
    // init
    this.sayHello()
  }

  sayHello () {
    this.word = this.hello.getRandomWord()
  }
}

HelloController.$inject = ['hello']

export default {
  controller: HelloController,
  bindings: {
    name: '<'
  },
  template: `
    <span>
      {{$ctrl.word}} {{$ctrl.name}}
      <br />
      <button ng-click="$ctrl.sayHello()">
        Generate
      </button>
    </span>
  `
}
