#!/usr/bin/env python3
"""Generate public/og-image.png (1200x630) for Open Graph. Requires Pillow."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og-image.png"

W, H = 1200, 630
BG = (250, 248, 243)  # #FAF8F3
ACCENT = (212, 165, 116)  # #D4A574
TEXT = (43, 37, 32)  # #2B2520
SUB = (139, 115, 85)  # #8B7355


def _load_serif(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf",
    ]
    for path in candidates:
        if os.path.isfile(path):
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default()


def _load_sans(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for path in candidates:
        if os.path.isfile(path):
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default()


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    draw.rectangle((0, 0, W, 14), fill=ACCENT)

    font_title = _load_serif(96)
    font_tag = _load_serif(42)
    font_sub = _load_sans(26)

    title = "Sovány"
    tag = "Endless Summer"
    sub = "Organic sparkling  ·  Brand world & investment"

    # Vertical stack, centered
    bbox_t = draw.textbbox((0, 0), title, font=font_title)
    bbox_g = draw.textbbox((0, 0), tag, font=font_tag)
    bbox_s = draw.textbbox((0, 0), sub, font=font_sub)

    h_t = bbox_t[3] - bbox_t[1]
    h_g = bbox_g[3] - bbox_g[1]
    h_s = bbox_s[3] - bbox_s[1]
    gap1, gap2 = 18, 22
    block_h = h_t + gap1 + h_g + gap2 + h_s
    y0 = (H - block_h) // 2 + 10

    def draw_centered(text: str, y: int, font, fill) -> int:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        x = (W - tw) // 2
        draw.text((x, y), text, font=font, fill=fill)
        return y + (bbox[3] - bbox[1])

    y = y0
    y = draw_centered(title, y, font_title, TEXT) + gap1
    y = draw_centered(tag, y, font_tag, TEXT) + gap2
    draw_centered(sub, y, font_sub, SUB)

    img.save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} ({W}x{H})")


if __name__ == "__main__":
    main()
