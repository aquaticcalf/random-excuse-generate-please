const importanceChoice = document.getElementsByName('importance')
var importance = ""
for (let i = 0; i < importanceChoice.length; i++) {
    if (importanceChoice[i].checked) {
        importance = importanceChoice[i].value
    }
}