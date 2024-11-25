var video;

window.addEventListener("load", function () {
    console.log("Page loaded, initializing video...");
    video = document.getElementById("player1");

    // Turn off autoplay and looping
    video.autoplay = false;
    video.loop = false;
    console.log("Autoplay is off. Looping is off.");
});

// Play video and update volume information
document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
});

// Pause video
document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

// Slow down video
document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New playback speed: " + video.playbackRate.toFixed(2));
});

// Speed up video
document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9; // Reverse of slowing down by 10%
    console.log("New playback speed: " + video.playbackRate.toFixed(2));
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function () {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
        console.log("Restarting video...");
    }
    console.log("Current time: " + video.currentTime.toFixed(2));
});

// Mute/unmute video and update button text
document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted;
    this.innerText = video.muted ? "Unmute" : "Mute";
    console.log("Mute status: " + video.muted);
});

// Adjust volume and update volume display
document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
    console.log("Volume: " + video.volume.toFixed(2));
});

// Apply old-school style
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
    console.log("Applied vintage style.");
});

// Remove old-school style
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
    console.log("Removed vintage style.");
});
