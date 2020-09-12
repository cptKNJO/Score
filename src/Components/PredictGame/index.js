import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/ScoreHeader'
import { Tabs, Layout, List, Radio, Row, Col } from 'antd'
import { color } from 'd3'

const { TabPane } = Tabs
const { Content } = Layout

const exampleData = ['asdasd', 'adsasd']

const api = 'https://unify.smsgupshup.com/apps/KotakIPLApi/prediction'

const PredictGame = (props) => {
  const state = {
    value: 1,
  }

  const [games, setGames] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api)
      const data = await response.json()
      console.log(data)
      setGames(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const upcoming = games.filter(
      (game) => game.status.toLowerCase() !== 'completed',
    )
    setUpcoming(upcoming)
  }, [games])

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  console.log(props)
  return (
    <>
      <div className="s-container">
        <Header title="Predict" />

        <Content style={{ padding: '50px 50px' }}>
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Upcoming" key="1">
              <List
                size="large"
                bordered
                dataSource={upcoming}
                renderItem={(item) => (
                  <List.Item>
                    <Radio.Group
                      onChange={onChange}
                      value={state.value}
                      style={{ width: '100%', fontSize: '0.9rem' }}
                    >
                      <Row align={"middle"} justify={'space-between'}>
                        <Col>
                          KKR <Radio value={1} />
                        </Col>
                        <Col>
                          <Col align={'middle'}>
                            {`17th Sep 2020`}
                            <div>VS</div>
                          </Col>
                        </Col>
                        <Col>
                          <Radio value={2} /> CSK
                        </Col>
                      </Row>
                    </Radio.Group>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Completed" key="2">
              Content of card tab 2
            </TabPane>
          </Tabs>
        </Content>

        <Footer />
      </div>
    </>
  )
}

export default PredictGame
