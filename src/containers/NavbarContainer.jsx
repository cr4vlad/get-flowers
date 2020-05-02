import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

class NavbarContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      screenWidth: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth })
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

export default connect(
  mapStateToProps,
  null
)(NavbarContainer)
