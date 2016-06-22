export default class HelloService {
  constructor ($log) {
    // bind $injections to instance
    this.$log = $log
    // init
    this.words = [
      'Hello',
      'Goodby'
    ]
  }

  getRandomWord () {
    this.$log.debug('Generating a random word')
    const rand = Math.random()
    return this.words[rand > 0.5 ? 1 : 0]
  }
}

HelloService.$inject = ['$log']
