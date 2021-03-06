import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';

const MobileHeader = props => {
  const [visible, setVisible] = useState();
  const { children } = props;

  function handleVisible() {
    setVisible(true);
  }

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="user outline" />
          Profile
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="sign-in" />
          Sign In
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Menu>
          <Menu.Item onClick={handleVisible}>
            <img src="https://react.semantic-ui.com/logo.png" alt="placeholder" />
          </Menu.Item>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

MobileHeader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MobileHeader;
