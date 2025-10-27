import { useState } from 'react'
import { 
  Flex, 
  Box, 
  Heading, 
  Text, 
  Button, 
  Switch, 
  Slider, 
  Tabs, 
  Dialog, 
  DropdownMenu, 
  Popover, 
  Tooltip, 
  Accordion, 
  Card, 
  Inset,
  Separator
} from '@radix-ui/themes'
import './App.css'

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <Flex direction="column" align="center" gap="6" p="8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box>
        <Heading size="8" mb="2">Vite + React + Radix</Heading>
        <Text size="4" color="gray">
          Radix Primitives + Radix Themes
        </Text>
      </Box>

      <Box width="100%" maxWidth="900px">
        <Tabs.Root defaultValue="tab1">
          <Tabs.List size="3">
            <Tabs.Trigger value="tab1">Components</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Forms</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Layered</Tabs.Trigger>
            <Tabs.Trigger value="tab4">Accordion</Tabs.Trigger>
          </Tabs.List>

          <Box py="4">
            <Tabs.Content value="tab1">
              <Flex direction="column" gap="4">
                <Heading size="6" mb="2">Interactive Components</Heading>
                
                {/* Dialog */}
                <Flex gap="3" wrap="wrap">
                  <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Trigger>
                      <Button size="3">Open Dialog</Button>
                    </Dialog.Trigger>
                    <Dialog.Content style={{ maxWidth: 450 }}>
                      <Dialog.Title>Example Dialog</Dialog.Title>
                      <Dialog.Description size="2" color="gray">
                        This is a beautifully styled dialog using Radix Themes. 
                        It comes with proper focus management, keyboard navigation, 
                        and accessibility features built-in.
                      </Dialog.Description>
                      <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button>Save</Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>

                  {/* Dropdown Menu */}
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button size="3" variant="soft">
                        Open Menu
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item shortcut="⌘+P">Profile</DropdownMenu.Item>
                      <DropdownMenu.Item shortcut="⌘+S">Settings</DropdownMenu.Item>
                      <DropdownMenu.Item shortcut="⌘+H">Help</DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item color="red" shortcut="⌘+L">
                        Logout
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>

                  {/* Popover */}
                  <Popover.Root>
                    <Popover.Trigger>
                      <Button size="3" variant="outline">
                        Open Popover
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content style={{ maxWidth: 280 }}>
                      <Flex direction="column" gap="2">
                        <Text size="3" weight="bold">Popover Title</Text>
                        <Text size="2" color="gray">
                          This is a popover component. It can contain any content 
                          and provides smart positioning.
                        </Text>
                      </Flex>
                    </Popover.Content>
                  </Popover.Root>

                  {/* Tooltip */}
                  <Tooltip content="This is a helpful tooltip">
                    <Button size="3">Hover for Tooltip</Button>
                  </Tooltip>
                </Flex>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="tab2">
              <Flex direction="column" gap="4">
                <Heading size="6" mb="2">Form Controls</Heading>
                
                <Card>
                  <Flex direction="column" gap="4" p="4">
                    <Text size="3" weight="bold">Switch Control</Text>
                    <Flex align="center" gap="3">
                      <Switch 
                        size="2" 
                        checked={switchChecked} 
                        onCheckedChange={setSwitchChecked} 
                      />
                      <Text size="2" color="gray">
                        {switchChecked ? 'Enabled' : 'Disabled'}
                      </Text>
                    </Flex>

                    <Separator size="4" />

                    <Text size="3" weight="bold">Slider Control</Text>
                    <Flex direction="column" gap="2" style={{ width: 300 }}>
                      <Text size="2" color="gray">
                        Volume: {sliderValue[0]}%
                      </Text>
                      <Slider 
                        value={sliderValue} 
                        onValueChange={setSliderValue}
                        size="3"
                      />
                    </Flex>
                  </Flex>
                </Card>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="tab3">
              <Flex direction="column" gap="4">
                <Heading size="6" mb="2">Layered Components</Heading>
                
                <Flex gap="4" wrap="wrap">
                  <Card size="3">
                    <Inset clip="padding-box" side="top" pb="current">
                      <Box p="6" style={{ background: 'var(--accent-a2)' }}>
                        <Text size="4" weight="bold">Card with Inset</Text>
                      </Box>
                    </Inset>
                    <Flex direction="column" gap="2" p="4">
                      <Text size="2" weight="bold">Card Title</Text>
                      <Text size="1" color="gray">
                        This is a card with an inset header. The inset component 
                        allows you to create layered visual effects.
                      </Text>
                    </Flex>
                  </Card>

                  <Card size="3" variant="classic">
                    <Flex direction="column" gap="2" p="4">
                      <Text size="2" weight="bold">Classic Card</Text>
                      <Text size="1" color="gray">
                        This card uses the classic variant with a subtle border.
                      </Text>
                      <Button size="2" mt="2">Action</Button>
                    </Flex>
                  </Card>

                  <Card size="3" variant="surface">
                    <Flex direction="column" gap="2" p="4">
                      <Text size="2" weight="bold">Surface Card</Text>
                      <Text size="1" color="gray">
                        This card uses the surface variant with elevated styling.
                      </Text>
                      <Button size="2" variant="soft" mt="2">Action</Button>
                    </Flex>
                  </Card>
                </Flex>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="tab4">
              <Flex direction="column" gap="4">
                <Heading size="6" mb="2">Accordion</Heading>
                
                <Accordion.Root type="single" collapsible>
                  <Accordion.Item value="item-1">
                    <Accordion.Trigger>
                      <Text size="3" weight="bold">What is Radix UI?</Text>
                    </Accordion.Trigger>
                    <Accordion.Content>
                      <Text size="2" color="gray" ml="5">
                        Radix UI is a low-level UI primitive library with a focus on 
                        accessibility, customization and developer experience. You can 
                        use these components either as the base layer of your design 
                        system or adopt them incrementally.
                      </Text>
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="item-2">
                    <Accordion.Trigger>
                      <Text size="3" weight="bold">Why use Radix Themes?</Text>
                    </Accordion.Trigger>
                    <Accordion.Content>
                      <Text size="2" color="gray" ml="5">
                        Radix Themes provides pre-styled components that work out of 
                        the box with minimal configuration. It combines the power of 
                        Radix Primitives with beautiful default styling that you can 
                        customize to fit your design system.
                      </Text>
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="item-3">
                    <Accordion.Trigger>
                      <Text size="3" weight="bold">How to customize Radix Themes?</Text>
                    </Accordion.Trigger>
                    <Accordion.Content>
                      <Text size="2" color="gray" ml="5">
                        You can customize Radix Themes by passing props to the Theme 
                        component. You can adjust accent colors, gray colors, radius, 
                        and scaling. Use the ThemePanel component to preview changes 
                        in real-time during development.
                      </Text>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </Flex>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Box>

      <Flex direction="column" align="center" gap="2">
        <Text size="2" color="gray" align="center">
          This project demonstrates Radix UI Primitives + Radix Themes
        </Text>
        <Text size="1" color="gray" align="center">
          All 27+ Radix primitives are available, styled with Radix Themes
        </Text>
      </Flex>
    </Flex>
  )
}

export default App
