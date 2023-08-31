const categories = document.querySelectorAll('.category');
const productList = document.querySelector('.product-list');
const productDetails = document.querySelector('.product-details');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const productStatus = document.querySelector('.product-status');
const buyButton = document.querySelector('.buy-button');
const productImage = document.querySelector('.product-image');

const productsByCategory = {
    'Художня література': [{
            image: 'product1.png',
            name: 'Жага',
            price: 210,
            status: 'В наявності',

        },

        {
            image: 'product1.png',
            name: 'Ідеальна дитина',
            price: 250,
            status: 'В наявності',
        },

        {
            image: 'product1.png',
            name: 'Обраниці',
            price: 320,
            status: 'В наявності',
        },

    ],

    'Дитяча література': [{
            image: 'product1.png',
            name: 'День попелу',
            price: 270,
            status: 'В наявності',

        },

        {
            image: 'product1.png',
            name: 'Грона гніву',
            price: 20,
            status: 'В наявності',
        },

        {
            image: 'product1.png',
            name: 'Скляний замок',
            price: 700,
            status: 'В наявності',
        },
    ],

    'Пізнавальна література': [{
            image: 'product1.png',
            name: 'Гімн',
            price: 720,
            status: 'В наявності',

        },

        {
            image: 'product1.png',
            name: 'Про мишей і людей',
            price: 20,
            status: 'В наявності',
        },

        {
            image: 'product1.png',
            name: 'Зберігачі',
            price: 200.90,
            status: 'В наявності',
        },
    ],
};
categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.textContent;
        const products = productsByCategory[categoryName];

        productList.innerHTML = '';

        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = product.name;
            listItem.dataset.price = product.price;
            listItem.dataset.image = product.image;
            listItem.dataset.status = product.status;
            productList.appendChild(listItem);

            listItem.addEventListener('click', () => {
                productName.textContent = product.name;
                productPrice.textContent = product.price;
                productStatus.textContent = product.status;
                productImage.src = `./images/${product.image}`;
                productDetails.style.display = 'block';
            });
        });

        productDetails.style.display = 'none';
    });
});

buyButton.addEventListener('click', () => {
    alert('Товар куплений');
    productDetails.style.display = 'none';
});