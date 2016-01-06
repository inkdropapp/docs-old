/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../../components/Link';
import { Col, Row } from 'react-bootstrap';
import './index.scss';

export default class extends Component {

  render() {
    return (
      <div className="work-detail">
        <h2>
        <a href="/works/" onClick={Link.handleClick}>Works</a>
        <span className="breadcrumb-chevron">&gt;</span>
        the four painters
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/the-four-painters_eyecatch.jpg" className="image-eyecatch" />
            <h3>the four painters</h3>
            <div className="work-description">
              <div>
              実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した映像作品
              </div>
              <div>
              The four painters: A Video Work Created with Deep Learning
              </div>
              <ul>
                <li>
                  <a href="http://blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/" target="_blank">
                  解説記事
                  </a>
                </li>
                <li>
                  <a href="http://blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/" target="_blank">
                  How it created
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6}>
            <iframe src="https://player.vimeo.com/video/146373709" width="100%" height="200" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
            <p><a href="https://vimeo.com/146373709">the four painters</a> from <a href="https://vimeo.com/noradaiko">takuya</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            <h3>掲載実績</h3>
            <div className="work-description">
              <ul>
                <li>
                  <a href="http://gigazine.net/news/20151224-deep-learning-four-painters/" target="_blank">
                  実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the four painters」 - Gigazine様
                  </a>
                </li>
                <li>
                  <a href="https://news.ycombinator.com/item?id=10782289" target="_blank">
                  The Four Painters: A Video Work Created with Deep Learning - Hacker News
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

