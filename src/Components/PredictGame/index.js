import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/ScoreHeader'
import UpcomingList from './UpcomingList'
import CompletedList from './CompletedList'
import { Tabs, Layout } from 'antd'

const { TabPane } = Tabs
const { Content } = Layout
import { colors } from './config'
import styles from './predictgame.scss'

const api = 'https://unify.smsgupshup.com/apps/KotakIPLApi/prediction'

const PredictGame = () => {
  const [games, setGames] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api)
      const data = await response.json()
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

  useEffect(() => {
    const completed = games.filter(
      (game) => game.status.toLowerCase() === 'completed',
    )
    setCompleted(completed)
  }, [games])

  const handleRadio = (e, item) => {
    // Update upcoming list with newly picked item
    const newUpcoming = upcoming.map(oldPrediction => {
      if (oldPrediction.matchId === item.matchId) {
        return ({
          ...oldPrediction,
          user_prediction: e.target.value
        })
      }
      return oldPrediction
    })
    
    setUpcoming(newUpcoming)
  }

  return (
    <>
      <div className="s-container">
        <Header title="Predict" />

        <Content style={{ padding: '60px 60px' }}>
          <Tabs
            defaultActiveKey="1"
          >
            <TabPane tab="Upcoming" key="1"
              style={{
                color: colors.grayDark
              }}
            >
              <UpcomingList data={upcoming} onChange={handleRadio}/>
            </TabPane>
            <TabPane tab="Completed" key="2">
            <CompletedList data={completed} />
            </TabPane>
          </Tabs>
        </Content>

        <Footer />
      </div>
    </>
  )
}

export default PredictGame
