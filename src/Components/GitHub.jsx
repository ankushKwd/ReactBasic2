function HOC(WrappedComponent) {
    return class Test extends Component {
      render() {
        const newProps = {
          title: 'New Header',
          footer: false,
          showFeatureX: false,
          showFeatureY: true
        }
  
        return <WrappedComponent {...this.props} {...newProps} />
      }
    }
  }

  //Api for random user generator
  //https://randomuser.me/api/?results=10



  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info)
    }
  
    static getDerivedStateFromError(error) {
       // Update state so the next render will show the fallback UI.
       return { hasError: true };
     }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{'Something went wrong.'}</h1>
      }
      return this.props.children
    }
  }


  <ErrorBoundary>
  <MyWidget />
</ErrorBoundary>