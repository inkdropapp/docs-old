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
  static title = '麺利き';

  render() {
    return (
      <div className="work-detail">
        <h2>
        <a href="/works/" onClick={Link.handleClick}>Works</a>
        <span className="breadcrumb-chevron">&gt;</span>
        麺利き
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/menkiki_eyecatch.png" className="image-eyecatch" />
            <h3>麺利き</h3>
            <div className="work-description">
              <div>
              らーめん写真に基づいてお店を提示する、らーめん屋推薦アプリ
              </div>
              <div>
              The app which can show ramen shops based on a photo of ramen you want to eat
              </div>
              <div>
                <a className="link-appstore" href="https://itunes.apple.com/app/麺利き/id1035645520?mt=8">
                  <img src="/works/appstore.png" className="image-appstore" />
                </a>
              </div>
            </div>
            <div className="work-long-description">
              <h4>写真で「こんな感じ！」が伝えられる新しい探し方</h4>
              <p>
              食べておいしかったらーめん、ありますよね。
              その写真をアプリに入力してください。
              すると、アプリが似た雰囲気のらーめんを出すラーメン屋を探します。
              </p>
              <h4>開発には30万枚のらーめん画像を使用</h4>
              <p>
              開発には、最近何かと話題のディープラーニングという機械学習アルゴリズムの一つを使用しました。
              推薦アルゴリズムのために、30万枚のらーめん画像を集めて学習させました。
              つまり、このアプリは「らーめんとは何か」を理解しているのです！（どーん）
              </p>
            </div>
            <div>
              <a href="http://sssslide.com/speakerdeck.com/noradaiko/caffedeoshou-qing-ben-ge-deipuraninguiosapuri" target="_blank">
              技術的な解説
              </a>
            </div>
          </Col>
          <Col sm={6}>
            <img src="/works/menkiki_01.png" className="image-screenshot" />
          </Col>
        </Row>
      </div>
    );
  }

}

