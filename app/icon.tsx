import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d1b2a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #3b82f6',
          color: 'white',
          fontSize: 13,
          fontWeight: 'bold',
          letterSpacing: '-0.5px',
        }}
      >
        RH
      </div>
    ),
    { ...size }
  )
}
