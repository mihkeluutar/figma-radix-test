# Customization Guide

This guide explains different ways to customize Radix UI components in your project.

## Project Structure

```
src/ui/components/    # All Radix components (one file per component)
src/themes/custom.css # Global CSS overrides
src/main.jsx         # Theme configuration
```

Each Radix UI component is wrapped in `src/ui/components/` for easy customization.

## Approaches to Customization

### 1. CSS Overrides (Easiest)

**File:** `src/themes/custom.css`

Add global style overrides using CSS:

```css
/* Override button styles */
.rt-Button.rt-variant-solid {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Override card styles */
.rt-Card {
  border: 2px solid var(--accent-9);
}
```

**Pros:**
- Quick and easy
- Global changes
- No code changes needed

**Cons:**
- Less flexible than custom components
- May need !important for specificity

### 2. Edit Component Files (Recommended)

**Location:** `src/ui/components/`

Each component is already wrapped for you. Just edit the files:

**Examples:** `src/ui/components/Button.jsx`, `src/ui/components/Card.jsx`

All Radix components are wrapped in individual files in the ui directory:

```jsx
// src/ui/components/Button.jsx
import { Button as RadixButton } from '@radix-ui/themes'

export function CustomButton({ children, ...props }) {
  return (
    <Button
      style={{
        fontWeight: 600,
        textTransform: 'uppercase',
        // your custom styles
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
```

**Pros:**
- Full control
- Easy to maintain
- Reusable across your app
- Can add custom logic

**Cons:**
- Need to create wrapper components

### 3. Using Radix Primitives (Maximum Control)

**File:** `src/components/ExamplePrimitiveUsage.jsx`

Use the unstyled primitives and build your own components:

```jsx
import * as Dialog from '@radix-ui/react-dialog'

export function CustomDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button style={{ /* your styles */ }}>
          Open
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay style={{ /* your styles */ }} />
        <Dialog.Content style={{ /* your styles */ }}>
          {/* Your custom content */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

**Pros:**
- Complete control over styling
- No theming system constraints
- Can create unique designs

**Cons:**
- More code to write
- Need to handle accessibility yourself (but Radix helps)

### 4. Theme Configuration

**File:** `src/main.jsx`

Customize the global theme:

```jsx
<Theme 
  accentColor="crimson"    // Primary color
  grayColor="sand"          // Neutral colors
  radius="large"            // Border radius
  scaling="95%"             // Size scaling
>
  <App />
</Theme>
```

**Available options:**
- `accentColor`: grass, teal, cyan, blue, indigo, purple, pink, red, orange, yellow
- `grayColor`: slate, sage, olive, sand, taupe, mauve
- `radius`: none, small, medium, large, full
- `scaling`: 90%, 95%, 100%, 105%, 110%

## Available Components

All components are in `src/ui/components/`:

- `Button.jsx` - Button component
- `Card.jsx` - Card component  
- `Dialog.jsx` - Dialog component
- `DropdownMenu.jsx` - Dropdown menu
- `Tabs.jsx` - Tabs
- `Accordion.jsx` - Accordion
- `Popover.jsx` - Popover
- `Tooltip.jsx` - Tooltip
- `Switch.jsx` - Switch
- `Slider.jsx` - Slider

### Example Customizations

See `src/ui/components/CustomButton.jsx` for advanced examples.

For Radix Primitives (unstyled) examples, check `src/ui/components/ExamplePrimitiveUsage.jsx`.

## Where to Find Component Code

### Radix Themes Source
- **GitHub**: https://github.com/radix-ui/themes
- **Documentation**: https://www.radix-ui.com/themes
- **Playground**: https://www.radix-ui.com/themes/playground

### Radix Primitives Source
- **GitHub**: https://github.com/radix-ui/primitives
- **Documentation**: https://www.radix-ui.com/primitives

### In Your Project
- **Installed packages**: `node_modules/@radix-ui/themes` and `node_modules/@radix-ui/react-*`
- **Your components**: `src/ui/components/` - Edit these to customize
- **Global styles**: `src/themes/custom.css` - CSS overrides

## Best Practices

1. **Start with Themes** - Use Radix Themes for rapid development
2. **Customize with Wrappers** - Create wrapper components for your design system
3. **Use Primitives for Unique Designs** - When you need something special
4. **Keep Overrides Minimal** - Prefer components over global CSS
5. **Document Your Customizations** - Add comments to your custom components

## Customization Levels

```
Theme Config (easy)
  ↓
CSS Overrides (easy-medium)
  ↓
Wrapper Components (medium)
  ↓
Radix Primitives (advanced)
```

## Need Help?

- Check the component files in `src/ui/components/`
- See `src/ui/README.md` for detailed documentation
- Look at `src/themes/custom.css` for global overrides
- Modify the Theme component in `src/main.jsx`

