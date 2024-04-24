let activeIndex = 0;

const changeTabAudio = document.getElementById(
  "audio_changingtab"
) as HTMLAudioElement;
const selectTabAudio = document.getElementById(
  "audio_selectingtab"
) as HTMLAudioElement;
const themeAudio = document.getElementById("audio_theme") as HTMLAudioElement;

const menuItems = document.querySelectorAll(".cabinet_screenContentItem");

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "w" || e.key === "W") {
    if (activeIndex == 0) return;
    menuItems.forEach((item) => item.classList.remove("active"));
    menuItems[--activeIndex].classList.add("active");

    changeTabAudio.currentTime = 0;
    changeTabAudio.play();
    changeTabAudio.volume = 0.5;
  }

  if (e.key === "s" || e.key === "S") {
    if (activeIndex == menuItems.length - 1) return;
    menuItems.forEach((item) => item.classList.remove("active"));
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

const handleAudioToggle = () => {
  const image = themeAudio.parentNode?.querySelector("img") as HTMLImageElement;
  console.log(image.src);
  if (themeAudio.muted) {
    image.src = "../assets/icons/speaker.png";
    themeAudio.muted = false;
    themeAudio.play();
  } else {
    image.src = "../assets/icons/mute.png";
    themeAudio.muted = true;
  }
};

window.addEventListener("keypress", handleKeyPress);
themeAudio.parentNode!.addEventListener("click", handleAudioToggle);
