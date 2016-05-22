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
  static title = 'Works';

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
        <Row>
          <Col sm={6}>
            <a href="/works/menkiki" onClick={Link.handleClick}>
              <img src="/works/menkiki_eyecatch.png" className="image-eyecatch" />
              <h3>麺利き</h3>
            </a>
            <div className="work-description">
              <div>
              らーめん写真に基づいてお店を提示する、らーめん屋推薦アプリ
              </div>
              <div>
              The app which can show ramen shops based on a photo of ramen you want to eat
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <h2>Old works</h2>
        <Row>
          <Col sm={6}>
            <a href="/works/pichu2" onClick={Link.handleClick}>
              <img src="/works/pichu2_eyecatch.png" className="image-eyecatch" />
              <h3>pichu*pichu</h3>
            </a>
            <div className="work-description">
              <div>
              iPhone Safari用Twitterクライアント
              </div>
              <div>
              Twitter client app for iPhone Safari
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <a href="/works/freedbtagger" onClick={Link.handleClick}>
              <img src="/works/freedbtagger_eyecatch.png" className="image-eyecatch" />
              <h3>freeDBTagger</h3>
            </a>
            <div className="work-description">
              <div>
              楽曲長の組み合わせでアルバムを特定して楽曲情報を自動入力
              </div>
              <div>
              Automatic Audio File Tagger using FreeDB
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <a href="/works/amembo" onClick={Link.handleClick}>
              <img src="/works/amembo_eyecatch.png" className="image-eyecatch" />
              <h3>amembo</h3>
            </a>
            <div className="work-description">
              <div>
              「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」
              </div>
              <div>
              P2P private file sharing tool supporting MSN Messenger
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
