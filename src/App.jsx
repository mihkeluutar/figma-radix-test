import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Toast from '@radix-ui/react-toast'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <>
      <div className="container">
        <h1>Vite + React + Radix UI</h1>
        
        <div className="card">
          <h2>Radix UI Components Demo</h2>
          
          {/* Dialog Component */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="button">Open Dialog</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialog-overlay" />
              <Dialog.Content className="dialog-content">
                <Dialog.Title className="dialog-title">
                  Dialog Example
                </Dialog.Title>
                <Dialog.Description className="dialog-description">
                  This is a Dialog component from Radix UI. It provides
                  accessibility features like focus management and keyboard
                  navigation out of the box.
                </Dialog.Description>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                  <Dialog.Close asChild>
                    <button className="button">Cancel</button>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <button className="button primary">Confirm</button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Dropdown Menu Component */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="button">Open Menu</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="dropdown-content">
                <DropdownMenu.Item className="dropdown-item">
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  Settings
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  Help
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="dropdown-separator" />
                <DropdownMenu.Item className="dropdown-item">
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {/* Toast Component */}
          <Toast.Provider swipeDirection="right">
            <button
              className="button"
              onClick={() => setToastOpen(true)}
            >
              Show Toast
            </button>
            <Toast.Root className="toast-root" open={toastOpen} onOpenChange={setToastOpen}>
              <Toast.Title className="toast-title">
                Toast Notification
              </Toast.Title>
              <Toast.Description className="toast-description">
                This is a toast notification from Radix UI.
              </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="toast-viewport" />
          </Toast.Provider>
        </div>
        
        <p className="read-the-docs">
          This project demonstrates Radix UI components in a React + Vite setup.
        </p>
      </div>
    </>
  )
}

export default App
