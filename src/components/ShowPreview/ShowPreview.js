import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';
import classNames from 'classnames';

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

const ShowPreview = ({ id, name, image, summary }) => (
  <div className={classNames(styles.container, 't-preview')}>
    <h2>
      <Link className="t-link" to={`/shows/${id}`}>
        {name}
      </Link>
    </h2>

    {image && (
      <Link to={`/shows/${id}`}>
        <img src={image.medium} alt={name} />
      </Link>
    )}

    <div dangerouslySetInnerHTML={{ __html: summary }} />
  </div>
);

export default ShowPreview;
