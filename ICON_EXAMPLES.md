# Lucide Icons - Hospitality & Restaurant Use Cases

## Icons Perfect for Your Project

### Restaurant Operations
```tsx
import { 
  UtensilsCrossed,    // POS, Dining
  ChefHat,            // Kitchen
  Users,              // Customers
  Clock,              // Timing, Hours
  MapPin,             // Location
  Phone,              // Contact
  Mail,               // Email
  CreditCard,         // Payments
  TrendingUp,         // Growth
  Zap                 // Performance
} from 'lucide-react';
```

### Service Features
```tsx
import {
  Smartphone,         // Mobile Ordering ✅ (Already used)
  BarChart3,          // Analytics ✅ (Already used)
  BookOpen,           // Menu Management
  Users,              // Table Management
  Clock,              // Reservation System
  ShoppingCart,       // Order Management
  Wallet,             // Payment Processing
  Package,            // Delivery
  Settings,           // Configuration
  Zap                 // Quick Features
} from 'lucide-react';
```

### Navigation & UI
```tsx
import {
  ChevronRight,       // Next, Forward ✅ (Already used)
  ChevronDown,        // Expand/Collapse
  Menu,               // Sidebar toggle
  X,                  // Close
  Search,             // Search function
  Filter,             // Filtering options
  Download,           // Export/Download
  Upload,             // Import/Upload
  Heart,              // Favorites
  Share2              // Share features
} from 'lucide-react';
```

### Status & Indicators
```tsx
import {
  CheckCircle,        // Success
  AlertCircle,        // Warning
  XCircle,            // Error
  Info,               // Information
  Clock,              // Pending
  TrendingUp,         // Improvement
  TrendingDown        // Decline
} from 'lucide-react';
```

### Social & Contact
```tsx
import {
  Facebook,           // Social media
  Instagram,          // Social media
  Linkedin,           // Professional
  Twitter,            // Social media
  Mail,               // Email
  Phone,              // Telephone
  Globe,              // Website
  MapPin              // Location
} from 'lucide-react';
```

## Implementation Examples

### Service Cards
```tsx
import { Smartphone, BarChart3, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Mobile Ordering',
    icon: Smartphone,
    description: 'Enable customers to order from their phones'
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    description: 'Track sales and performance metrics'
  },
  {
    title: 'Business Growth',
    icon: TrendingUp,
    description: 'Scale your restaurant operations'
  }
];

{services.map(service => (
  <div key={service.title} className="flex items-start gap-4">
    <service.icon size={24} className="text-amber-500 flex-shrink-0" />
    <div>
      <h3 className="font-bold">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  </div>
))}
```

### Feature List
```tsx
import { CheckCircle } from 'lucide-react';

const features = ['24/7 Support', 'Easy Setup', 'Secure Payments'];

{features.map(feature => (
  <div key={feature} className="flex items-center gap-2">
    <CheckCircle size={20} className="text-green-500" />
    <span className="font-medium">{feature}</span>
  </div>
))}
```

### Button with Icon
```tsx
import { ChevronRight } from 'lucide-react';

<button className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-white rounded-lg">
  Get Started
  <ChevronRight size={18} />
</button>
```

### Icon Grid
```tsx
import { Smartphone, BarChart3, UtensilsCrossed, CreditCard } from 'lucide-react';

const solutions = [
  { icon: Smartphone, label: 'Mobile App' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: UtensilsCrossed, label: 'POS System' },
  { icon: CreditCard, label: 'Payments' }
];

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {solutions.map(({ icon: Icon, label }) => (
    <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100">
      <Icon size={32} className="text-amber-500" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  ))}
</div>
```

## Styling Tips

### Responsive Sizing
```tsx
// Small screens: 20px, Medium: 24px, Large: 32px
<Smartphone className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />

// Or use lucide size prop
<Smartphone size={20} className="md:w-6 lg:w-8" />
```

### Color Variants
```tsx
// Brand color
<icon className="text-amber-500" />

// Status colors
<CheckCircle className="text-green-500" />
<AlertCircle className="text-yellow-500" />
<XCircle className="text-red-500" />

// Theme aware
<icon className={isDarkMode ? 'text-white' : 'text-black'} />
```

### Animations
```tsx
// Rotate animation
<Zap className="animate-spin text-amber-500" />

// Pulse effect
<Bell className="animate-pulse" />

// Custom animation
<ChevronRight className="group-hover:translate-x-1 transition-transform" />
```

## Performance Notes

✅ **Zero Runtime Overhead** - Icons are compiled as static SVGs
✅ **Tree-Shakeable** - Unused icons don't increase bundle size
✅ **No External Requests** - All icons are bundled
✅ **Instant Load** - No icon loading delays

## Migration Checklist

When updating other components, follow this pattern:

1. Import needed icons at top of file
```tsx
import { IconName1, IconName2 } from 'lucide-react';
```

2. Replace SVG code with icon component
```tsx
// Before:
<svg viewBox="0 0 24 24" className="w-6 h-6"><path d="..."/></svg>

// After:
<IconName size={24} />
```

3. Add styling if needed
```tsx
<IconName size={24} className="text-amber-500 hover:text-amber-600" />
```

That's it! Clean, maintainable, and consistent.
