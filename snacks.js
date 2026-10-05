/*
 * ┌────────────────────────────────────────────────────────────┐
 * │  THE SNACK MENU — snack data                                  │
 * │  This is the ONLY file you edit to update the shop.           │
 * │                                                               │
 * │  To add a snack, copy a block below and change the values.    │
 * │  Fields:                                                      │
 * │    emoji     (string)  the snack emoji            [required]  │
 * │    name      (string)  the snack name             [required]  │
 * │    price     (number)  price in dollars           [required]  │
 * │    category  (string)  groups the snack           [required]  │
 * │    badge     (string)  optional tag e.g. "New"    [optional]  │
 * │                                                               │
 * │  New categories appear automatically — no HTML editing.       │
 * └────────────────────────────────────────────────────────────┘
 */

const snacks = [
  {
    emoji: "🍯",
    name: "HoneyBuns",
    price: 2.00,
    category: "Pastries",
    badge: "⭐ Best Seller"
  },
  {
    emoji: "🟢",
    name: "Small Sprite Can",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🌶️",
    name: "Any Kind of Spicy Chips",
    price: 1.00,
    category: "Chips",
    badge: "Popular"
  },
  {
    emoji: "🟢",
    name: "Large Sprites",
    price: 2.00,
    category: "Drinks"
  },
  {
    emoji: "🍋",
    name: "Small Arizona",
    price: 1.00,
    category: "Drinks"
  }
];
