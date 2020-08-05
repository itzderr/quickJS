const ReposGrid = React.createClass({
  getInitialState() {
    return {
      repos: [],
      loading: true,
    }
  },

  componentDidMount() {
    this.updateRepos(this.props.id)
  },

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateRepos(this.props.id)
    }
  },

  updateRepos() {
    this.setState({ loading: true })
    fetchRepos(id).then((repos) => this.setState({ repos, loading: false }))
  },

  render() {
    if (this.state.loading === true) {
      return <Loading />
    }

    return (
      <ul>
        {this.state.repos.map(({ name, handle, stars, url }) => (
          <li key={name}>
            <ul>
              <li>
                <a href={url}>{name}</a>
              </li>
              <li>@{handle}</li>
              <li>{stars} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  },
})
