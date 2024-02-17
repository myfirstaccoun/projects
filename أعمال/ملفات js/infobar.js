showHideInfo.onclick = () => {
    showHideInfo.classList.remove("show");
    infobar.classList.remove("showMenuBtn");
    root.setProperty("--side-width", "222px");
    sidebar.classList.remove("hide");
    pagesName.style.right = "10px";
}