import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string
  }

  state = {
    disclosed: false
  }

  handleAccordionClick = () => {
    this.setState({ disclosed: !this.state.disclosed })
  }

  render() {
    const { disclosed } = this.state
    const { children, className, title } = this.props

    return (
      <Accordion className={className}>
        <Accordion.Title
          active={disclosed}
          index={0}
          onClick={this.handleAccordionClick}
        >
          <Icon name="dropdown" />
          {title}
        </Accordion.Title>
        <Accordion.Content active={disclosed} index={0}>
          {children}
        </Accordion.Content>
      </Accordion>
    )
  }
}
