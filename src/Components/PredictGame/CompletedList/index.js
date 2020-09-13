import React from 'react'
import TeamCol from './TeamCol'
import { List, Radio, Row, Col } from 'antd'

import { colors } from '../config'

const CompletedList = ({ data }) => {
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
            disabled
            defaultValue={item.user_prediction}
            style={{ width: '100%', fontSize: '0.9rem' }}
          >
            <Row align={'middle'} justify={'space-between'}>
              <TeamCol item={item} teamNo={1} />
              <Col>
                <Col
                  flex={'auto'}
                  align={'middle'}
                  style={{ fontSize: '12px', }}
                >
                  {`17th Sep 2020`}
                  {item.user_prediction === item.winner ? (
                    <div style={{ color: colors.green, fontStyle: 'italic'  }}>
                        You won 20 points
                    </div>
                  ) : (
                    <div style={{ color: colors.red, fontStyle: 'italic'  }}>
                        Oops! Wrong prediction
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

export default CompletedList
