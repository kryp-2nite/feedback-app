import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback,setFeedback] = useState([
        {
        id:1,
        text: "this is feedback item 1",
        rating: 10
        },
        {
        id:2,
        text: "this is feedback item 2",
        rating: 7
        },
        {
        id:3,
        text: "this is feedback item 3",
        rating: 9
        },
])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }


    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...updatedItem} : item))
        }
    
    
    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ 
            item,
            edit: true,
        })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
         {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext
