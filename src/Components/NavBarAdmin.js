import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Toolbar, IconButton, AppBar, CssBaseline, ListItemIcon, Typography, ThemeProvider, Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import Menu from '../Components/Salir';
import theme from '../theme';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import Link from '../Components/Link';
class NavBarAmin extends React.Component {

    constructor(props) {
        super(props)

        this.state = { open: false }
        //console.log(this.props.user)
    }
    //const[open, setOpen] = React.useState(false);

    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    };

    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };
    render() {
        const classes = this.props.useStyles;
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: this.state.open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: this.state.open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap className={classes.title}>
                                Table Scrum
          </Typography>
                            <Menu menu={true} user={this.props.user}/>
                        </Toolbar>

                    </AppBar>
                    <div className={classes.offset}></div>
                </ThemeProvider>

                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <Link label='Inicio' url='/home' />
                        </ListItem>
                        {['Inicio', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
            </div>
        );
    }



}


export default NavBarAmin;