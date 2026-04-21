// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#2DB89A",
    "secondary": "#1A2E2A",
    "accent": "#C9A961",
    "background": "#0F1A18",
    "foreground": "#E8E6E1",
    "muted": "#8A9894",
    "border": "#2A3C38"
  },
  "typography": {
    "headingFont": "Playfair Display",
    "bodyFont": "Inter",
    "headingWeight": 700,
    "bodyWeight": 400,
    "scale": "normal"
  },
  "layout": {
    "style": "editorial",
    "radius": "sm",
    "density": "normal",
    "containerWidth": "normal"
  },
  "mood": [
    "sophisticated",
    "trustworthy",
    "refined",
    "timeless"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
