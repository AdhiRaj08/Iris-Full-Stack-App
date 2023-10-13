document.getElementById('irisForm').addEventListener('submit', displayInfo)

function displayPrediction() {
    document.getElementById('output').style.display = 'block'
}

function displayInfo (e) {
    e.preventDefault()

    let sepal_length = document.getElementById('sepal_length').value
    let sepal_width = document.getElementById('sepal_width').value
    let petal_length = document.getElementById('petal_length').value
    let petal_width = document.getElementById('petal_width').value

    fetch('http://localhost:5000/', {
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({
            "sepal_length" : sepal_length,
            "sepal_width" : sepal_width,
            "petal_length" : petal_length,
            "petal_width" : petal_width
         })
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (data.predicted_value == 0) {
                flower_name = 'Setosa'
            }
            else if (data.predicted_value == 1) {
                flower_name = 'Verscicolor'
            }
            else {
                flower_name = 'Virginica'
            }
            document.getElementById('output').innerHTML = `Predicted Flower is ${flower_name}`
        })
}