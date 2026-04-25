// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#2BB89A",
    "secondary": "#1F4D43",
    "accent": "#D4A24C",
    "background": "#1A2420",
    "foreground": "#E8E4DC",
    "muted": "#8A9290",
    "border": "#2D3935"
  },
  "typography": {
    "headingFont": "Playfair Display",
    "bodyFont": "Inter",
    "headingWeight": 700,
    "bodyWeight": 400,
    "scale": "spacious"
  },
  "layout": {
    "style": "editorial",
    "radius": "sm",
    "density": "airy",
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
