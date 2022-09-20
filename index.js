function addingEventListener() {
    const input = document.getElementById('button');
    const clickAlert = () => alert('I was cliecked!');
    input.addEventListener('click', clickAlert);
};
