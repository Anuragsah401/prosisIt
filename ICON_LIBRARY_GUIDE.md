# Icon Library Integration Guide

## Overview
The project now uses **Lucide React** for all SVG icons instead of inline generated code. This provides better maintainability, consistency, and performance.

## Installation
Lucide React has been installed and is ready to use.

```bash
npm install lucide-react
```

## How to Use

### Basic Import
```tsx
import { IconName } from 'lucide-react';

// Use in component
<IconName size={24} className="text-amber-500" />
```

### Example Usage in Services.tsx
```tsx
import { ChevronRight, Smartphone, BarChart3 } from 'lucide-react';

// In JSX
<ChevronRight size={16} />
<Smartphone size={32} className="text-black" />
<BarChart3 size={32} className="text-black" />
```

## Available Icons in Project

### Currently Used:
- **ChevronRight** - Arrow icon (Services list items)
- **Smartphone** - Mobile device icon (Mobile Ordering)
- **BarChart3** - Analytics/chart icon (Data Analytics)

### Commonly Needed Icons:
Here are icons you might want to use in other components:

**Navigation:**
- Menu, X, ChevronDown, ChevronUp, ChevronLeft, Home

**UI Elements:**
- Bell, Settings, Search, Heart, Star, Trash, Edit, Copy, Download

**Business:**
- TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Zap

**Media:**
- Image, Video, Camera, Mail, MessageSquare, Phone, Globe

**Status:**
- CheckCircle, AlertCircle, Info, Lock, Unlock, Eye, EyeOff

**Social:**
- Facebook, Instagram, Linkedin, Twitter, Github, Globe

## Complete Icon List
View all 1000+ available icons at: https://lucide.dev/

## Benefits
✅ **Small Bundle Size** - Only imports what you use
✅ **Consistent** - All icons follow the same design language
✅ **Customizable** - Easy to adjust size, color, stroke width
✅ **Accessible** - Proper SVG semantics
✅ **Performance** - No need for image files
✅ **Maintainable** - Change icons in one place

## Customization Examples

### Size Variations
```tsx
<Smartphone size={16} />   {/* Small */}
<Smartphone size={24} />   {/* Medium */}
<Smartphone size={32} />   {/* Large */}
<Smartphone size={48} />   {/* Extra Large */}
```

### Color & Styling
```tsx
<Smartphone className="text-amber-500" />
<Smartphone className="text-white" />
<Smartphone stroke-width={1} />  {/* Thinner */}
<Smartphone stroke-width={3} />  {/* Thicker */}
```

### With Animations
```tsx
<Smartphone className="animate-spin text-amber-500" />
<Smartphone className="hover:text-blue-500 transition-colors" />
```

## Migration Status

### ✅ Completed
- Services.tsx - All icons migrated to Lucide React

### 📋 To Do (Optional)
The following components still use inline SVGs and could be migrated if desired:
- MobileMenuButton.tsx - Hamburger menu icons
- MobileSidebar.tsx - Close button, theme toggle
- ThemeToggleButton.tsx - Sun/Moon icons
- DesktopTopBar.tsx - Arrow icons
- Home.tsx - Arrow icons
- Logo.tsx - Info icon

These work fine as-is, but migration would ensure consistency across the codebase.

## Resources
- **Lucide React Docs**: https://lucide.dev/guide/packages/lucide-react
- **GitHub**: https://github.com/lucide-icons/lucide
- **Icon Search**: https://lucide.dev/
