import { Button as RadixButton } from '@radix-ui/themes'

/**
 * Button Component
 * 
 * Wraps Radix UI Button for easy customization.
 * Edit this file to customize button styling and behavior.
 * 
 * Usage:
 * import { Button } from '../ui/components/Button'
 */
export const Button = ({ children, ...props }) => {
  return (
    <RadixButton 
      // Add your customizations here
      {...props}
    >
      {children}
    </RadixButton>
  )
}

export default Button

