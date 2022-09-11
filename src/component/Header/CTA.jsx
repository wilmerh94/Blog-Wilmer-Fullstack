/* eslint-disable react/no-unescaped-entities */
import { Button } from '@mui/joy'
import { keyframes, Stack } from '@mui/material'

const rollInLeft = keyframes`

  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
            transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }`
export const CTA = () => {
  return (
    <Stack direction='row' spacing={2}>
      <Button sx={{ animation: `${rollInLeft} 0.6s ease-out both` }} variant='solid' href='CV' size='md'>
        Download CV
      </Button>
      <Button variant='plain.context' size='md'>
        Let's Talk
      </Button>
    </Stack>
  )
}
