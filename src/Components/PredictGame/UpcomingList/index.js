import React from 'react'
import TeamCol from './TeamCol'
import { List, Radio, Row, Col } from 'antd'

import { colors } from '../config'

const UpcomingList = ({ data, onChange }) => {
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
            onChange={(e) => onChange(e, item)}
            defaultValue={item.user_prediction}
            style={{ width: '100%', fontSize: '14px' }}
          >
            <Row align={'middle'} justify={'space-between'}>
              <TeamCol item={item} teamNo={1} />
              <Col>
                <Col
                  flex={'auto'}
                  align={'middle'}
                  style={{ fontSize: '12px' }}
                >
                  {`17th Sep 2020`}
                  {item.user_prediction !== '' ? (
                    <div>VS</div>
                  ) : (
                    <div style={{ color: colors.purple, fontWeight: 'bold' }}>
                      Select a team
                    </div>
                  )}
                </Col>
              </Col>
              <TeamCol item={item} teamNo={2} />
            </Row>
          </Radio.Group>
        </List.Item>
      )}
    />
  )
}

export default UpcomingList
