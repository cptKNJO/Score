import React from 'react'
import { Radio, Col, Tag } from 'antd'

import { colors } from '../../config'

const getBackgroundColor = (item, teamNo) => {
  const team = teamNo === 1 ? item.team_1 : item.team_2
  if (team === item.user_prediction) {
    return colors.white
  }
  if (team === item.winner) {
    return colors.green
  }
  return colors.red
}

const TeamCol = ({ item, teamNo }) => {
  if (teamNo === 1) {
    return (
      <Col
        style={{
          alignSelf: 'stretch',
          justifyContent: 'center',
          backgroundColor:
            item.user_prediction === item.team_1 &&
            item.team_1 === item.winner &&
            colors.green,
          color: item.user_prediction === item.team_1 && colors.white,
          padding: '0.6rem 1.8rem',
        }}
      >
        <Tag
          style={{
            display: 'block',
            borderRadius: '1rem',
            width: '50px',
            margin: '0 auto 0.4rem auto',
            backgroundColor: getBackgroundColor(item, (teamNo = 1)),
            color:
              getBackgroundColor(item, (teamNo = 1)) === colors.white
                ? colors.grayDark
                : colors.white,
            textAlign: 'center',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            letterSpacing: '0.02rem',
          }}
        >
          {item.team_1 === item.winner ? <div>WON</div> : <div>LOST</div>}
        </Tag>
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
        backgroundColor: item.user_prediction === item.team_2 && colors.green,
        color: item.user_prediction === item.team_2 && colors.white,
        alignSelf: 'stretch',
        padding: '0.6rem 1.8rem',
      }}
    >
      <Tag
        style={{
          display: 'block',
          borderRadius: '1rem',
          width: '50px',
          margin: '0 auto 0.4rem auto',
          backgroundColor: getBackgroundColor(item, (teamNo = 2)),
          color:
            getBackgroundColor(item, (teamNo = 2)) === colors.white
              ? colors.grayDark
              : colors.white,
          textAlign: 'center',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          letterSpacing: '0.02rem',
        }}
      >
        {item.team_2 === item.winner ? <div>WON</div> : <div>LOST</div>}
      </Tag>
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
