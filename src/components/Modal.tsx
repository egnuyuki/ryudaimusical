import { useState } from 'react'
// import { css } from '@emotion/react'

type ModalProps = {
  buttonLabel: string
}

const ModalComponent = ({ buttonLabel }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleModal}>
        {buttonLabel}
      </button>
      {isOpen && (
        <div>
          <div>
            <p>This is a modal window.</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalComponent