(() => {
  const $ = (id) => document.getElementById(id);
  const data = window.SITE;

  if (!data) {
    console.error("SITE data not found. Make sure content.js loads before script.js");
    return;
  }

  // Mobile nav toggle
  const menuBtn = $("menuBtn");
  const navLinks = $("navLinks");
  menuBtn?.addEventListener("click", () => navLinks.classList.toggle("show"));

  // Title/brand
  document.title = data.title || "Restaurant";
  $("pageTitle").textContent = data.title || "Restaurant";
  $("brandName").textContent = data.brand || "Restaurant";

  // Hero
  $("heroHeadline").textContent = data.hero?.headline || "";
  $("heroSubhead").textContent = data.hero?.subhead || "";
  $("heroMeta").textContent = data.hero?.meta || "";

  const heroImg = $("heroImg");
  if (heroImg && data.hero?.image) {
    heroImg.src = data.hero.image;
  }

  // About
  $("aboutTitle").textContent = data.about?.title || "About";
  $("aboutText").textContent = data.about?.text || "";

  // Menu note
  $("menuNote").textContent = data.menuNote || "";

  // ---------- MENU RENDER (with optional images) ----------
  const menuGrid = $("menuGrid");
  menuGrid.innerHTML = "";

  (data.menu || []).forEach((section) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = section.category || "Menu";
    card.appendChild(title);

    (section.items || []).forEach((it) => {
      const row = document.createElement("div");
      row.className = "menuItem";

      // ✅ OPTION: menu item image (only shows if it.image exists)
      if (it.image) {
        const imgWrap = document.createElement("div");
        imgWrap.className = "menuImgWrap";

        const img = document.createElement("img");
        img.className = "menuImg";
        img.src = it.image;
        img.alt = it.name ? `${it.name} photo` : "Menu item photo";
        img.loading = "lazy";

        imgWrap.appendChild(img);
        row.appendChild(imgWrap);
      }

      const meta = document.createElement("div");
      meta.className = "meta";

      const nameRow = document.createElement("div");
      nameRow.className = "menuNameRow";

      const name = document.createElement("h4");
      name.textContent = it.name || "Item";

      const price = document.createElement("div");
      price.className = "price";
      price.textContent = it.price || "";

      nameRow.appendChild(name);
      nameRow.appendChild(price);

      const desc = document.createElement("p");
      desc.textContent = it.desc || "";

      meta.appendChild(nameRow);
      meta.appendChild(desc);

      row.appendChild(meta);
      card.appendChild(row);
    });

    menuGrid.appendChild(card);
  });

  // Hours
  const hoursList = $("hoursList");
  hoursList.innerHTML = "";
  (data.hours || []).forEach((h) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${h.day || ""}</span><b>${h.time || ""}</b>`;
    hoursList.appendChild(li);
  });

  // Contact
  $("contactNote").textContent = data.contact?.note || "";
  $("phoneText").textContent = data.contact?.phone || "";
  $("emailText").textContent = data.contact?.email || "";
  $("addressText").textContent = data.contact?.address || "";

  // Phone links
  const phoneRaw = (data.contact?.phone || "").replace(/[^\d+]/g, "");
  const phoneHref = phoneRaw ? `tel:${phoneRaw}` : "#";
  $("phoneLink").href = phoneHref;
  $("callBtn").href = phoneHref;

  // Email link
  $("emailLink").href = data.contact?.email ? `mailto:${data.contact.email}` : "#";

  // Maps link
  const addr = data.contact?.address || "";
  const mapsQ = encodeURIComponent(addr);
  $("mapsLink").href = addr ? `https://www.google.com/maps/search/?api=1&query=${mapsQ}` : "#";

  // Click-to-copy address
  $("addressText")?.addEventListener("click", async () => {
    if (!addr) return;
    try {
      await navigator.clipboard.writeText(addr);
      $("addressText").textContent = addr + " (copied)";
      setTimeout(() => ($("addressText").textContent = addr), 1200);
    } catch {}
  });

  // Social links
  const socials = $("socialLinks");
  socials.innerHTML = "";
  (data.contact?.socials || [])
    .filter((s) => s.url && s.url.trim() !== "")
    .forEach((s) => {
      const a = document.createElement("a");
      a.className = "link";
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = s.label || "Link";
      socials.appendChild(a);
    });

  // Gallery
  const gallery = $("galleryGrid");
  gallery.innerHTML = "";
  (data.gallery || []).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery photo";
    img.loading = "lazy";
    gallery.appendChild(img);
  });
})();
