import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/';
import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';
import classNames from 'classnames';

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

class Search extends Component {
  state = {
    searchText: ''
  };

  handleInput = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSearch = e => {
    const { searchText } = this.state;
    const { searchRequest } = this.props;
    if (searchText === '') {
      return;
    }
    searchRequest(searchText);
    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;
    const { isLoading, shows, error } = this.props;
    if (isLoading || shows || error) {
      return (
        <div className={classNames(styles.searchPanel, 't-search-result')}>
          {isLoading && <p>Выполняется поиск...</p>}
          {error && <p>Ошибка: {error.message}</p>}
          {shows &&
            shows.map(({ id, name, image, summary }) => (
              <ShowPreview
                key={id}
                id={id}
                name={name}
                image={image}
                summary={summary}
              />
            ))}
        </div>
      );
    }

    return (
      <>
        <div className={styles.previewList}>
          <input
            className={styles.input}
            value={searchText}
            onChange={this.handleInput}
            placeholder="Название сериала"
          />
          <div className={styles.buttonWrapper}>
            <button
              className={classNames(styles.button, 't-search-button')}
              onClick={this.handleSearch}
            >
              Найти
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => state.search;

const mapDispatchToProps = {
  searchRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
