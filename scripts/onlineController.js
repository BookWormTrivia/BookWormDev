function clickPrivateRoom() {
    "use strict";
    document.getElementById("set-online").innerHTML = `
        <p class="h2" style="margin-bottom:20px;">Enter Room Name:</p>
        <input id="room-input" placeholder="Room Name">
        <br>
        <br>
        <button class="btn btn-primary">Continue</button>`;
}