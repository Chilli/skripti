// Bygger siden ut fra innholdet i prosjekter.js. Du trenger ikke endre denne filen.

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of [].concat(children)) if (child) node.append(child);
  return node;
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/[æ]/g, "ae").replace(/[ø]/g, "o").replace(/[å]/g, "a")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function placeholder(navn) {
  return el("div", { class: "shot placeholder" }, [
    el("span", { text: "Skjermbilde kommer" }),
    el("small", { text: navn }),
  ]);
}

function screenshot(src, navn, index) {
  const img = el("img", { src, alt: `Skjermbilde ${index + 1} av ${navn}`, loading: "lazy" });
  const button = el("button", { class: "shot", type: "button", "aria-label": `Vis større: ${img.alt}` }, img);
  img.addEventListener("error", () => button.replaceWith(placeholder(navn)));
  button.addEventListener("click", () => openLightbox(src, img.alt));
  return button;
}

function projectCard(p, i) {
  const bilder = p.bilder && p.bilder.length ? p.bilder : [null];
  const gallery = el(
    "div",
    { class: `gallery count-${Math.min(bilder.length, 3)}` },
    bilder.map((src, n) => (src ? screenshot(src, p.navn, n) : placeholder(p.navn)))
  );

  const body = el("div", { class: "project-body" }, [
    el("div", { class: "meta" }, [
      el("span", { class: "num", text: String(i + 1).padStart(2, "0") }),
      p.status ? el("span", { class: "status", text: p.status }) : null,
    ]),
    el("h2", { text: p.navn }),
    p.undertittel ? el("p", { class: "subtitle", text: p.undertittel }) : null,
    el("p", { class: "desc", text: p.tekst }),
    p.punkter && p.punkter.length
      ? el("ul", { class: "points" }, p.punkter.map((t) => el("li", { text: t })))
      : null,
    p.lenke
      ? el("a", { class: "button", href: p.lenke, target: "_blank", rel: "noopener", text: `${p.lenketekst || "Åpne"} →` })
      : null,
  ]);

  return el("article", { class: "project", id: slug(p.navn) }, [body, gallery]);
}

const lightbox = document.getElementById("lightbox");
function openLightbox(src, alt) {
  const img = lightbox.querySelector("img");
  img.src = src;
  img.alt = alt;
  lightbox.showModal();
}
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("close")) lightbox.close();
});

// Fyll inn siden
document.getElementById("hero-tittel").textContent = OM_MEG.tittel;
document.getElementById("hero-ingress").textContent = OM_MEG.ingress;
document.getElementById("hero-chips").append(
  ...PROSJEKTER.map((p) => el("li", {}, el("a", { href: `#${slug(p.navn)}`, text: p.navn })))
);
document.getElementById("prosjekter").append(...PROSJEKTER.map(projectCard));

const epost = document.getElementById("epost");
epost.textContent = OM_MEG.epost;
epost.href = `mailto:${OM_MEG.epost}`;
document.getElementById("aar").textContent = new Date().getFullYear();
