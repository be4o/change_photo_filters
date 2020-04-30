function __(id)
{
    return document.getElementById(id);
}

__("img-src").onchange = function (event)
{
    var tmppath = URL.createObjectURL(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]))
    __("my-img").setAttribute("src", URL.createObjectURL(event.target.files[0]));

}

function setValues()
{
    __("my-img").style.filter= "blur("+__("blur").value+"px) brightness("+__("brightness").value+"%) contrast("+__("contrast").value+"%) grayscale("+__("grayscale").value+"%) hue-rotate("+__("hue-rotate").value+"deg) invert("+__("invert").value+"%) opacity("+__("opacity").value+"%) saturate("+__("saturate").value+"%) sepia("+__("sepia").value+"%)";

    //set values for spans
    __("s-blue").innerText = +__("blur").value + " px";
    __("s-brightness").innerText = +__("brightness").value +"%";
    __("s-contrast").innerText = +__("contrast").value + "%";
    __("s-grayscale").innerText = +__("grayscale").value + "%";;
    __("s-hue-rotate").innerText = +__("hue-rotate").value + " deg";
    __("s-invert").innerText = +__("invert").value + "%";;
    __("s-opacity").innerText = +__("opacity").value + "%";;
    __("s-saturate").innerText = +__("saturate").value + "%";;
    __("s-sepia").innerText = +__("sepia").value + "%";;
}

__("reset").onclick = () => {
    // __("my-img").style.filter= "blur(0px) brightness(100%) contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)";
    __("blur").value = 0;
    __("brightness").value = 100;
    __("contrast").value = 100;
    __("grayscale").value = 0;
    __("hue-rotate").value = 0;
    __("invert").value = 0;
    __("opacity").value = 100;
    __("saturate").value = 100;
    __("sepia").value = 0;
    setValues();
}