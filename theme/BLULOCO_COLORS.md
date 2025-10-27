# Bluloco Light Color Reference

Official colors from [Bluloco Light VSCode Theme](https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-light)

## Syntax Palette

| Scope | Color | HEX | RGB |
|-------|-------|-----|-----|
| Background | ![#f9f9f9](https://via.placeholder.com/50x20/f9f9f9/f9f9f9.png) | #f9f9f9 | rgb(249, 249, 249) |
| Foreground | ![#383a42](https://via.placeholder.com/50x20/383a42/383a42.png) | #383a42 | rgb(56, 58, 66) |
| Comment | ![#a0a1a7](https://via.placeholder.com/50x20/a0a1a7/a0a1a7.png) | #a0a1a7 | rgb(160, 161, 167) |
| Keyword | ![#0098dd](https://via.placeholder.com/50x20/0098dd/0098dd.png) | #0098dd | rgb(0, 152, 221) |
| Function/Method | ![#23974a](https://via.placeholder.com/50x20/23974a/23974a.png) | #23974a | rgb(35, 151, 74) |
| Property | ![#a05a48](https://via.placeholder.com/50x20/a05a48/a05a48.png) | #a05a48 | rgb(160, 90, 72) |
| String | ![#c5a332](https://via.placeholder.com/50x20/c5a332/c5a332.png) | #c5a332 | rgb(197, 163, 50) |
| Number | ![#ce33c0](https://via.placeholder.com/50x20/ce33c0/ce33c0.png) | #ce33c0 | rgb(206, 51, 192) |
| Constant | ![#823ff1](https://via.placeholder.com/50x20/823ff1/823ff1.png) | #823ff1 | rgb(130, 63, 241) |
| Markup Tag | ![#275fe4](https://via.placeholder.com/50x20/275fe4/275fe4.png) | #275fe4 | rgb(39, 95, 228) |
| Markup Attribute | ![#df631c](https://via.placeholder.com/50x20/df631c/df631c.png) | #df631c | rgb(223, 99, 28) |
| Class/Type/Interface | ![#d52753](https://via.placeholder.com/50x20/d52753/d52753.png) | #d52753 | rgb(213, 39, 83) |
| Operator/Punctuation | ![#7a82da](https://via.placeholder.com/50x20/7a82da/7a82da.png) | #7a82da | rgb(122, 130, 218) |

## How We Use These Colors

In `theme/atomOneLight.ts`:

```typescript
export const blulocoLight = {
  '--bg': '#f9f9f9',          // Background
  '--text': '#383a42',        // Foreground
  '--muted': '#a0a1a7',       // Comment
  '--accent': '#823ff1',      // Constant (purple)
  '--accent-2': '#23974a',    // Function/Method (green)
  '--accent-blue': '#0098dd', // Keyword (blue)
  '--accent-pink': '#d52753', // Class/Type/Interface
  '--accent-yellow': '#c5a332', // String (gold)
  '--accent-orange': '#df631c', // Markup Attribute
  '--link': '#275fe4',        // Markup Tag (blue)
  '--project': '#7a82da',     // Operator/Punctuation
  // ... more colors
};
```

## About Bluloco Light

- **Author**: Umut Topuzoğlu
- **Installs**: 469,594+
- **Description**: A fancy but yet sophisticated light designer color scheme / theme
- **Special**: Works very well with Apple's Nightshift Mode
- **Origin**: Originally forked from One Light Theme, enhanced with the Bluloco color palette

This theme features comprehensive syntax scopes and color consistency with due regard to aesthetics, contrast, and readability.

