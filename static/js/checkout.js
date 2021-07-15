$(".checkout-wrapper").hide();
if (total != 0) {
    $(".checkout-wrapper").show();
    $(".checkout-alt").hide();
}

$("#cred-mm").change(function () {
    const mm = $(this).val();
    $("#paypal-mm").text(mm);
});
$("#cred-yy").change(function () {
    const yy = $(this).val();
    $("#paypal-yy").text(yy);
});
$("#cred-ccv").on("input", function () {
    const ccv = $(this).val();
    $("#paypal-ccv").text(ccv);
});
$("#cred-num").on("input", function () {
    const num = $(this)
        .val()
        .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
    $(this).val(num);
    $("#paypal-num").text(num);
});
$("#paymentCred").prop("checked", true);
$("input[name=paymentMethod]").on("change", function () {
    var checkboxId = $(this).val();
    $(".payment").hide();
    $("#" + checkboxId).show();
});

$(".make-payment").click(function (e) {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    if (user != "AnonymousUser") {
        address = $("#address").val();
        city = $("#city").val();
        state = $("#state").val();
        zipcode = $("#zipcode").val();
        url = "/process_order/";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({ total: total, address: address, city: city, state: state, zipcode: zipcode }),
        })
            .then((response) => response.json)
            .then((data) => {
                swal("Payment Success", "The payment was successfully completed!", "success").then(() => {
                    window.location.href = "/"
                });
            });
    }
}
