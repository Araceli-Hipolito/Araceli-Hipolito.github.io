document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".case-media img");

  if (!images.length) return;


  // Create lightbox
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("aria-hidden", "true");

  lightbox.innerHTML = `
    <button
      class="lightbox-close"
      type="button"
      aria-label="Close image"
    >
      ×
    </button>

    <div class="lightbox-content">
      <img
        class="lightbox-image"
        src=""
        alt=""
      >
    </div>
  `;

  document.body.appendChild(lightbox);


  const lightboxImage =
    lightbox.querySelector(".lightbox-image");

  const closeButton =
    lightbox.querySelector(".lightbox-close");


  function openLightbox(image) {

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "";

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");
  }


  function closeLightbox() {

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    setTimeout(() => {
      lightboxImage.src = "";
    }, 250);
  }


  images.forEach((image) => {

    image.addEventListener("click", () => {
      openLightbox(image);
    });

  });


  closeButton.addEventListener(
    "click",
    closeLightbox
  );


  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      lightbox.classList.contains("is-open")
    ) {
      closeLightbox();
    }

  });

});
