const badgeCountContainer = document.getElementById('badgeCountContainer');
const countItems = document.getElementById('countItems');

const heroBtn = document.querySelectorAll('.hero-btn');
let titleCount = 1;
let totalPrice = 0;
for (const btn of heroBtn) {
   btn.addEventListener('click',()=>{
    const title = btn.parentNode.parentNode.querySelector('h2').innerText;
    const price = getStrToNumberById(btn.parentNode.parentNode.querySelector('p').innerText.split(' ')[0]);

    const titleContainer = document.getElementById('titleContainer');
    const p = document.createElement('p');
    p.innerText = titleCount + '. ' + title;
    badgeCountContainer.innerText = titleCount;
    countItems.innerText = titleCount;
    titleContainer.appendChild(p);
    titleCount++;

    totalPrice += price;
    const totalPriceContainer = document.getElementById('totalPriceContainer');
    totalPriceContainer.innerText = totalPrice + " tk";

    if (totalPrice > 0) {
        const purchaseBtn = document.getElementById('purchaseBtn');
        purchaseBtn.removeAttribute('disabled');
    }

    Swal.fire({
        title: title,
        text: "Add to cart successfully.",
        icon: "success"
    });

   });
}

const couponInput = document.getElementById('couponInput');
const couponBtn = document.getElementById('couponBtn');
couponInput.addEventListener('keyup', (e)=>{
    const couponCode = 'SELL200';
    if (e.target.value === couponCode) {
        couponBtn.removeAttribute('disabled');
    }else{
        couponBtn.setAttribute('disabled',true);
    }
});

couponBtn.addEventListener('click',()=>{
    if (totalPrice >= 200) {
        const discountContainer = document.getElementById('discountContainer');
        const discountAmount = totalPrice * 0.2;
        discountContainer.innerText = discountAmount.toFixed(2) + " tk";
        const netPriceContainer = document.getElementById('netPriceContainer');
        const price = totalPrice - discountAmount;
        netPriceContainer.innerText = price.toFixed(2) + " tk"
        couponInput.value = '';
    }else{
        alert('Please at least 200tk khoroch koren!')
    }
});