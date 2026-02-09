const STRIPE_SCRIPT_SRC = "https://js.stripe.com/v3/buy-button.js";
const STRIPE_ELEMENT = "stripe-buy-button";

const loadStripeScript = () => {
  const existingScript = document.querySelector(`script[src="${STRIPE_SCRIPT_SRC}"]`);
  if (existingScript) {
    if (window.customElements && customElements.get(STRIPE_ELEMENT)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Failed to load Stripe script.")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const stripeScript = document.createElement("script");
    stripeScript.src = STRIPE_SCRIPT_SRC;
    stripeScript.async = true;
    stripeScript.onload = () => resolve();
    stripeScript.onerror = () => reject(new Error("Failed to load Stripe script."));
    document.head.appendChild(stripeScript);
  });
};

const upgradeStripeButtons = (root) => {
  if (!window.customElements || !customElements.get(STRIPE_ELEMENT)) {
    return false;
  }

  root.querySelectorAll(STRIPE_ELEMENT).forEach((element) => {
    customElements.upgrade(element);
  });

  return true;
};

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll("[data-stripe-button]");
  if (!targets.length) {
    return;
  }

  fetch("/Stripe/button.html", { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load Stripe button: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      targets.forEach((target) => {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        target.replaceChildren(template.content.cloneNode(true));
      });

      if (upgradeStripeButtons(document)) {
        return;
      }

      return loadStripeScript().then(() => {
        upgradeStripeButtons(document);
      });
    })
    .catch((error) => {
      console.error("Failed to load Stripe button:", error);
    });
});
