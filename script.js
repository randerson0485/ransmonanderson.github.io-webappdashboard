const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const notify = document.querySelector('.notifyBell');



alertBanner.innerHTML = `<div class="alertBanner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<button class="alertBannerClose">X</button>
</div>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alertBannerClose")) {
    alertBanner.style.display = "none"
    notify.style.display = "none";
    }
    });

    // Message section
    send.addEventListener('click', () => {
        // ensure user and message fields are filled out
        if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
        } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
        } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
        } else {
        alert(`Message successfully sent to: ${user.value}`);
        }
        });

    // Listens for submit event on any child element in user-fields (through event bubbling)
userFields.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = userSearch.value;
    let message = userMessage.value;
    if (user == '' && message == '') {
      window.alert('You haven\'t entered a user or message.');
    } else if (user == '') {
      window.alert('You haven\'t entered a user.');
    } else if (message == '') {
      window.alert('You haven\'t entered a message.');
    } else {
      window.alert('Your message has been delivered.');
    }
  });

  // Displays pop-up for bell
bell.addEventListener('click', () => {
    window.alert('Look at notification box');
    window.alert('Click X to close alert.');
  });

  

