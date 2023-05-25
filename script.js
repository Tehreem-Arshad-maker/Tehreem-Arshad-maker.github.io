// Function to sort the list
function sortList(list) {
    return list.sort(function(a, b) {
        return a - b;
    });
}

// Function to calculate the maximum value
function getMaximum(list) {
    return Math.max(...list);
}

// Function to calculate the sum
function getSum(list) {
    const sum = list.reduce((a, b) => a + b, 0);
    return sum;
}

// Button click event handlers
document.getElementById('sortBtn').addEventListener('click', function() {
    const inputList = document.getElementById('inputList').value;
    const list = inputList.split(',').map(Number);
    const sortedList = sortList(list);
    document.getElementById('output').textContent = 'Sorted List: ' + sortedList;
});

document.getElementById('maxBtn').addEventListener('click', function() {
    const inputList = document.getElementById('inputList').value;
    const list = inputList.split(',').map(Number);
    const maximum = getMaximum(list);
    document.getElementById('output').textContent = 'Maximum Value: ' + maximum;
});

document.getElementById('sumBtn').addEventListener('click', function() {
    const inputList = document.getElementById('inputList').value;
    const list = inputList.split(',').map(Number);
    const sum = getSum(list);
    document.getElementById('output').textContent = 'Sum: ' + sum;
});
