const SideMenuBarComponent = () => {
  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key='left'>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor='left' open={state[anchor]} onClose={toggleDrawer('left', false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>

    </div>
  );
}