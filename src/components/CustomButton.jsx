import { Button } from '@radix-ui/themes'

/**
 * Custom Button Component
 * 
 * This is YOUR custom button that you can modify however you want.
 * You can add props, change behavior, or apply custom styling.
 */
export function CustomButton({ children, variant = 'solid', ...props }) {
  return (
    <Button 
      variant={variant}
      size="3"
      // Add your custom styling here
      style={{
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        // ... add more custom styles
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

/**
 * Example of a highly customized button
 */
export function GradientButton({ children, ...props }) {
  return (
    <Button
      variant="solid"
      size="3"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        fontWeight: 600,
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

