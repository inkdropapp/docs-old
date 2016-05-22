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
  static title = 'Amembo';

  render() {
    return (
      <div className="work-detail">
        <h2>
        <a href="/works/" onClick={Link.handleClick}>Works</a>
        <span className="breadcrumb-chevron">&gt;</span>
        amembo
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/amembo_eyecatch.png" className="image-eyecatch" />
            <h3>
              <img src="/works/amembo_icon.png" />
            </h3>
            <h3>amembo</h3>
            <div className="work-description">
              <div>
              「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」
              </div>
              <div>
              P2P private file sharing tool supporting MSN Messenger
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <a href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
                  ダウンロード
                  </a>
                </li>
                <li>
                  <a href="http://www23.atwiki.jp/amembo/">
                  使い方wiki
                  </a>
                </li>
                <li>バージョン: 0.5.15.123</li>
                <li>最終更新日: 2008/03/23</li>
                <li>対応OS: Windows 2000/XP</li>
              </ul>
            </div>
            <div className="work-long-description">
              <ul>
              <li>ファイル転送がサイズ制限無く高速に出来ます。</li>
              <li>複数のコンピュータ間で同時に通信が出来ます。</li>
              <li>簡単接続機能により、面倒な接続作業を自動で行います。</li>
              <li>一つのポート開放だけで、様々な通信が出来る強力なプロトコル。</li>
              <li>IM機能を装備しています。会話中に写真を表示したりもできます。</li>
              <li>ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。</li>
              <li>MSN/Windowsメッセンジャーからの招待で接続できます。</li>
              <li>画面転送機能で、相手に自分のデスクトップを見せることが出来ます。</li>
              </ul>
            </div>
          </Col>
          <Col sm={6}>
            <a href="/works/amembo_01.gif" target="_blank">
              <img src="/works/amembo_01.gif" className="image-screenshot" />
            </a>
            <a href="/works/amembo_02.gif" target="_blank">
              <img src="/works/amembo_02.gif" className="image-screenshot" />
            </a>
            <h3>掲載実績</h3>
            <div className="work-description">
              <ul>
                <li>
                  <a href="http://www.forest.impress.co.jp/article/2006/01/18/amembo.html" target="_blank">
                  窓の杜ニュース
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

