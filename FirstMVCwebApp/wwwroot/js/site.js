// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function FillAddressInput() {
    let checkBox = document.getElementById("checkBox");
    let PerAddress = document.getElementById("PerAddress");
    let curAddress = document.getElementById("CurAddress");
    if (checkBox.checked == true) {

        let PerAddressValue = PerAddress.value;
        curAddress.value = PerAddressValue;
        curAddress.disabled = true;
    }
    else {
        curAddress.value = "";
        curAddress.disabled = false;
    }
}
