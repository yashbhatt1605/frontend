const formatCurrency = (amount) => {
  if (amount === null || amount === undefined || String(amount).trim() === "") {
    return "Price unavailable";
  }

  if (typeof amount === "number" && Number.isFinite(amount)) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  const raw = String(amount).trim();
  if (/[a-zA-Z]/.test(raw)) return raw;
  const numericText = raw.replace(/[^0-9.-]/g, "");
  const numericAmount = Number(numericText);

  if (numericText && Number.isFinite(numericAmount)) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(numericAmount);
  }

  // Preserve values such as "12 lakh" rather than hiding them.
  return raw;
};

export default formatCurrency;
