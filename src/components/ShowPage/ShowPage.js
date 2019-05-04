import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';
import styles from './ShowPage.module.css';

// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

class ShowPage extends Component {
  componentDidMount() {
    const { showRequest, match } = this.props;

    showRequest(match.params.id);
  }

  renderShow = ({ name, image, summary, _embedded }) => (
    <article>
      <h1>{name}</h1>
      {image && <img src={image.medium} alt={name} />}
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div className={styles.cast}>
        {_embedded.cast &&
          _embedded.cast.map(({ person: { id, name, image } }) => (
            <div className="t-person" key={id}>
              <p>{name}</p>
              {image && <img src={image.medium} alt={name} />}
            </div>
          ))}
      </div>
    </article>
  );

  render() {
    const { isLoading, data, error } = this.props;

    return (
      <>
        {isLoading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error.message}</p>}
        {data && this.renderShow(data)}
      </>
    );
  }
}

const mapStateToProps = state => state.shows;

const mapDispatchToProps = {
  showRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
