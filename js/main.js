const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
});

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});

$(".questions-head").on("click", function () {
    const currentItem = $(this).parent();

    if (currentItem.hasClass("active")) {
        currentItem.removeClass("active");
        currentItem.find(".questions-body").slideUp();
        return;
    }

    $(".questions-element").removeClass("active");
    $(".questions-body").slideUp();

    currentItem.addClass("active");
    currentItem.find(".questions-body").slideDown();
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      form.reset(); 
      alert("Message sent successfully!");
    }
  });
});
