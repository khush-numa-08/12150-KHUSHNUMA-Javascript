
const productForm = document.querySelector('#productForm');
const productTitle = document.querySelector('#productTitle');
const productPrice = document.querySelector('#productPrice');
const productImg = document.querySelector('#productImg');
const productCategory = document.querySelector('#productCategory');
const display = document.querySelector('#display');

let list = JSON.parse(localStorage.getItem("Products")) || [];

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const obj = {
        id: Date.now(),
        productTitle: productTitle.value.trim(),
        productPrice: productPrice.value,
        productImg: productImg.value.trim(),
        productCategory: productCategory.value
    };

    if (
        obj.productTitle === "" ||
        obj.productPrice === "" ||
        Number(obj.productPrice) <= 0 ||
        obj.productImg === "" ||
        obj.productCategory.trim() === ""
    ) {
        alert("Please fill all fields correctly");
        return;
    }

    list.push(obj);

    localStorage.setItem("Products", JSON.stringify(list));

    productForm.reset();

    handleDisplay();
});

const handleDisplay = () => {
    display.innerHTML = "";

    list.forEach(p => {
        display.innerHTML += `
            <div class="col-md-3">
                <div class="card border-2 rounded-5 rounded-bottom"
                     style="border: solid blueviolet;">

                    <img src="${p.productImg}"
                         class="card-img-top p-3"
                         alt="${p.productTitle}"
                         style="height:200px; object-fit:contain;">

                    <div class="card-body">
                        <h5 class="card-title">${p.productTitle}</h5>
                        <p class="card-text">₹${p.productPrice}</p>
                        <span>${p.productCategory}</span>

                        <a href="#" class="btn"
                           style="border:solid red; color:red;">
                           Delete
                        </a>

                        <a href="#" class="btn"
                           style="border:solid rgba(255,196,0,0.789);
                                  color:rgba(255,196,0,0.789);">
                           Edit
                        </a>
                    </div>

                </div>
            </div>
        `;
    });
};

handleDisplay();
