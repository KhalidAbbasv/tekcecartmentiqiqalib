$(document).ready(function () {
  $(".slideshow-container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  var prev = $(".slick-prev");
  prev.html('<i class="fa-solid fa-arrow-left"></i>');

  var next = $(".slick-next");
  next.html('<i class="fa-solid fa-arrow-right"></i>');

  // Checkout Page accordion
  $("#create_pwd").on("change", function () {
    $(".account-create").slideToggle("100");
  });

  //about page client feedback
  $('.client-feedback-summary').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //cart page slick
  $('.slick-arrow-style').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  // product view mode change js
  $('.product-view-mode a').on('click', function (e) {
    e.preventDefault();
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
  })

  // product details slider active
  $('.product-large-slider').slick({
    fade: true,
    arrows: false,
    asNavFor: '.pro-nav'
  });


  // product details slider nav active
  $('.pro-nav').slick({
    slidesToShow: 4,
    asNavFor: '.product-large-slider',
    arrows: false,
    focusOnSelect: true
  });

});

//Product page


//cart
const quantityInput = document.getElementById('quantity');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const subtotal = document.getElementById('subtotal');
const subtotalAmount = document.getElementById('sub-total-amount');
const totalAmount = document.getElementById('total-amount');


let total = parseFloat(subtotal.innerText.slice(1));

increaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.textContent);
    quantity += 1;
    quantityInput.textContent = quantity;
    total += 295;
    subtotal.innerText = `$${total.toFixed(2)}`;
    subtotalAmount.innerText = `$${total.toFixed(2)}`;
    totalAmount.innerText = `$${total.toFixed(2)}`;

});
if (subtotal.innerText == `$0`) {
    subtotal.innerText = `${total}`
}
decreaseButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.textContent);
    if (quantity > 1) {
        quantity -= 1;
        quantityInput.textContent = quantity;
        total -= 295;
        subtotal.innerText = `$${total.toFixed(2)}`;
        subtotalAmount.innerText = `$${total.toFixed(2)}`;
        totalAmount.innerText = `$${total.toFixed(2)}`;
    }
});