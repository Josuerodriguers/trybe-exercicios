const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTaskHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTaskHeader.length; index += 1) {
    emergencyTaskHeader[index].style.backgroundColor = 'rgb(165, 0, 243)'
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTaskHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTaskHeader.length; index += 1) {
    noEmergencyTaskHeader[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';
footer