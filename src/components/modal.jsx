import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import Portal from './portal'

const MAX_MODAL_DIMENSION = '90' // % of viewport dimension

const ModalWrapper = styled.div`
  background-color: #00000099;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBox = styled.div`
  position: relative;
  background-color: white;
  min-width: 30%;
  min-height: 30%;
  max-width: ${MAX_MODAL_DIMENSION}%;
  max-height: ${MAX_MODAL_DIMENSION}%;
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 720px) {
    padding: 0;
  }

  @media (min-aspect-ratio: ${p => `${p.imgWidth} / ${p.imgHeight}`}) {
    height: ${MAX_MODAL_DIMENSION}%;
    width: calc(
      (${p => `${p.imgWidth} / ${p.imgHeight}`}) *
        (${MAX_MODAL_DIMENSION} / 100) * ${p => p.vh} * 1px
    );
  }

  @media (max-aspect-ratio: ${p => `${p.imgWidth} / ${p.imgHeight}`}) {
    height: calc(
      (${p => ` ${p.imgHeight} / ${p.imgWidth}`}) *
        (${MAX_MODAL_DIMENSION} / 100) * ${p => p.vw} * 1px
    );
    width: ${MAX_MODAL_DIMENSION}%;
  }

  @media (aspect-ratio: ${p => `${p.imgWidth} / ${p.imgHeight}`}) {
    height: ${MAX_MODAL_DIMENSION}%;
    width: ${MAX_MODAL_DIMENSION}%;
  }

  .gatsby-image-wrapper {
    cursor: zoom-out;
    height: 100%;
    width: 100%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  border: none;
  font-size: 150%;
  line-height: 1;
  cursor: pointer;
`

/** TODO: Remove image related properties (imgWidth, imgHeight, aspect-ratios,
 * .gatsby-image-wrapper, vw, vh),
 * make instance of Modal for Images out of it */

const Modal = ({ children, showModal, handleClose, imgWidth, imgHeight }) => {
  if (!showModal) return null

  const box = useRef()
  const closeButton = useRef()

  // Focus on Close Button after rendered
  useEffect(() => {
    closeButton.current.focus()
  }, [])

  // Handle close when Escape is pressed
  const escFunction = e => {
    if ((e.key === 'Escape' || e.key === 'Esc') && showModal) {
      handleClose()
    }
  }

  // Watch for Escape keydown event
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)
    return () => document.removeEventListener('keydown', escFunction, false)
  }, [])

  // Handle click outside Modal Box or on Close Button
  const handleClick = e => {
    if (e) e.preventDefault()
    if (e.target !== box.current || e.target === closeButton.current) {
      handleClose()
    }
  }

  return (
    <Portal>
      <ModalWrapper onClick={handleClick}>
        <ModalBox
          ref={box}
          vw={window.innerWidth}
          vh={window.innerHeight}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        >
          {children}
          <CloseButton ref={closeButton}>×</CloseButton>
        </ModalBox>
      </ModalWrapper>
    </Portal>
  )
}

export default Modal
