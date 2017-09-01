import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './Toggle.css'

export default class Toggle extends Component {
    static propTypes = {
        on: PropTypes.bool.isRequired,
        onChange: PropTypes.func
    }

    handleClick() {
        const { onChange, on } = this.props
        onChange && (typeof onChange === 'function') && onChange(!on)
    }

    render() {
        const { className } = this.props
        return (
            <span 
                className={cx("toggle", className, {
                    "toggle-checked": this.props.on
                })}
                onClick={() => this.handleClick()}
            />
        )
    }
}