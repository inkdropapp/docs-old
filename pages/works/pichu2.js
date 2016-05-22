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
  static title = 'pichu*pichu';

  render() {
    return (
      <div className="work-detail">
        <h2>
        <a href="/works/" onClick={Link.handleClick}>Works</a>
        <span className="breadcrumb-chevron">&gt;</span>
        pichu*pichu
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/pichu2_eyecatch.png" className="image-eyecatch" />
            <h3>pichu*pichu</h3>
            <div className="work-description">
              <div>
              iPhone Safari用Twitterクライアント
              </div>
              <div>
              Twitter client app for iPhone Safari
              </div>
              <div>
                制作時期: 2010年頃
              </div>
            </div>
            <div className="work-long-description">
              <p>
              Twitter黎明期、iPhone 3GS時代の当時としては珍しいWeb版クライアント。
              大学院での研究目的で制作。
              ソーシャルメディアを通じた利用行動を分析した。
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <img src="/works/pichu2_01.png" className="image-screenshot" />
            <h3>掲載実績</h3>
            <div className="work-description">
              <ul>
                <li>
                  <a href="http://www.donpy.net/standard-entry/app-reiview/4303.html" target="_blank">
                  Webアプリ版twitterクライアントの「pichu*pichu」が凄い。 | 覚醒する @CDiP
                  </a>
                </li>
                <li>
                  <a href="http://labs.laurahouse.net/articles/iphone/1115.html" target="_blank">
                  LauraHouse Labs » Blog Archive » 知っておきたいWebアプリ版Twitterクライアント活用法
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

