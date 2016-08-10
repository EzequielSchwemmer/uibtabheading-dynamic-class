angular.module('app-bootstrap').controller('Component1Controller', [
  '$interval',
  function ($interval) {

    this.component1Phrase = 'This is component 1';
    this.variableTrue = true;

    this.variable = false;

    $interval(() => {
      this.variable = !this.variable;
      console.log('this.variable');
      console.log(this.variable);
    }, 1000)

  }
]);
