import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined'
import FormatLetterCase from '@mui/icons-material/FormatLetterCase'
import PaletteSwatchOutline from '@mui/icons-material/PaletteSwatchOutline'
import GoogleCirclesExtended from '@mui/icons-material/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'UI',
      badgeContent: '3',
      badgeColor: 'warning',
      icon: PaletteSwatchOutline,
      children: [
        {
          title: 'Typography',
          icon: FormatLetterCase,
          path: '/ui/typography'
        },
        {
          title: 'Components',
          icon: ArchiveOutline,
          children: [
            {
              title: 'Accordion',
              path: '/components/accordion'
            },
            {
              title: 'Alerts',
              path: '/components/alerts'
            }
          ]
        },
        {
          title: 'Icons',
          path: '/ui/icons',
          icon: GoogleCirclesExtended
        }
      ]
    }
  ]
}

export default navigation
// NavGroup
export const navigation1 = () => {
  return [
    {
      title: 'Components',
      //   action:
      // subject:
      badgeContent: '3',
      icon: ArchiveOutlined,
      badgeColor: 'success',
      children: [
        {
          title: 'Accordion',
          path: '/components/accordion'
        },
        {
          title: 'Cards',
          children: [
            {
              title: 'Basic',
              path: '/components/cards/basic'
            },
            {
              title: 'Advanced',
              path: '/components/cards/advanced'
            }
          ]
        },
        {
          title: 'Chips',
          path: '/components/chips'
        }
      ]
    }
  ]
}

// NavLink

const navigation2 = () => {
  return [
    {
      title: 'Email',
      icon: MailTwoTone,
      path: '/apps/email'
    },
    {
      title: 'Chat',
      icon: ChatBubbleTwoTone,
      path: '/apps/chat'
    },
    {
      title: 'User',
      icon: PersonOutlineTwoTone,
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
        {
          title: 'View',
          path: '/apps/user/view'
        }
      ]
    }
  ]
}

import MaterialUi from 'mdi-material-ui/MaterialUi'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'

const navigation = () => {
  return [
    {
      badgeColor: 'error',
      badgeContent: 'New',
      title: 'Form Validation',
      path: '/forms/form-validation',
      icon: CheckboxMarkedCircleOutline
    },
    {
      disabled: true,
      icon: EyeOffOutline,
      title: 'Disabled Menu'
    },
    {
      icon: MaterialUi,
      title: 'MUI Docs',
      externalLink: true,
      openInNewTab: true,
      path: 'https://mui.com/material-ui/getting-started/usage/'
    }
  ]
}

export default navigation
