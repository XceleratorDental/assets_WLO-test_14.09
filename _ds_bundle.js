/* @ds-bundle: {"format":3,"namespace":"WestLondonOrthodonticsDesignSystem_707279","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"eb3a0c7b0249","components/core/Badge.jsx":"1892a012b8aa","components/core/Button.jsx":"5e44a728fed6","components/forms/Input.jsx":"f1d18b7cdb31","components/forms/Select.jsx":"2f5b9f43822c","components/surfaces/Card.jsx":"637fda5b84d4","components/surfaces/StatCard.jsx":"ea58c2c92a51","ui_kits/website/site.jsx":"573d6261ac1a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WestLondonOrthodonticsDesignSystem_707279 = window.WestLondonOrthodonticsDesignSystem_707279 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — Avatar
 * Round portrait for team members / patients, with initials fallback.
 */
function Avatar({
  src = "",
  name = "",
  size = 48,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: "var(--wlo-mauve-100)",
      color: "var(--wlo-mauve-700)",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-semibold)",
      fontSize: Math.round(size * 0.36),
      letterSpacing: "0.02em",
      boxShadow: ring ? "0 0 0 3px var(--wlo-bone), 0 0 0 4px var(--wlo-mauve-200)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "•");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — Badge
 * Small status / category pill. Tones draw only from the core brand palette.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: {
        bg: "var(--wlo-stone-200)",
        fg: "var(--wlo-stone-700)"
      },
      solid: {
        bg: "var(--wlo-ink)",
        fg: "#fff"
      }
    },
    accent: {
      soft: {
        bg: "var(--wlo-mauve-050)",
        fg: "var(--wlo-mauve-600)"
      },
      solid: {
        bg: "var(--accent)",
        fg: "#fff"
      }
    },
    brass: {
      soft: {
        bg: "var(--wlo-brass-200)",
        fg: "var(--wlo-brass-600)"
      },
      solid: {
        bg: "var(--wlo-brass-500)",
        fg: "#fff"
      }
    }
  };
  const c = solid ? tones[tone].solid : tones[tone].soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 11px",
      fontFamily: "var(--font-ui)",
      fontSize: "11px",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      background: c.bg,
      color: c.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — Button
 * Pill-shaped, calm, confident. Ink is the default action; Mauve is the
 * warm brand accent; Outline / Ghost for secondary and quiet actions.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  type = "button",
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: "12px"
    },
    md: {
      padding: "13px 26px",
      fontSize: "13px"
    },
    lg: {
      padding: "17px 34px",
      fontSize: "14px"
    }
  };
  const variants = {
    primary: {
      background: "var(--wlo-ink)",
      color: "var(--wlo-porcelain)",
      border: "1px solid var(--wlo-ink)"
    },
    accent: {
      background: "var(--accent)",
      color: "#fff",
      border: "1px solid var(--accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--wlo-ink)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      width: full ? "100%" : "auto",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — Input
 * Labelled text field. Calm, generous padding, mauve focus ring.
 */
function Input({
  label = "",
  hint = "",
  error = "",
  id,
  type = "text",
  style = {},
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-ui)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.04em",
      color: "var(--text-secondary)",
      marginBottom: "7px"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "13px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-primary)",
      background: "var(--wlo-white)",
      border: "1px solid " + (error ? "var(--wlo-error)" : focused ? "var(--accent)" : "var(--border-default)"),
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focused ? "var(--ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12px",
      marginTop: "6px",
      color: error ? "var(--wlo-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — Select
 * Labelled native select, styled to match Input with a custom chevron.
 */
function Select({
  label = "",
  hint = "",
  id,
  options = [],
  style = {},
  ...rest
}) {
  const selId = id || (label ? "sel-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: "block",
      fontFamily: "var(--font-ui)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.04em",
      color: "var(--text-secondary)",
      marginBottom: "7px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      WebkitAppearance: "none",
      padding: "13px 40px 13px 16px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-primary)",
      background: "var(--wlo-white)",
      border: "1px solid " + (focused ? "var(--accent)" : "var(--border-default)"),
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focused ? "var(--ring)" : "none",
      cursor: "pointer",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: "12px"
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12px",
      marginTop: "6px",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — Card
 * Warm white surface with soft elevation. Optional cover image, eyebrow,
 * title, body and footer slot. The workhorse container for the brand.
 */
function Card({
  image = "",
  imageAlt = "",
  eyebrow = "",
  title = "",
  children,
  footer = null,
  interactive = false,
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 2",
      overflow: "hidden",
      background: "var(--wlo-linen)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-brand)",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      lineHeight: 1.25
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-secondary)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "8px"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * West London Orthodontics — StatCard
 * Compact credibility tile: a large figure over a small label. Works on
 * light surfaces (default) or dark feature sections (tone="dark").
 */
function StatCard({
  value = "",
  label = "",
  tone = "light",
  align = "left",
  style = {},
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      padding: "var(--space-5) var(--space-6)",
      background: dark ? "transparent" : "var(--surface-card)",
      border: dark ? "1px solid var(--border-inverse)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: "var(--text-4xl)",
      fontWeight: "var(--fw-extralight)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: dark ? "var(--text-on-dark)" : "var(--text-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: dark ? "var(--text-accent)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site.jsx
try { (() => {
/* West London Orthodontics — Website UI kit
   Homepage sections + interactive app shell.
   Composes the design-system primitives from the compiled bundle. */

const WLO = window.WestLondonOrthodonticsDesignSystem_707279;
const {
  Button,
  Badge,
  Card,
  StatCard,
  Input,
  Select,
  Avatar
} = WLO;
const IMG = "../../assets/images/";
const LOGO = "../../assets/logos/wlo-logo-full.svg";

/* ---------- Header ---------------------------------------------------- */
function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const links = ["Treatments", "About", "Our team", "Patients", "Contact"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--wlo-ink)",
      borderBottom: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 76,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "West London Orthodontist",
    style: {
      height: 52
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    },
    className: "site-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-on-dark)",
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: ".01em"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--wlo-mauve-300)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-on-dark)"
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+442000000000",
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: ".04em"
    },
    className: "site-phone"
  }, "020 0000 0000"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Book a consultation"))));
}

/* ---------- Hero ------------------------------------------------------ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      background: "var(--wlo-ink)",
      color: "var(--text-on-dark)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "hallway-pendants.jpg",
    alt: "West London Orthodontics interior",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wlo-warm-veil",
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wlo-container",
    style: {
      position: "relative",
      paddingTop: 110,
      paddingBottom: 120,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wlo-eyebrow",
    style: {
      color: "var(--wlo-mauve-300)"
    }
  }, "Specialist orthodontics \xB7 West London"), /*#__PURE__*/React.createElement("h1", {
    className: "wlo-display",
    style: {
      color: "#fff",
      maxWidth: 720,
      margin: "18px 0 0",
      fontSize: 66
    }
  }, "Straighten with confidence"), /*#__PURE__*/React.createElement("p", {
    className: "wlo-lead",
    style: {
      color: "var(--text-on-dark)",
      maxWidth: 540,
      marginTop: 22
    }
  }, "A calmer, design\u2011led way to a smile you'll love \u2014 clear aligners and braces for children, teens and adults, shaped around you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Book a consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,.4)"
    }
  }, "Explore treatments"))));
}

/* ---------- Trust bar ------------------------------------------------- */
function TrustBar() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wlo-charcoal)",
      borderBottom: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 26,
      paddingBottom: 26
    }
  }, [["20+", "Years in West London"], ["4,000+", "Smiles transformed"], ["5.0", "Average patient review"], ["GDC", "Registered specialists"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-brand)",
      fontWeight: 200,
      fontSize: 32,
      color: "#fff",
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--wlo-mauve-300)"
    }
  }, l)))));
}

