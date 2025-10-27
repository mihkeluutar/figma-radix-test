# UI Directory

This directory contains all UI components for your application.

## Structure

```
src/ui/
├── components/        # Individual component files (one per component)
│   ├── Button.jsx     # Customizable button component
│   ├── Card.jsx        # Customizable card component
│   ├── Dialog.jsx     # Customizable dialog component
│   ├── DropdownMenu.jsx
│   ├── Tabs.jsx
│   ├── Accordion.jsx
│   ├── Popover.jsx
│   ├── Tooltip.jsx
│   ├── Switch.jsx
│   ├── Slider.jsx
│   └── index.js       # Central export point
└── lib/               # Utilities and helpers
```

## Philosophy

Each Radix UI component is wrapped in its own file in `components/`. This allows you to:
- Easily find and customize any component
- Apply consistent styling across your app
- Swap implementations without changing imports
- Add custom logic or behavior

## How to Customize

### Example: Customizing the Button

Edit `src/ui/components/Button.jsx`:

```jsx
import { Button as RadixButton } from '@radix-ui/themes'

export const Button = ({ children, ...props }) => {
  return (
    <RadixButton 
      style={{
        fontWeight: 600,
        textTransform: 'uppercase',
        // your customizations
      }}
      {...props}
    >
      {children}
    </RadixButton>
  )
}
```

### Example: Adding Custom Behavior

You can add logic to components:

```jsx
export const Button = ({ children, onClick, ...props }) => {
  const handleClick = (e) => {
    console.log('Button clicked!')
    onClick?.(e)
  }
  
  return (
    <RadixButton onClick={handleClick} {...props}>
      {children}
    </RadixButton>
  )
}
```

## Usage

### Import from the index

```jsx
import { Button, Card, Dialog } from '../ui/components'
```

### Or import directly

```jsx
import { Button } from '../ui/components/Button'
```

### Use in your components

```jsx
import { Button, Card } from '../ui/components'

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

## Adding New Components

1. Create a new file in `src/ui/components/ComponentName.jsx`
2. Wrap the Radix component
3. Export from `src/ui/components/index.js`
4. Add documentation comments

Example:

```jsx
// src/ui/components/Checkbox.jsx
import { Checkbox as RadixCheckbox } from '@radix-ui/themes'

export const Checkbox = ({ ...props }) => {
  return <RadixCheckbox {...props} />
}
```

## Where Radix Code Lives

- **Source code**: `node_modules/@radix-ui/` (npm packages)
- **Your customizations**: `src/ui/components/` (this directory)
- **Global styles**: `src/themes/custom.css`

The beauty of this structure is that you can customize components without touching the Radix source code!

