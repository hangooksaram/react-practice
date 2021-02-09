import React from 'react'
import EventPracticeComponent from './EventPracticeComponent'
import EventPracticeFunction from './EventPracticeFunction'

class EventPractice extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    <EventPracticeComponent/>
                    <EventPracticeFunction/>
                </h1>
            </div>
        )
    }
}

export default EventPractice