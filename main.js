function nothingToDo() {
    alert("该功能暂时未提供，敬请期待...")
}

function preView() {
    let showId = document.getElementsByClassName("show")[0].id
    let preViewId = ""
    switch (showId) {
        case "view01":
            preViewId = "view03"
            break
        case "view02":
            preViewId = "view01"
            break
        case "view03":
            preViewId = "view02"
            break
        default:
            preViewId = "view01"
            break
    }
    document.getElementById(showId).className = "hide"
    document.getElementById(preViewId).className = "show animateLeft"
}

function nextView() {
    let showId = document.getElementsByClassName("show")[0].id
    let nextViewId = ""
    switch (showId) {
        case "view01":
            nextViewId = "view02"
            break
        case "view02":
            nextViewId = "view03"
            break
        case "view03":
            nextViewId = "view01"
            break
        default:
            nextViewId = "view03"
            break
    }
    document.getElementById(showId).className = "hide"
    document.getElementById(nextViewId).className = "show animateRight"
}

function initWidth() {
    document.getElementById("contentImg").style.width = document.documentElement.clientWidth + "px"
}

function initFontSize() {
    const cw = document.documentElement.clientWidth
    // width: 375px -> fontSize:16px
    if (cw == 375) {
        document.documentElement.style.fontSize = "16px"
    } else {
        document.documentElement.style.fontSize = cw / 375 * 16 + "px"
    }
}

window.onload = () => {
    initWidth()
    initFontSize()
}

window.onresize = () => {
    initWidth()
    initFontSize()
}