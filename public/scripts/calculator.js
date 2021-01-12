function wAvg() {
  let c1 = document.forms.grades.c1.valueAsNumber
  let c2 = document.forms.grades.c2.valueAsNumber
  let c3 = document.forms.grades.c3.valueAsNumber
  let goal = document.forms.grades.goal.valueAsNumber
  let cWeight = document.forms.grades.cWeight.valueAsNumber
  let fWeight = document.forms.grades.fWeight.valueAsNumber
  let required = ((goal - ((c1 * cWeight) + (c2 * cWeight) + (c3 * cWeight)))/fWeight)
  if (required < 0) {
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