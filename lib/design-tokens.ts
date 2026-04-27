// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#1FB89A",
    "secondary": "#C9A24B",
    "accent": "#1FB89A",
    "background": "#1A2620",
    "foreground": "#EDEDE6",
    "muted": "#8A8F88",
    "border": "#2C3A33"
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
    "premium",
    "refined"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
