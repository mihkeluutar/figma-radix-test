import { Card as RadixCard, Inset } from '@radix-ui/themes'

/**
 * Card Component
 * 
 * Wraps Radix UI Card for easy customization.
 * Edit this file to customize card styling.
 */
export const Card = ({ children, ...props }) => {
  return (
    <RadixCard {...props}>
      {children}
    </RadixCard>
  )
}

export { Inset as CardInset }
export default Card

