const updateBtn = document.getElementsByClassName("update-cart");
for (let i = 0; i < updateBtn.length; i++) {
    updateBtn[i].addEventListener("click", function (e) {
        e.preventDefault();
        var productId = this.dataset.product;
        var action = this.dataset.action;

        if (user === "AnonymousUser") {
            swal("Sorry", "You are not logged In!", "error");
        } else {
            updateUserOrder(productId, action);
        }
    });
}

function updateUserOrder(productId, action) {
    var url = "/update_item/";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ productId: productId, action: action }),
    })
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            swal("Added to cart", "Your item was added to the cart!", "success")
            .then(() => {
                location.reload();
            });
        });
}


const updateBtn1 = document.getElementsByClassName("update-1-cart");
for (let i = 0; i < updateBtn1.length; i++) {
    updateBtn1[i].addEventListener("click", function (e) {
        e.preventDefault();
        var productId = this.dataset.product;
        var action = this.dataset.action;

        if (user === "AnonymousUser") {
            swal("Sorry", "You are not logged In!", "error");
        } else {
            updateUserQuantity(productId, action);
        }
    });
}

function updateUserQuantity(productId, action) {
    var url = "/update_item/";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ productId: productId, action: action }),
    })
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            location.reload();
        });
}
