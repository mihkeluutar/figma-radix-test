import { Card, Box, Flex, Text } from '@radix-ui/themes'
import * as RadixCard from '@radix-ui/react-card'

/**
 * Custom Card Component
 * You can modify this component to match your design system
 */
export function CustomCard({ title, description, children, ...props }) {
  return (
    <Card
      size="3"
      variant="classic"
      style={{
        background: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.borderColor = '#8b5cf6'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#e5e7eb'
      }}
      {...props}
    >
      {title && (
        <Flex direction="column" gap="2" mb="3">
          <Text size="3" weight="bold" style={{ color: '#1f2937' }}>
            {title}
          </Text>
          {description && (
            <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
              {description}
            </Text>
          )}
        </Flex>
      )}
      {children}
    </Card>
  )
}

/**
 * Glass morphism card example
 */
export function GlassCard({ children, ...props }) {
  return (
    <Box
      p="5"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

