var elem = document.documentElement

function openFullscreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        }
    } else {
        if (!document.mozFullScreen && !document.webkitFullScreen) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen()
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen()
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen()
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen()
            }
        }
    }
}
