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
        walknote
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/walknote_eyecatch.png" className="image-eyecatch" />
            <h3>walknote</h3>
            <div className="work-description">
              <div>
              好みを理解して推薦する無料で聴き放題な音楽プレーヤー
              </div>
              <div>
              Free music discovery player
              </div>
              <div>
                <a className="link-appstore" href="https://itunes.apple.com/app/walknote-haomiwo-li-jieshite/id465898375?mt=8">
                  <img src="/works/appstore.png" className="image-appstore" />
                </a>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <img src="/works/walknote_01.png" className="image-screenshot" />
            <h3>掲載実績</h3>
            <div className="work-description">
              <ul>
                <li>
                  <a href="http://renewal49.hateblo.jp/entry/20120710/1341925681" target="_blank">
                  強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』 - リニューアル式様
                  </a>
                </li>
                <li>
                  <a href="http://www.appbank.net/2011/10/15/iphone-application/309349.php" target="_blank">
                  walknote: CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。 - appbank様
                  </a>
                </li>
                <li>
                  <a href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html" target="_blank">
                  おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。 - 男子ハック様
                  </a>
                </li>
                <li>
                  <a href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html" target="_blank">
                  「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』 - タブロイド様
                  </a>
                </li>
                <li>
                その他、多数
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

