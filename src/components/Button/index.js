import classNames from 'classnames';
import PropTypes from 'prop-types';

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
};

const defaultProps = {
  size: 'sm',
  bgColor: 'white',
  classname: '',
  type: 'button',
}

import './index.scss';

const Button = ({ size, bgColor, classname, onClick, children, ...rest }) => {

  return (
    <button
      className={
        classNames('button-base',
          `button-base--${size}`,
          `button-base--${bgColor}`,
          (Array.isArray(classname) ? classname.join(' ') : classname)
        )
      }
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