/* ---------- Treatments ------------------------------------------------ */
const TREATMENTS = [{
  cat: "Adults",
  img: "consult-aligner.jpg",
  eyebrow: "Clear aligners",
  title: "Invisalign",
  body: "Discreet, removable aligners tailored to your teeth — straighten without anyone noticing.",
  price: "from £2,900"
}, {
  cat: "Adults",
  img: "treatment-room-itero.jpg",
  eyebrow: "Fixed braces",
  title: "Ceramic & metal braces",
  body: "Precise, reliable correction for complex cases, with tooth‑coloured options.",
  price: "from £3,200"
}, {
  cat: "Children",
  img: "consult-model.jpg",
  eyebrow: "For young smiles",
  title: "Children's orthodontics",
  body: "Specialist early‑intervention and teen treatment in a calm, friendly setting.",
  price: "NHS & private"
}, {
  cat: "Adults",
  img: "img-5677.jpg",
  eyebrow: "Finishing touches",
  title: "Retainers & whitening",
  body: "Protect your result and brighten your smile with bespoke retainers and whitening.",
  price: "from £350"
}];
function Treatments() {
  const [filter, setFilter] = React.useState("All");
  const tabs = ["All", "Adults", "Children"];
  const shown = TREATMENTS.filter(t => filter === "All" || t.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 20,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "wlo-eyebrow",
    style: {
      color: "var(--text-accent)"
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "wlo-h1",
    style: {
      marginTop: 12,
      marginBottom: 0
    }
  }, "Treatments for every smile")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      padding: "9px 18px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      border: "1px solid " + (filter === t ? "var(--wlo-ink)" : "var(--border-default)"),
      background: filter === t ? "var(--wlo-ink)" : "transparent",
      color: filter === t ? "#fff" : "var(--text-secondary)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 22
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.title,
    image: IMG + t.img,
    eyebrow: t.eyebrow,
    title: t.title,
    interactive: true,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, t.price), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-accent)",
        fontWeight: 600,
        fontSize: 14
      }
    }, "Learn more \u2192"))
  }, t.body)))));
}

