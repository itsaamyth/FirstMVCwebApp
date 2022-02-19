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

/*function changeProfileImg() {
    let editProfileImgBtm = document.getElementById("editProfileImgBtn")
    let editProfileImg = document.getElementById("editProfileImg")
    let editImageUpload = document.getElementById("editImageUpload")

    $("#editImageUpload").hide()
}*/

$(document).ready(function () {
    $("#editImageUpload").hide()
    $("#editProfileImgBtn").click(function () {
        $("#editImageUpload").show();
        $("#editProfileImg").hide();
        $("#editProfileImgBtn").hide();



    })

})

$(document).ready(function () {
    $(function () {
  /*        Edit Function Using Html&Js */
 /*       $("").click(function () {
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
        })*/
        $(".delete").click(function () {
            var StdId = $(this).closest("tr").find(".id").text().trim();
            let delId = document.getElementById("StdId2");
            delId.value = StdId;
            console.log("success");
        })
    })
});

/*View Data Using Ajax*/
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

                        var profileImg = result[0].profileImg
                        if (profileImg == '') {
                            profileImg = "https://img.icons8.com/color/96/000000/gender-neutral-user.png"
                        }
                        $("#profileImg").attr("src", profileImg)

                        var firstName = result[0].firstName
                        let ViewFirstName = document.getElementById("ViewFirstName");
                        ViewFirstName.innerHTML = firstName


                        var lastName = result[0].lastName
                        let ViewLastName = document.getElementById("ViewLastName");
                        ViewLastName.innerHTML = lastName

                        var gender = result[0].gender
                        let ViewGender = document.getElementById("ViewGender");
                        ViewGender.innerHTML = gender

                        var dob = result[0].dob
                        let ViewDOB = document.getElementById("ViewDOB");
                        ViewDOB.innerHTML = dob

                        var email = result[0].email
                        let ViewEmail = document.getElementById("ViewEmail");
                        ViewEmail.innerHTML = email

                        var phone = result[0].phone
                        let ViewPhone = document.getElementById("ViewPhone");
                        ViewPhone.innerHTML = phone

                        var PerAddress = result[0].perAddress
                        let ViewPerAdd = document.getElementById("ViewPerAdd");
                        ViewPerAdd.innerHTML = PerAddress

                        var CurrAddress = result[0].currAddress
                        let ViewCurrAdd = document.getElementById("ViewCurrAdd");
                        ViewCurrAdd.innerHTML = CurrAddress

                        var ugCourse = result[0].course
                        let ViewUgCourse = document.getElementById("ViewUgCourse");
                        ViewUgCourse.innerHTML = ugCourse

                        var ugStream = result[0].stream
                        let ViewStream = document.getElementById("ViewStream");
                        ViewStream.innerHTML = ugStream

                        var Twelfth = result[0].twelfth
                        let ViewTwelfth = document.getElementById("ViewTwelfth");
                        ViewTwelfth.innerHTML = Twelfth+"%"

                        var Tenth = result[0].tenth
                        let ViewTenth = document.getElementById("ViewTenth");
                        ViewTenth.innerHTML = Tenth+"%"

                        var Bio = result[0].bio
                        let ViewBio = document.getElementById("ViewBio");
                        ViewBio.innerHTML = Bio


                        console.log("Success")
                    }
                });
            console.log("Midd Process")
        })

       /* Edit Data Using Ajax*/
        $(".edit").click(function () {
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

                        var EditProfileImg = result[0].profileImg
                        if (EditProfileImg == '') {
                            EditProfileImg = "https://img.icons8.com/color/96/000000/gender-neutral-user.png"
                        }
                        $("#editProfileImg").attr("src", EditProfileImg)

                        let EditStdId = document.getElementById("StdId");
                        EditStdId.value = StdId

                        let imgDummyPath = document.getElementById("imgDummyPath");
                        imgDummyPath.value = EditProfileImg

                        var firstName = result[0].firstName
                        let EditFirstName = document.getElementById("EditFirstName");
                        EditFirstName.value = firstName

                        var lastName = result[0].lastName
                        let EditLastName = document.getElementById("EditLastName");
                        EditLastName.value = lastName

                        var gender = result[0].gender
/*                        const $select = document.querySelector('#EditGender');
                        $select.value = gender*/
                        let EditGender = document.getElementById("EditGender")
                        EditGender.value = gender

                        var dob = result[0].dob
                        let EditDOB = document.getElementById("EditDob");
                        EditDOB.value = dob

                        var email = result[0].email
                        let EditEmail = document.getElementById("EditEmail");
                        EditEmail.value = email

                        var phone = result[0].phone
                        let EditPhone = document.getElementById("EditPhone");
                        EditPhone.value = phone

                        var PerAddress = result[0].perAddress
                        let EditPerAddress = document.getElementById("EditPerAddress");
                        EditPerAddress.value = PerAddress

                        var CurrAddress = result[0].currAddress
                        let EditCurrAdd = document.getElementById("EditCurrAdd");
                        EditCurrAdd.value = CurrAddress

                        var ugCourse = result[0].courseId
                        let EditUgCourse = document.getElementById("EditUgCourse");
                        EditUgCourse.value = ugCourse

                        var ugStream = result[0].streamId
                        let EditStream = document.getElementById("EditStream");
                        EditStream.value = ugStream

                        var Twelfth = result[0].twelfth
                        let EditTwelfthMarks = document.getElementById("EditTwelfthMarks");
                        EditTwelfthMarks.value = Twelfth

                        var Tenth = result[0].tenth
                        let EditTenthMarks = document.getElementById("EditTenthMarks");
                        EditTenthMarks.value = Tenth

                        var Bio = result[0].bio
                        let EditBio = document.getElementById("EditBio");
                        EditBio.innerHTML = Bio


                        console.log("Success")
                    }
                });
        })
    }
    )
})

$(document).ready(function () {
/*    Courses on Registration Page*/
        $.ajax(
            {
                url: `/Course/GetAllCourses/`,
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json;",
                // dataAjax: JSON.stringify(),
                success: function (result) {
                    $.each(result, function (key, value) {
                        $('#UgCourse')
                            .append($('<option>', { value: value.courseId })
                                .text(value.courseName));
                    });
                }
            },
    );

/*    Stream on Registration Page*/  
        $.ajax(
            {
                url: `/Stream/GetAllStream/`,
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json;",
                // dataAjax: JSON.stringify(),
                success: function (result) {
                    $.each(result, function (key, value) {
                        $('#Stream')
                            .append($('<option>', { value: value.streamId })
                                .text(value.streamName));
                    });
                }
            }
    );
/*    Courses on Edit Page*/
        $.ajax(
            {
                url: `/Course/GetAllCourses/`,
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json;",
                // dataAjax: JSON.stringify(),
                success: function (result) {
                    $.each(result, function (key, value) {
                        $('#EditUgCourse')
                            .append($('<option>', { value: value.courseId })
                                .text(value.courseName));
                    });
                }
            },
    );
/*    Stream on Edit Page*/
        $.ajax(
            {
                url: `/Stream/GetAllStream/`,
                type: "GET",
                async: false,
                dataType: "json",
                contentType: "application/json;",
                // dataAjax: JSON.stringify(),
                success: function (result) {
                    $.each(result, function (key, value) {
                        $('#EditStream')
                            .append($('<option>', { value: value.streamId })
                                .text(value.streamName));
                    });
                }
            }
    );


})