(() => {
  const menu = document.getElementById("mobile-menu");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".menu-close");

  const open = () => {
    menu.classList.add("is-open");
    openBtn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    menu.classList.remove("is-open");
    openBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  menu?.addEventListener("click", (e) => {
    if (e.target === menu) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) close();
  });
})();
