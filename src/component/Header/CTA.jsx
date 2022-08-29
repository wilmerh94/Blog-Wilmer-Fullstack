/* eslint-disable react/no-unescaped-entities */
import { Button, Stack } from '@mui/material'

export const CTA = () => {
  return (
    <Stack direction='row' spacing={2}>
      <Button variant='contained' href='CV' size='small'>
        Download CV
      </Button>
      <Button variant='outlined' color='warning' size='small'>
        Let's Talk
      </Button>
    </Stack>
  )
}
