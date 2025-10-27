/**
 * UI Components Index
 * 
 * Central export point for all UI components.
 * Import from here: import { Button, Card, Dialog } from '../ui/components'
 */

export { Button, default as ButtonDefault } from './Button'
export { Card, CardInset, default as CardDefault } from './Card'
export { 
  Dialog, 
  DialogRoot, 
  DialogTrigger, 
  DialogContent, 
  DialogTitle, 
  DialogDescription, 
  DialogClose,
  default as DialogDefault 
} from './Dialog'
export { DropdownMenu, default as DropdownMenuDefault } from './DropdownMenu'
export { Tabs, default as TabsDefault } from './Tabs'
export { Accordion, default as AccordionDefault } from './Accordion'
export { Popover, default as PopoverDefault } from './Popover'
export { Tooltip, default as TooltipDefault } from './Tooltip'
export { Switch, default as SwitchDefault } from './Switch'
export { Slider, default as SliderDefault } from './Slider'

// You can also export individual Radix components directly
import { 
  Flex, 
  Box, 
  Heading, 
  Text, 
  Separator 
} from '@radix-ui/themes'

export { Flex, Box, Heading, Text, Separator }

