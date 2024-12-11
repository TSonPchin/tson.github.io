let allProducts = []; // Lưu trữ tất cả các món ăn

// Hàm khởi tạo sản phẩm (gọi 1 lần khi trang được tải)
function initializeProducts() {
    const products = document.querySelectorAll('.product');
    allProducts = Array.from(products); // Lưu tất cả sản phẩm vào mảng
}

// Hàm lọc sản phẩm theo danh mục
function filterProducts(category) {
    const productGrid = document.getElementById('product-grid');

    // 1. Thêm lớp 'removing' cho tất cả các món ăn không thuộc danh mục đã chọn để tạo hiệu ứng mờ dần
    allProducts.forEach(product => {
        product.classList.add('removing');  // Áp dụng hiệu ứng mờ dần
    });

    // 2. Chờ cho hiệu ứng mờ dần hoàn tất (1 giây)
    setTimeout(() => {
        // 3. Xóa tất cả các sản phẩm khỏi DOM
        productGrid.innerHTML = '';

        // 4. Nếu danh mục 'all' được chọn, thêm tất cả các sản phẩm trở lại
        if (category === 'all') {
            allProducts.forEach(product => {
                productGrid.appendChild(product);
                product.classList.remove('removing'); // Loại bỏ hiệu ứng mờ dần
            });
        } else {
            // 5. Nếu một danh mục khác được chọn, thêm các món ăn phù hợp
            allProducts.forEach(product => {
                if (product.getAttribute('data-category') === category) {
                    productGrid.appendChild(product);
                    product.classList.remove('removing'); // Loại bỏ hiệu ứng mờ dần
                }
            });
        }
    }, 1000);  // Chờ cho hiệu ứng mờ dần (1 giây) trước khi phóng to món ăn
}

// Gọi hàm initializeProducts khi trang được tải
document.addEventListener('DOMContentLoaded', initializeProducts);
