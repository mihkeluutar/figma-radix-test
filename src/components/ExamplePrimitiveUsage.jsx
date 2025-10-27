/**
 * Example: Using Radix Primitives for Complete Control
 * 
 * Radix Primitives give you full control over styling and behavior.
 * You can import the primitives and style them however you want.
 */

import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@radix-ui/themes'

// Example 1: Using Radix Primitives directly with custom styling
export function CustomStyledDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Open Custom Dialog
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        {/* Your custom overlay */}
        <Dialog.Overlay 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          }}
        />
        
        {/* Your custom content */}
        <Dialog.Content
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            minWidth: '400px',
          }}
        >
          <Dialog.Title 
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            Custom Styled Dialog
          </Dialog.Title>
          
          <Dialog.Description 
            style={{
              color: '#666',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
            }}
          >
            This dialog is styled completely from scratch using Radix Primitives.
            You have full control over every aspect of the styling.
          </Dialog.Description>
          
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button
                style={{
                  padding: '8px 16px',
                  border: '1px solid #e5e7eb',
                  background: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </Dialog.Close>
            
            <Dialog.Close asChild>
              <button
                style={{
                  padding: '8px 16px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Confirm
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

/**
 * Example 2: Creating a styled component with @radix-ui/themes
 * This gives you the theming system plus full control
 */

// Using styled components from Radix Themes
const StyledButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 24px',
  fontWeight: 600,
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
  },
})

export { StyledButton }

