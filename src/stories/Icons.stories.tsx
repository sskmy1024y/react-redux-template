import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Container } from 'stories/Provider'
import {default as _ReactIcon} from 'components/icons/ReactIcon'
import styled from 'styled-components'


export default {
  title: 'Foundation/Icon',
  component: _ReactIcon
} as Meta

interface Props {
  size: number
}

const Template: Story<Props> = ({size}: Props) => {
  const Icons = [_ReactIcon]
  return (
    <IconContainer>
      {Icons.map((Component, key) => (
        <Container key={key} width={size + 30}>
          <Component />
        </Container>
      ))}
    </IconContainer>
  )
}

export const AllIcons = Template.bind({})
AllIcons.args = {
  size: 50
}

export const ReactIcon = _ReactIcon

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
