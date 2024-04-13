import React from 'react'
import IdealImage from '../IdealImage'
import icons from '../icons'
import theme from '../theme'

const IdealImageWithDefaults = props => (
  <IdealImage {...{...defaultProps, ...props}} />
)

const defaultProps = {
  ...IdealImage.defaultProps,
  icons,
  theme,
}

// eslint-disable-next-line react/forbid-foreign-prop-types
IdealImageWithDefaults.propTypes =
  process.env.NODE_ENV !== 'production' ? IdealImage.propTypes : undefined

export default IdealImageWithDefaults
