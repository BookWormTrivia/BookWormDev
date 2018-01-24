function clickPrivateRoom() {
    "use strict";
    document.getElementById("set-online").innerHTML = `
        <p class="h2" style="margin-bottom:20px;">Enter Room Name:</p>
        <input class="form-control-feedback" style="height:30px; width:280px; font-size:16px; padding:5px; border:2px solid #0C60FE" placeholder="Room Name">
        <br>
        <br>
        <button style="width:250px;" class="btn btn-primary">Continue</button>`;
}