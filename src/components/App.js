import React from 'react';
import Header from './Header';
import axios from 'axios';
import Reposlist from './Reposlist';
import get30daysbefore from '../utils/get30daysbefore';

class App extends React.Component {
  state = {
    repos: [],
    page: 1,
    scrolling: false
  };

  componentDidMount() {
    this.loadRepos();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    if (this.state.scrolling) return;
    const lastItem = document.querySelector('div.items > div.item:last-child');
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffest = 20;
    if (pageOffset > lastItemOffset - bottomOffest) this.loadMore();
  };

  loadRepos = async () => {
    const { repos, page } = this.state;

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${get30daysbefore()}&sort=stars&order=desc&page=${page}`
    );

    this.setState({
      repos: [...repos, ...response.data.items],
      scrolling: false
    });
  };

  redenrContent() {
    const { repos } = this.state;

    if (repos) {
      return <Reposlist repos={repos} />;
    }
  }

  loadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1, scrolling: true }),
      this.loadRepos
    );
  };
  render() {
    return (
      <div>
        <Header />

        {this.redenrContent()}
      </div>
    );
  }
}
export default App;