/* ---------- Why us (dark fret section) -------------------------------- */
function WhyUs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wlo-fret-accent",
    style: {
      color: "var(--text-on-dark)",
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "wlo-eyebrow",
    style: {
      color: "var(--wlo-mauve-300)"
    }
  }, "Why West London Orthodontics"), /*#__PURE__*/React.createElement("h2", {
    className: "wlo-h1",
    style: {
      color: "#fff",
      marginTop: 14
    }
  }, "Specialist care, without the clinical chill"), /*#__PURE__*/React.createElement("p", {
    className: "wlo-lead",
    style: {
      color: "var(--text-on-dark)",
      maxWidth: 520,
      marginTop: 8
    }
  }, "Award\u2011winning specialist orthodontists, digital iTero scanning and a townhouse clinic designed to put you at ease \u2014 fresh flowers and all."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 14,
      marginTop: 30,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    value: "iTero",
    label: "Digital scanning"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    value: "0%",
    label: "Finance available"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    value: "6",
    label: "Day\u2011a\u2011week clinic"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Meet the team"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      aspectRatio: "4/5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "doctor-doorway.jpg",
    alt: "Dr Chaw-Su Kyi",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))));
}

/* ---------- Testimonial ----------------------------------------------- */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container wlo-container--narrow",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wlo-eyebrow",
    style: {
      color: "var(--text-accent)"
    }
  }, "Patient stories"), /*#__PURE__*/React.createElement("blockquote", {
    className: "wlo-h2",
    style: {
      fontWeight: 300,
      margin: "22px 0 0",
      color: "var(--text-primary)"
    }
  }, "\u201CFrom the flowers in reception to the final reveal, every visit felt calm and considered. I finally love my smile.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Amira K",
    size: 44,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Amira K."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Invisalign \xB7 Ealing")))));
}

/* ---------- Booking form ---------------------------------------------- */
function Booking() {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    style: {
      background: "var(--surface-sunken)",
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "wlo-eyebrow",
    style: {
      color: "var(--text-accent)"
    }
  }, "Book a consultation"), /*#__PURE__*/React.createElement("h2", {
    className: "wlo-h1",
    style: {
      marginTop: 14
    }
  }, "Start with a relaxed conversation"), /*#__PURE__*/React.createElement("p", {
    className: "wlo-body",
    style: {
      color: "var(--text-secondary)",
      maxWidth: 460
    }
  }, "Tell us a little about what you're looking for. We'll be in touch to arrange your initial consultation and digital scan \u2014 no pressure, no jargon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      marginTop: 24,
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xB7 West London"), /*#__PURE__*/React.createElement("span", null, "\xB7 Finance available"), /*#__PURE__*/React.createElement("span", null, "\xB7 GDC registered"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border-subtle)",
      padding: 32
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      paddingBlock: 30
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    solid: true
  }, "Request received"), /*#__PURE__*/React.createElement("h3", {
    className: "wlo-h3",
    style: {
      marginTop: 18
    }
  }, "Thank you \u2014 we'll be in touch shortly."), /*#__PURE__*/React.createElement("p", {
    className: "wlo-body-sm",
    style: {
      color: "var(--text-muted)"
    }
  }, "A member of our team will call to arrange your visit."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    style: {
      marginTop: 10
    },
    onClick: () => setDone(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "07\u2026"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Treatment of interest",
    options: ["Clear aligners (Invisalign)", "Fixed braces", "Children's orthodontics", "Retainers & whitening", "Not sure yet"]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    full: true,
    type: "submit",
    style: {
      marginTop: 4
    }
  }, "Request my consultation")))));
}

/* ---------- Footer ---------------------------------------------------- */
function SiteFooter() {
  const cols = [["Treatments", ["Invisalign", "Fixed braces", "Children's orthodontics", "Retainers & whitening"]], ["Practice", ["About us", "Our team", "Patient stories", "Fees & finance"]], ["Visit", ["Book online", "Contact", "Opening hours", "Find us"]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "wlo-fret-dark",
    style: {
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wlo-container",
    style: {
      paddingTop: 64,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "West London Orthodontist",
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "wlo-body-sm",
    style: {
      color: "var(--text-on-dark-muted)",
      maxWidth: 280,
      marginTop: 18
    }
  }, "Specialist orthodontics & cosmetic dental studios in the heart of West London.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--wlo-mauve-300)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-on-dark)",
      fontSize: 14
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 22,
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      color: "var(--text-on-dark-muted)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 West London Orthodontics. Regulated by the General Dental Council."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Complaints \xB7 Terms"))));
}

/* ---------- App ------------------------------------------------------- */
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Treatments, null), /*#__PURE__*/React.createElement(WhyUs, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Booking, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
