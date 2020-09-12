import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/ScoreHeader'
import UpcomingList from './UpcomingList'
import { Tabs, Layout } from 'antd'

const { TabPane } = Tabs
const { Content } = Layout

const api = 'https://unify.smsgupshup.com/apps/KotakIPLApi/prediction'

const PredictGame = () => {
  const [games, setGames] = useState([])
  const [upcoming, setUpcoming] = useState([])

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

        <Content style={{ padding: '50px 50px' }}>
          <Tabs type="card">
            <TabPane tab="Upcoming" key="1">
              <UpcomingList data={upcoming} />
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
