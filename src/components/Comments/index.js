import {Component} from 'react'

import {v4} from 'uuid'

import {format} from 'date-fns'

import CommentItems from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    commentInput: '',
    isActive: '',
    count: 0,
  }

  onChangeDateInput = event => {
    this.setState({commentInput: event.target.value})
    console.log(event.target.value)
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, commentInput, isLike} = this.state
    const newAppointment = {
      id: v4(),
      title: titleInput,
      comment: commentInput,
      like: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      commentInput: '',
      isActive: true,
      count: prevState.count + 1,
    }))
  }

  del = card => {
    const {appointmentsList} = this.state
    const k = appointmentsList.filter(each => each.id === card)
    this.setState({appointmentsList: k})
    this.setState(pre => ({count: pre.count - 1}))
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {
      isActive,
      titleInput,
      appointmentsList,
      commentInput,
      count,
    } = this.state
    console.log(appointmentsList)
    return (
      <div className="bg-container">
        <div className="abha">
          <div>
            <form className="foram" onSubmit={this.onAddAppointment}>
              <h1 className="main-heading">Comments</h1>
              <p className="para">Say something about 4.0 technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <textarea
                rows="15"
                cols="20"
                className="text"
                placeholder="Your Comment"
                onChange={this.onChangeDateInput}
                value={commentInput}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <p className="para">
            {' '}
            <span className="button">{count}</span>Comments
          </p>
          {isActive && (
            <ul>
              {appointmentsList.map(each => (
                <CommentItems
                  items={each}
                  key={each.id}
                  dell={this.del}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Comments
