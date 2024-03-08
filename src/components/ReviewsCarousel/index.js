// Write your code here

import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftButton = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(previousCount => ({count: previousCount.count - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    const rightButton = () => {
      if (count <= reviewsList.length - 2) {
        this.setState(previousCount => ({count: previousCount.count + 1}))
      }
    }

    return (
      <div className="main">
        <div className="content">
          <h1 className="h1">Reviews</h1>

          <div className="content2">
            <button
              data-testid="leftArrow"
              onClick={this.leftButton}
              className="button"
              type="button"
            >
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="content3">
              <img
                className="image2"
                src={reviewsList[count].imgUrl}
                alt={reviewsList[count].username}
              />
              <p className="p1">{reviewsList[count].username}</p>
              <p className="p2">{reviewsList[count].companyName}</p>
              <p className="p3">{reviewsList[count].description}</p>
            </div>
            <button
              data-testid="rightArrow"
              onClick={rightButton}
              className="button"
              type="button"
            >
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
