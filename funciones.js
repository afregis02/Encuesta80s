function showResults() {
    var resultQ1 = getCheckboxValues(["q1_1", "q1_2", "q1_3"]);
    var resultQ2 = getCheckboxValues(["q2_1", "q2_2", "q2_3"]);
    var resultQ3 = getCheckboxValues(["q3_1", "q3_2", "q3_3"]);

    document.getElementById("resultQ1").innerText = resultQ1;
    document.getElementById("resultQ2").innerText = resultQ2;
    document.getElementById("resultQ3").innerText = resultQ3;

    document.getElementById("result").style.display = "block";
}

function getCheckboxValues(ids) {
    let values = ids.map(id => {
        let checkbox = document.getElementById(id);
        return checkbox && checkbox.checked ? checkbox.value : null;
    }).filter(value => value !== null);
    
    return values.join(", ");
}


