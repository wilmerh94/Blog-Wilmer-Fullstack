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
        width: 400
      }}>
      <Toolbar />
      {/* Primary List */}
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Orders', icon: <ShoppingCartIcon /> },
          { text: 'Customers', icon: <PeopleAltIcon /> },
          { text: 'Reports', icon: <BarChartIcon /> },
          { text: 'Integrations', icon: <LayersIcon /> },
          { text: 'Blogs', icon: <LocalLibraryIcon /> },
          { text: 'Contact', icon: <ContactMailIcon /> }
        ].map(({ text, icon }) => {
          const path = `/${text.toLowerCase()}`
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton component={NavLink} to={path}>
                <ListItemIcon>{icon}</ListItemIcon>
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
          <ListSubheader component='div' id='nested-list-subheader'>
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
