import React from 'react'
import Media from '../Media'
import icons from '../icons'
import theme from '../theme'

const MediaWithDefaults = props => <Media {...{...defaultProps, ...props}} />

const defaultProps = {
  ...Media.defaultProps,
  icons,
  theme,
}

// eslint-disable-next-line react/forbid-foreign-prop-types
MediaWithDefaults.propTypes =
  process.env.NODE_ENV !== 'production' ? Media.propTypes : undefined

export default MediaWithDefaults
