# Radix UI Components Guide

This guide shows you how to use all the Radix UI components available in this project.

## Components Included

### 1. Accordion (`@radix-ui/react-accordion`)
Collapsible content sections for FAQ sections and content organization.

### 2. Alert Dialog (`@radix-ui/react-alert-dialog`)
Modal dialogs for destructive actions like delete confirmations.

### 3. Aspect Ratio (`@radix-ui/react-aspect-ratio`)
Maintain consistent aspect ratios for responsive content.

### 4. Avatar (`@radix-ui/react-avatar`)
Display user avatars with image fallback support.

### 5. Checkbox (`@radix-ui/react-checkbox`)
Accessible checkbox form controls.

### 6. Collapsible (`@radix-ui/react-collapsible`)
Show/hide content sections with smooth animations.

### 7. Context Menu (`@radix-ui/react-context-menu`)
Right-click context menus for actions.

### 8. Dialog (`@radix-ui/react-dialog`)
Accessible modal dialogs - Already demonstrated in the app.

### 9. Dropdown Menu (`@radix-ui/react-dropdown-menu`)
Accessible dropdown menus - Already demonstrated in the app.

### 10. Hover Card (`@radix-ui/react-hover-card`)
Content revealed when hovering over an element.

### 11. Label (`@radix-ui/react-label`)
Accessible form labels with proper ARIA attributes.

### 12. Menubar (`@radix-ui/react-menubar`)
Top-level application menus (File, Edit, View, etc.).

### 13. Navigation Menu (`@radix-ui/react-navigation-menu`)
Horizontal navigation menus for site navigation.

### 14. Popover (`@radix-ui/react-popover`)
Floating content containers - Already demonstrated in the app.

### 15. Progress (`@radix-ui/react-progress`)
Progress indicators for loading states.

### 16. Radio Group (`@radix-ui/react-radio-group`)
Radio button groups for single selection.

### 17. Scroll Area (`@radix-ui/react-scroll-area`)
Custom scrollable containers with styling control.

### 18. Select (`@radix-ui/react-select`)
Accessible select/multi-select dropdowns.

### 19. Separator (`@radix-ui/react-separator`)
Visual dividers for content sections.

### 20. Slider (`@radix-ui/react-slider`)
Range slider controls - Already demonstrated in the app.

### 21. Slot (`@radix-ui/react-slot`)
Compose components together for flexible composition.

### 22. Switch (`@radix-ui/react-switch`)
Toggle switch controls - Already demonstrated in the app.

### 23. Tabs (`@radix-ui/react-tabs`)
Tabbed content interfaces - Already demonstrated in the app.

### 24. Toast (`@radix-ui/react-toast`)
Toast notification component - Already demonstrated in the app.

### 25. Toggle (`@radix-ui/react-toggle`)
Two-state toggle buttons.

### 26. Toggle Group (`@radix-ui/react-toggle-group`)
Groups of mutually exclusive or inclusive toggle buttons.

### 27. Tooltip (`@radix-ui/react-tooltip`)
Contextual information revealed on hover - Already demonstrated in the app.

## Quick Usage Examples

### Alert Dialog
```jsx
import * as AlertDialog from '@radix-ui/react-alert-dialog'

<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <button>Delete</button>
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay className="overlay" />
    <AlertDialog.Content className="content">
      <AlertDialog.Title>Are you sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone.
      </AlertDialog.Description>
      <div style={{ display: 'flex', gap: '10px' }}>
        <AlertDialog.Cancel asChild>
          <button>Cancel</button>
        </AlertDialog.Cancel>
        <AlertDialog.Action asChild>
          <button>Delete</button>
        </AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
```

### Checkbox
```jsx
import * as Checkbox from '@radix-ui/react-checkbox'

<Checkbox.Root className="checkbox" id="terms" checked={checked} onCheckedChange={setChecked}>
  <Checkbox.Indicator className="checkbox-indicator">✓</Checkbox.Indicator>
</Checkbox.Root>
```

### Progress
```jsx
import * as Progress from '@radix-ui/react-progress'

<Progress.Root value={progress} className="progress-root">
  <Progress.Indicator className="progress-indicator" style={{ transform: `translateX(-${100 - progress}%)` }} />
</Progress.Root>
```

### Select
```jsx
import * as Select from '@radix-ui/react-select'

<Select.Root value={value} onValueChange={setValue}>
  <Select.Trigger>
    <Select.Value placeholder="Choose a fruit" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
    </Select.Content>
  </Select.Portal>
</Select.Root>
```

## Documentation

For complete documentation and API reference for each component, visit:
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Radix UI GitHub](https://github.com/radix-ui/primitives)

## Benefits of Radix UI

1. **Accessibility**: All components are fully accessible and WAI-ARIA compliant
2. **Unstyled**: Complete freedom to style components however you want
3. **Customizable**: Full control over component behavior and appearance
4. **Developer Experience**: Clean, intuitive APIs and excellent TypeScript support
5. **Production Ready**: Battle-tested in production environments

