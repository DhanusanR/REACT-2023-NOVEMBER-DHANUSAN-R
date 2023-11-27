// ... (existing imports)

const AppNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#a7beae' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <b><t>GLAMOUR HUB</t></b>
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Offers</Button>
        <Button color="inherit">My Orders</Button>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenuClick}
        >
          {/* Add an icon for the menu, such as MenuIcon */}
          {/* For example: <MenuIcon /> */}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ backgroundColor: 'white' }} // Set the white color here
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavBar;
