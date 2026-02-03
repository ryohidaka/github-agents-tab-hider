# Privacy Policy — GitHub Agents Tab Hider

> **Effective Date:** February 3, 2026  
> **License:** [MIT](https://opensource.org/licenses/MIT)

---

## 1. Overview

GitHub Agents Tab Hider is a browser extension designed to hide the "Agents" tab that appears on GitHub repository pages. It operates exclusively through CSS rules injected into matching GitHub pages.

> 🛡️ **This extension contains no background scripts, no network requests, and no data collection logic of any kind.**

---

## 2. Data We Do Not Collect

This extension does not collect, store, transmit, or have access to any personal information or user data. This is an architectural guarantee — the extension has no code path that could perform these actions.

Specifically, the extension does **not** collect or access any of the following:

- Browsing history or visited URLs (beyond the CSS match pattern needed to activate).
- Cookies, authentication tokens, or session data.
- GitHub account information, repository contents, or activity.
- Keystrokes, clipboard data, form inputs, or any user-entered text.
- Device identifiers, IP addresses, or geolocation data.
- Any data transmitted to or from GitHub or any third-party service.

---

## 3. How the Extension Works

The extension registers a _content script_ that is scoped to GitHub repository pages matching the pattern `*://github.com/*/*`. When such a page is loaded, a single CSS rule is applied at document start:

```css
li:has(a[href*='/agents'] svg.octicon-agent) {
  display: none !important;
}
```

This rule targets only the specific `<li>` element containing the Agents tab link and icon, setting its display to `none`. No JavaScript execution, DOM traversal, data reading, or network activity occurs.

---

## 4. Permissions

The extension requests only the minimum permissions required to function. Below is a complete list of permissions declared in the extension manifest, along with their purpose:

| Permission     | Purpose                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Content Script | Injects a CSS stylesheet into GitHub repository pages. This is the only mechanism the extension uses to interact with web pages. |

No other browser permissions (such as `tabs`, `storage`, `activeTab`, or `history`) are requested.

---

## 5. Third-Party Services

This extension does not integrate with, communicate with, or share data with any third-party services, analytics platforms, or advertising networks.

---

## 6. Data Storage

The extension does not use any browser storage APIs (such as `chrome.storage`, `localStorage`, or `IndexedDB`). No data of any kind is persisted locally or remotely.

---

## 7. Changes to This Policy

If changes are made to this privacy policy, the updated policy will be published in this document and noted in the extension's release notes on GitHub. Continued use of the extension after a policy update constitutes acceptance of the revised policy.

---

## 8. Contact

If you have questions or concerns about this privacy policy, please open an issue on the project's GitHub repository:

[github.com/ryohidaka/github-agents-tab-hider/issues](https://github.com/ryohidaka/github-agents-tab-hider/issues)

---

_© 2026 ryohidaka · GitHub Agents Tab Hider · Released under the [MIT License](https://opensource.org/licenses/MIT)_

_This extension is an independent project and is not affiliated with or endorsed by GitHub, Inc._
