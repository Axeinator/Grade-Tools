function wAvg() {
  let c1 = document.forms.grades.c1.valueAsNumber
  let c2 = document.forms.grades.c2.valueAsNumber
  let c3 = document.forms.grades.c3.valueAsNumber
  let goal = document.forms.grades.goal.valueAsNumber
  let cWeight = document.forms.grades.cWeight.valueAsNumber
  let fWeight = document.forms.grades.fWeight.valueAsNumber
  let required = ((goal - ((c1 * cWeight) + (c2 * cWeight) + (c3 * cWeight)))/fWeight)
  if (required < 0) {
    document.getElementById('requiredScore').innerHTML = `Your required final exam score is 0% to maintain a ${goal}%`
  }
  else if (required > 100) {
    document.getElementById('requiredScore').innerHTML = `Your required final exam score is ${required.toFixed(2)}% to maintain a ${goal}% <br/>
    You probably can't get this.`
  }
  else {
    document.getElementById('requiredScore').innerHTML = `Your required final exam score is ${required.toFixed(2)}% to maintain a ${goal}%`
  }
}

function currentGrade() {
  let grades = $('#grades :input').serializeArray()
  let totalEarned = 0
  let totalPossible = 0
  grades.forEach((grade) => {
    if (grade.name.includes('earned')) {
      totalEarned += parseFloat(grade.value) || 0
    }
    else if (grade.name.includes('possible')) {
      totalPossible += parseFloat(grade.value) || 0
    }
  })
  let currentGrade = (totalEarned/totalPossible)*100
  $('#currentGrade').text(`Your current grade is ${currentGrade.toFixed(2)}%`)
}
function gpa() {
  let grades = $('#grades :input').serializeArray()
  grades.forEach(grade => {
    console.log(grade.dataset.num)
    if (grade.name === 'grade') { // if it's a grade, not weight
    }
  })
}

