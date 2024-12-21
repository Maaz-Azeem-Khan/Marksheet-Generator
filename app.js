document.getElementById('addMore').addEventListener('click', () => {
    // Create new subject input fields
    const subjectContainer = document.getElementById('subjectContainer');
    const newSubjectDiv = document.createElement('div');
    newSubjectDiv.classList.add('subjectInput');
    newSubjectDiv.innerHTML = `
        <input type="text" class="subjectName" placeholder="Subject Name" required>
        <input type="number" class="subjectMarks" placeholder="Subject Marks" required>
    `;
    subjectContainer.appendChild(newSubjectDiv);
});

document.getElementById('generateMarks').addEventListener('click', () => {
    const subjects = document.getElementsByClassName("subjectName");
    const marks = document.getElementsByClassName("subjectMarks");
    let totalMarks = 0;
    let totalPossibleMarks = 0;
    let subjectCount = subjects.length;

    for (let i = 0; i < subjectCount; i++) {
        let subjectName = subjects[i].value.trim();
        let subjectMark = parseFloat(marks[i].value.trim());

        if (subjectName === "" || isNaN(subjectMark) || subjectMark < 0) {
            alert("Please enter valid subject name and marks.");
            return;
        }

        totalMarks += subjectMark;
        totalPossibleMarks += 100; // Assuming each subject is out of 100 marks
    }

    // Calculate percentage
    let percentage = (totalMarks / totalPossibleMarks) * 100;

    // grade
    let grade = "";
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display result
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h3>Marksheet</h3>
        <p><strong>Total Marks:</strong> ${totalMarks} / ${totalPossibleMarks}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});

