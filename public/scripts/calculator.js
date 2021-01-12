function wAvg() {
  c1 = document.forms.grades.c1.valueAsNumber
  c2 = document.forms.grades.c2.valueAsNumber
  c3 = document.forms.grades.c3.valueAsNumber
  goal = document.forms.grades.goal.valueAsNumber
  required = ((goal - ((c1 * 0.3) + (c2 * 0.3) + (c3 * 0.3)))/0.1)
  console.log(required)
  if (required < 0) {
    console.log("inside")
    document.getElementById('requiredScore').innerHTML = `Your required final exam score is 0%`
  }
  else if (required > 100) {
    document.getElementById('requiredScore').innerHTML = `Your required final exam score is ${required.toFixed(2)}% <br/>
    You probably can't get this.`
  }
  else {
    document.getElementById('requiredScore').innerHTML = `Your required final exam score is ${required.toFixed(2)}%`
  }
}