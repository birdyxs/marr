const audio = document.getElementById("audio-element");
    const trigger = document.getElementById("play-trigger");
    const playIco = document.getElementById("play-icon");
    const pauseIco = document.getElementById("pause-icon");

    function updateIcons() {
        if (audio.paused) {
            playIco.style.display = "inline-block";
            pauseIco.style.display = "none";
        } else {
            playIco.style.display = "none";
            pauseIco.style.display = "inline-block";
        }
    }

    trigger.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updateIcons();
    });

    audio.onended = updateIcons;

    dragElement(document.getElementById("sidebar"));
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            if (e.target.closest('a') || e.target.closest('.btn-player')) return;
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            elmnt.style.position = "absolute";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

document.addEventListener('contextmenu', event => event.preventDefault());
							
document.onkeydown = function (e) {
							
if(e.keyCode == 123) {
return false;
}
							
if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
return false;
}
							
if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
return false;
}
							
if(e.ctrlKey && e.keyCode == 85) {
return false;
}
}
							
      document.onkeydown = function(){return false};
        document.oncontextmenu = function(){return false}