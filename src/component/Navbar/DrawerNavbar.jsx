import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { NavLink } from 'react-router-dom'
import { UserDrawer } from './UserDrawer'
// ----------------------------------------------------------------------

export const DrawerNavbar = ({ drawerOpen, setDrawerOpen }) => {
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <Drawer
      variant='temporary'
      open={drawerOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        disablePortal: true,
        BackdropProps: {
          classes: { root: { position: 'absolute' } }
        }
      }}
      style={{ position: 'absolute' }}
      sx={{
        position: 'relative',
        whiteSpace: 'nowrap',
        background: `linear-gradient(palette.background.default 40%,
          palette.background.default,
          0.1
        )} 95%,palette.background.default, 0.05})`,
        width: 400,
        transition:
          'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
      }}>
      <Toolbar />
      <UserDrawer />
      {/* Primary List */}
      <List sx={{ mr: 2, width: '98%', maxWidth: 360 }}>
        {[
          { id: 0, text: 'Dashboard', icon: <DashboardIcon /> },
          { id: 1, text: 'CRM', icon: <DashboardIcon /> },
          { id: 2, text: 'Orders', icon: <ShoppingCartIcon /> },
          { id: 3, text: 'Customers', icon: <PeopleAltIcon /> },
          { id: 4, text: 'Reports', icon: <BarChartIcon /> },
          { id: 5, text: 'Email', icon: <LayersIcon /> },
          { id: 6, text: 'Chat', icon: <LayersIcon /> },
          { id: 7, text: 'Calendar', icon: <LayersIcon /> },
          { id: 8, text: 'Invoice', icon: <LayersIcon /> },
          { id: 9, text: 'User', icon: <LayersIcon /> },
          { id: 10, text: 'Roles & Permissions', icon: <LayersIcon /> },
          { id: 11, text: 'Blogs', icon: <LocalLibraryIcon /> },
          { id: 12, text: 'Contact', icon: <ContactMailIcon /> }
        ].map(({ id, text, icon, index }) => {
          const path = `/${text.toLowerCase()}`
          return (
            <ListItem key={text} disablePadding sx={{}}>
              <ListItemButton
                selected={index === id ? true : false}
                component={NavLink}
                to={path}
                sx={{
                  borderTopRightRadius: 100,
                  borderBottomRightRadius: 100,
                  transition: 'opacity .25s ease-in-out',

                  '&.MuiListItemButton-root': {
                    '&.active, &.active:hover': {
                      boxShadow:
                        '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
                      backgroundImage: 'linear-gradient(98deg, #C6A7FE, #9155FD 80%)'
                    }
                  }
                }}>
                <ListItemIcon>
                  {icon}
                  {index}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Divider />
      {/* Secondary List */}
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        subheader={
          <ListSubheader
            sx={{
              color: '#ececec'
            }}
            component='div'
            id='nested-list-subheader'>
            Saved reports
          </ListSubheader>
        }>
        {[
          { text: 'Current month', icon: <AssignmentIcon /> },
          { text: 'Last quarte', icon: <AssignmentIcon /> },
          { text: 'Year-end sale', icon: <AssignmentIcon /> }
        ].map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
