import React from 'react'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types' // eslint-disable-line
import styled from 'styled-components'

import Link from '../components/link'

const StyledBold = styled.strong`
  color: ${props => props.theme.accentDark};
`

const StyledUnderline = styled.u`
  text-decoration: ${props => props.theme.accentDark} underline;
`

export const options = {
  renderMark: {
    [MARKS.BOLD]: text => <StyledBold>{text}</StyledBold>,
    [MARKS.UNDERLINE]: text => <StyledUnderline>{text}</StyledUnderline>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const {
        data: {
          target: { fields },
        },
      } = node

      if (!fields.file) return ''

      return (
        <div className="contentful-image-container">
          <picture>
            <source
              srcSet={`${fields.file['pl-PL'].url}?q=50&w=450`}
              media="(max-width: 480px)"
            />
            <source
              srcSet={`${fields.file['pl-PL'].url}?q=50&w=750`}
              media="(max-width: 800px)"
            />
            <img
              src={`${fields.file['pl-PL'].url}?q=50`}
              alt={`${fields.description ? fields.description['pl-PL'] : ''}`}
            />
          </picture>
        </div>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const {
        data: {
          target: { fields },
        },
      } = node
      const href = `/${fields.postType['pl-PL']}/${fields.slug['pl-PL']}`

      return (
        <div className="contentful-post-link-container">
          <div className="image-container">
            <img
              alt={fields.mainImage['pl-PL'].fields.description['pl-PL']}
              src={`
            ${fields.mainImage['pl-PL'].fields.file['pl-PL'].url}?fit=thumb&w=400&q=50
          `}
            />
          </div>
          <div className="text-container">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <h4>{fields.title['pl-PL']}</h4>
              <p>{fields.lead['pl-PL']}</p>
            </Link>
          </div>
        </div>
      )
    },
    [INLINES.EMBEDDED_ENTRY]: node => {
      const {
        data: {
          target: { fields },
        },
      } = node
      const href = `/${fields.postType['pl-PL']}/${fields.slug['pl-PL']}`

      return (
        <span className="contentful-post-link-span">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {fields.title['pl-PL']}
          </Link>
        </span>
      )
    },
  },
}
