import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { updateScreenWidth } from '../store/actions'

class NavbarContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      screenWidth: window.innerWidth
    }
    this.props.setScreenWidth(window.innerWidth)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth })
    this.props.setScreenWidth(window.innerWidth)
  }

  render () {
    if (!this.props.categories || !this.state.screenWidth) {
      console.log('NavbarContainer props.categories:', this.props.categories)
      console.log('NavbarContainer state.screenWidth:', this.state.screenWidth)

      return (
        <p className='loading'>Loading categories...</p>
      )
    }

    return (
      <Navbar categories={this.props.categories} screenWidth={this.state.screenWidth} />
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.data.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScreenWidth: screenWidth => dispatch(updateScreenWidth(screenWidth))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer)
