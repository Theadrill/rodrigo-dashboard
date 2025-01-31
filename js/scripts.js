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


window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false)

document.addEventListener("keydown", function onPress(event) {
    switch (event.key) {
        case "ArrowLeft":
            
            break
        case "ArrowRight":
            
            break
        case "ArrowUp":
            //.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp'}))
            
            //console.log(document.getElementById('light').contentWindow)

            // console.log(document.embeds[1])

            // document.getElementById('lightEmbed').click()

            //.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp'}))

            
            break
        case "ArrowDown":
            
            break
    }
})