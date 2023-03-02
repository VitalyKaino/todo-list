import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import { TodoCardSlice } from '../store/reducers/TodoCardSlice';
import Button from '@mui/material/Button';

const drawerWidth = '240px';

export default function Navigation() {
  const { cards } = useAppSelector(state => state.TodoCardReducer);
  const { yakovRak, drive } = TodoCardSlice.actions;
  const dispatch = useAppDispatch();
  return (
		<>
		<Box sx={{display: 'flex'}}>
			<AppBar 
				//position='static'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,  }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{marginLeft: 5}}>
            IT Chat
          </Typography>
        </Toolbar>
      </AppBar>
			<Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
			<Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar/>
        <Toolbar>
					<Typography variant="h6" noWrap component="div" sx={{marginLeft: 5}}>
            IT Chat
          </Typography>
				</Toolbar>
				<Typography variant="h5" component="div">
					Tasks
				</Typography>
        <Typography paragraph>
          {cards.map(item => {
            return <li>
              {`${item.id}. ${item.title} ${item.todos[0].title}`}
            </li>
          })}
        </Typography>
        <Button color={'warning'} onClick={() => dispatch(yakovRak('RAk'))}>Добавить все</Button>
        <Button color={'secondary'} onClick={() => dispatch(drive('в грузию'))}>Именно туда</Button>
      </Box>
		</Box>
		</>
  )
}