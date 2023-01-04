import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  // Specifies a large, medium, small or mini
  // @type('mini'| 'sm'| 'lg'| 'auto')
  // @default 'sm'

  size: PropTypes.string,

  // Background button color
  // @type('red'| 'green'| 'white')
  // @default 'white'

  bgColor: PropTypes.string,

  // custom button classNames
  // @default ''
  classname: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  onClick: PropTypes.func.isRequired,

  // @default 'button'
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),

  TagName: PropTypes.elementType,

  href: PropTypes.string,

  children: PropTypes.node,
};

const defaultProps = {
  size: 'sm',
  bgColor: 'white',
  classname: '',
  type: 'button',
  TagName: 'button',
  href: '',
  children: '',
};

const Button = React.forwardRef(({
  size, bgColor, classname, onClick, children, TagName, href, ...rest
}, ref) => (
  <TagName
    className={
        classNames(
          'button-base',
          `button-base--${size}`,
          `button-base--${bgColor}`,
          (Array.isArray(classname) ? classname.join(' ') : classname),
          { 'button-base--link': TagName === 'a' },
        )
      }
    {...rest}
    onClick={onClick}
    ref={ref}
    href={TagName === 'a' ? href : null}
  >
    {children}
  </TagName>
));

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.displayName = 'ButtonCustom';

export default Button;
