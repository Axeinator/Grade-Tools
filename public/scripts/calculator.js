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
function calcGpa(weighted) {
  let gpSum = 0
  let grades = $('#grades input').toArray()
  let gradesCount = 0
  grades.forEach(grade => {
    if (grade.value) {
      gradesCount++
    }
    let num = $(grade).data('num')
    grade = grade.valueAsNumber
    let weightElement = $(`select[data-num=${num}]`)
    let weight = weightElement.val()
    if (!weighted) {
      weight = 4
    }
    if (parseInt(weight) === 4) {
      if (grade >= 90) {
        gpSum += 4
      } else if (grade >= 80 && grade < 90) {
        gpSum += 3
      } else if (grade >= 75 && grade < 80) {
        gpSum += 2
      } else if (grade >= 70 && grade < 75) {
        gpSum += 1
      }
    }
    else if (parseInt(weight) === 5) {
      if (grade >= 90) {
        gpSum += 5
      } else if (grade >= 80 && grade < 90) {
        gpSum += 4
      } else if (grade >= 75 && grade < 80) {
        gpSum += 3
      } else if (grade >= 70 && grade < 75) {
        gpSum += 2
      }
    }
  })
  let gpa = gpSum/gradesCount
  if (weighted) {
    $('#GPA').text(`Your weighted GPA is ${gpa.toFixed(2)}.`)
  }
  else {
    $('#GPA').text(`Your unweighted GPA is ${gpa.toFixed(2)}.`)
  }
}

