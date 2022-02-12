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
       // curAddress.disabled = true;
    }
    else {
        curAddress.value = "";
        curAddress.disabled = false;
    }
}

$(document).ready(function () {
    $(function () {
        $(".edit").click(function () {
            var StdId = $(this).closest("tr").find(".id").text().trim();
            var firstName = $(this).closest("tr").find(".firstName").text().trim();
            var lastName = $(this).closest("tr").find(".lastName").text().trim();
            var email = $(this).closest("tr").find(".email").text().trim();
            var phone = $(this).closest("tr").find(".phone").text().trim();

            let editId = document.getElementById("StdId");
            let editFirst = document.getElementById("edit1");
            let editLast = document.getElementById("edit2");
            let editEmail = document.getElementById("edit3");
            let editPhone = document.getElementById("edit4");

            editId.value = StdId;
            editFirst.value = firstName;
            editLast.value = lastName;
            editEmail.value = email;
            editPhone.value = phone;

            console.log("success");
        })
        $(".delete").click(function () {
            var StdId = $(this).closest("tr").find(".id").text().trim();
/*            var firstName = $(this).closest("tr").find(".firstName").text().trim();
            var lastName = $(this).closest("tr").find(".lastName").text().trim();
            var email = $(this).closest("tr").find(".email").text().trim();
            var phone = $(this).closest("tr").find(".phone").text().trim();*/

            let delId = document.getElementById("StdId2");
/*            let editFirst = document.getElementById("edit1");
            let editLast = document.getElementById("edit2");
            let editEmail = document.getElementById("edit3");
            let editPhone = document.getElementById("edit4");*/

            delId.value = StdId;
/*            editFirst.value = firstName;
            editLast.value = lastName;
            editEmail.value = email;
            editPhone.value = phone;*/

            console.log("success");
        })
    })
});
