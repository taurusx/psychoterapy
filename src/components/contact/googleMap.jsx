import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../../utils/typography'

const MapContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 400px;
  position: relative;
  resize: none;
  max-width: 100%;
  margin-bottom: ${rhythm(1)};

  & iframe {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
    object-position: 50% 50%;
  }
`

const GoogleMap = ({ id }) => {
  return (
    <MapContainer id={id}>
      <iframe
        allow="fullscreen"
        allowFullScreen
        src="https://maps.google.com/maps?q=Dobra+Przestrzeń,+Drzymały+18/24,+Warszawa&hl=pl&z=15&ie=UTF8&output=embed"
        title="Google Maps - Dobra Przestrzeń"
      />
    </MapContainer>
  )
}

export default GoogleMap
