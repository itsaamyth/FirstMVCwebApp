// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function FillAddressInput() {
    let checkBox = document.getElementById("checkBox");
    let PerAddress = document.getElementById("PerAddress");
    let CurrAdd = document.getElementById("CurrAdd");
    let EditCurrAdd = document.getElementById("EditCurrAdd");

    if (checkBox.checked == true) {

        let PerAddressValue = PerAddress.value;
        CurrAdd.value = PerAddressValue;

    }
    else {
        CurrAdd.value = "";
        CurrAdd.disabled = false;
    }
}

function EditAddressInput() {
    let checkBox = document.getElementById("EditCheckBox");
    let EditPerAdd = document.getElementById("EditPerAddress");
    let EditCurrAdd = document.getElementById("EditCurrAdd");

    if (checkBox.checked == true) {

        let EditPerAddValue = EditPerAdd.value;
        EditCurrAdd.value = EditPerAddValue;

        EditCurrAdd.disabled = true;

    }
    else {
        EditCurrAdd.value = "";
        EditCurrAdd.disabled = false;
    }
}

$(document).ready(function () {
    $(function () {
        $(".edit").click(function () {
            var StdId = $(this).closest("tr").find(".id").text().trim();
            var firstName = $(this).closest("tr").find(".firstName").text().trim();
            var lastName = $(this).closest("tr").find(".lastName").text().trim();
            var gender = $(this).closest("tr").find(".gender").text().trim();
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


$(document).ready(function () {
    $(function () {
        $(".view").click(function () {
            var StdId = $(this).closest("tr").find(".id").text().trim();
            $.ajax(
                {
                    url: `/Form/GetAllData/${StdId}`,
                    type: "GET",
                    async: false,
                    dataType: "json",
                    contentType: "application/json;",
                   // dataAjax: JSON.stringify(),
                    success: function (result) {
                        console.log(result)
                        var firstName = result.firstName
                        let ViewFirstName = document.getElementById("ViewFirstName");
                        ViewFirstName.innerHTML = firstName

                        var lastName = result.lastName
                        let ViewLastName = document.getElementById("ViewLastName");
                        ViewLastName.innerHTML = lastName

                        var gender = result.gender
                        let ViewGender = document.getElementById("ViewGender");
                        ViewGender.innerHTML = gender

                        var dob = result.dob
                        let ViewDOB = document.getElementById("ViewDOB");
                        ViewDOB.innerHTML = dob

                        var email = result.email
                        let ViewEmail = document.getElementById("ViewEmail");
                        ViewEmail.innerHTML = email

                        var phone = result.phone
                        let ViewPhone = document.getElementById("ViewPhone");
                        ViewPhone.innerHTML = phone

                        var PerAddress = result.permanentAddress
                        let ViewPerAdd = document.getElementById("ViewPerAdd");
                        ViewPerAdd.innerHTML = PerAddress

                        var CurrAddress = result.currentAddress
                        let ViewCurrAdd = document.getElementById("ViewCurrAdd");
                        ViewCurrAdd.innerHTML = CurrAddress

                        var ugCourse = result.ugCourse
                        let ViewUgCourse = document.getElementById("ViewUgCourse");
                        ViewUgCourse.innerHTML = ugCourse

                        var ugStream = result.stream
                        let ViewStream = document.getElementById("ViewStream");
                        ViewStream.innerHTML = ugStream

                        var Twelfth = result.twelfthMarks
                        let ViewTwelfth = document.getElementById("ViewTwelfth");
                        ViewTwelfth.innerHTML = Twelfth+"%"

                        var Tenth = result.tenthMarks
                        let ViewTenth = document.getElementById("ViewTenth");
                        ViewTenth.innerHTML = Tenth+"%"

                        var Bio = result.studentBio
                        let ViewBio = document.getElementById("ViewBio");
                        ViewBio.innerHTML = Bio


                        console.log("Success")
                    }
                });
        })
    
    }
    )
})