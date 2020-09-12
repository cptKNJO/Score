import React from 'react'
import { Radio, Col } from 'antd'

import { colors } from '../../config'

const TeamCol = ({ item, teamNo }) => {
  if (teamNo === 1) {
    return (
      <Col
        style={{
          alignSelf: 'stretch',
          backgroundColor:
            item.user_prediction === item.team_1 && colors.purple,
          color: item.user_prediction === item.team_1 && colors.white,
          padding: '0.6rem 1.8rem',
        }}
      >
        {item.team_1}{' '}
        <Radio
          checked={item.user_prediction === item.team_1}
          value={item.team_1}
          style={{ marginLeft: '0.4rem' }}
        />
      </Col>
    )
  }

  return (
    <Col
      style={{
        backgroundColor: item.user_prediction === item.team_2 && colors.purple,
        color: item.user_prediction === item.team_2 && colors.white,
        alignSelf: 'stretch',
        padding: '0.6rem 1.8rem',
      }}
    >
      <Radio
        checked={item.user_prediction === item.team_2}
        value={item.team_2}
        style={{ marginRight: '0.4rem' }}
      />{' '}
      {item.team_2}
    </Col>
  )
}

export default TeamCol
