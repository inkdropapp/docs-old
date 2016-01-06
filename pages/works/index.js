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
      <div className="works-list">
        <h2>Works</h2>
        <Row>
          <Col sm={6}>
            <a href="/works/walknote" onClick={Link.handleClick}>
              <img src="/works/walknote_eyecatch.png" className="image-eyecatch" />
              <h3>walknote</h3>
            </a>
            <div className="work-description">
              <div>
              好みを理解して推薦する無料で聴き放題な音楽プレーヤー
              </div>
              <div>
              Free music discovery player
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <a href="/works/the-four-painters" onClick={Link.handleClick}>
              <img src="/works/the-four-painters_eyecatch.jpg" className="image-eyecatch" />
              <h3>the four painters</h3>
            </a>
            <div className="work-description">
              <div>
              実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した映像作品
              </div>
              <div>
              The four painters: A Video Work Created with Deep Learning
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <hr />
          随時更新
        </div>
      </div>
    );
  }

}
