import React from 'react';
import classNames from 'classnames';

import config from '../../config';
import MobileLogoImage from './cottagedays-logo-small.png';
import DesktopLogoImage from './cottagedays-logo.png';
import css from './Logo.css';

const Logo = props => {
  const  { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage;

  return (
    <>
      <img
        className={classes}
        src={logoImage}
        alt={config.siteTitle}
        {...rest}
        />
    </>
  )
};


export default Logo;
