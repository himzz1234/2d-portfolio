var activeIndex = 0;
var changeTabAudio = document.getElementById("audio_changingtab");
var selectTabAudio = document.getElementById("audio_selectingtab");
var themeAudio = document.getElementById("audio_theme");
var menuItems = document.querySelectorAll(".cabinet_screenContentItem");
var handleKeyPress = function (e) {
    if (e.key === "w" || e.key === "W") {
        if (activeIndex == 0)
            return;
        menuItems.forEach(function (item) { return item.classList.remove("active"); });
        menuItems[--activeIndex].classList.add("active");
        changeTabAudio.currentTime = 0;
        changeTabAudio.play();
        changeTabAudio.volume = 0.5;
    }
    if (e.key === "s" || e.key === "S") {
        if (activeIndex == menuItems.length - 1)
            return;
        menuItems.forEach(function (item) { return item.classList.remove("active"); });
        menuItems[++activeIndex].classList.add("active");
        changeTabAudio.currentTime = 0;
        changeTabAudio.play();
        changeTabAudio.volume = 0.5;
    }
    if (e.key === "Enter") {
        selectTabAudio.currentTime = 0;
        selectTabAudio.play();
        selectTabAudio.volume = 0.5;
    }
};
var handleAudioToggle = function () {
    var _a;
    var image = (_a = themeAudio.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector("img");
    console.log(image.src);
    if (themeAudio.muted) {
        image.src = "../assets/icons/speaker.png";
        themeAudio.muted = false;
        themeAudio.play();
    }
    else {
        image.src = "../assets/icons/mute.png";
        themeAudio.muted = true;
    }
};
window.addEventListener("keypress", handleKeyPress);
themeAudio.parentNode.addEventListener("click", handleAudioToggle);
