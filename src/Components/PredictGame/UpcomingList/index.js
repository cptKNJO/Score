import React from 'react'
import { List, Radio, Row, Col } from 'antd'

import { colors } from '../config'

const UpcomingList = ({ data }) => {
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{
            backgroundColor: item.user_prediction && colors.gray,
            padding: '0',
          }}
        >
          <Radio.Group
            onChange={(e) => handleRadio(e, item)}
            defaultValue={item.user_prediction}
            style={{ width: '100%', fontSize: '0.9rem' }}
          >
            <Row align={'middle'} justify={'space-between'}>
              <Col
                style={{
                  alignSelf: 'stretch',
                  backgroundColor:
                    item.user_prediction === item.team_1 && colors.purple,
                  color: item.user_prediction === item.team_1 && colors.white,
                  padding: '0.6rem 0.8rem',
                }}
              >
                {item.team_1}{' '}
                <Radio
                  checked={item.user_prediction === item.team_1}
                  value={item.team_1}
                  style={{ marginLeft: '0.4rem' }}
                />
              </Col>
              <Col>
                <Col
                  flex={'auto'}
                  align={'middle'}
                  style={{ fontSize: '0.7rem' }}
                >
                  {`17th Sep 2020`}
                  {console.log(item)}
                  {item.user_prediction !== '' ? (
                    <div>VS</div>
                  ) : (
                    <div style={{ color: colors.purple, fontWeight: 'bold' }}>
                      Select a team
                    </div>
                  )}
                </Col>
              </Col>
              <Col
                style={{
                  backgroundColor:
                    item.user_prediction === item.team_2 && colors.purple,
                  color: item.user_prediction === item.team_2 && colors.white,
                  alignSelf: 'stretch',
                  padding: '0.6rem 0.8rem',
                }}
              >
                <Radio
                  checked={item.user_prediction === item.team_2}
                  value={item.team_2}
                  style={{ marginRight: '0.4rem' }}
                />{' '}
                {item.team_2}
              </Col>
            </Row>
          </Radio.Group>
        </List.Item>
      )}
    />
  )
}

export default UpcomingList
