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
        freeDBTagger
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/freedbtagger_eyecatch.png" className="image-eyecatch" />
            <h3>
              <img src="/works/freedbtagger_icon.gif" />
            </h3>
            <h3>freeDBTagger</h3>
            <div className="work-description">
              <div>
              楽曲長の組み合わせでアルバムを特定して楽曲情報を自動入力
              </div>
              <div>
              Automatic Audio File Tagger using FreeDB
              </div>
              <div>
                <ul>
                  <li>
                    <a className="link-appstore" href="http://odoruinu.net.s3.amazonaws.com/software/freedbtagger/fdbt105.zip">
                    ダウンロード
                    </a>
                  </li>
                  <li>バージョン: 1.0.5</li>
                  <li>最終更新日: 2009/02/16</li>
                  <li>対応OS: Windows 2000/XP</li>
                </ul>
              </div>
              <p>
              アルバム内楽曲の再生時間の組み合わせで、CDDBサーバー“freeDB.org”を検索してアルバムを特定、楽曲情報を取得できるID3タグ一括編集ソフト。本ソフトを起動し、読み込んだアルバム1枚分の音楽ファイルの曲順を整えて［アルバム検索］を実行すれば、あとは本ソフトが、オープンソースで運営されているCDDBサーバー“freeDB.org”で再生時間の組み合わせからアルバムを特定して、アルバム名や曲名、アーチスト名などの情報を取得してくれる。MP3/WMA/Ogg Vorbis/AAC/Monkey's Audio/MPEGplus/FLAC/Twin VQ/WavPackファイルの楽曲情報を取得・編集できるほか、CDAファイルの楽曲情報を表示可能。MP3ファイルのタグに登録する場合のタグ形式は、ID3v1・ID3v2に対応しており、設定画面で選択可能。タグ項目内の文字数が30文字以上の場合のみ、ID3v2に登録する機能も備えている。
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <a href="/works/freedbtagger_01.jpg" target="_blank">
              <img src="/works/freedbtagger_01.jpg" className="image-screenshot" />
            </a>
            <h3>掲載実績</h3>
            <div className="work-description">
              <ul>
                <li>
                  <a href="http://www.forest.impress.co.jp/library/software/freedbtagger/" target="_blank">
                  窓の杜ライブラリ
                  </a>
                </li>
              </ul>
            </div>
            <h3>ユーザさんの声</h3>
            <div className="work-description">
              <dl>
                <dt>
                FLACにも対応 - よーすけさん
                </dt>
                <dd>
                音質にこだわってFLACを使用している場合、
                なかなかタグを自動で付けられるソフトはありませんが、
                これはCDDBから曲情報をDLまでしてくれるので、
                とてもお手軽簡単です。
                </dd>

                <dt>
                CDDB対応のタグエディタ - noname_24さん
                </dt>
                <dd>
                純粋なタグ打ちソフトとしての能力はSuperTagEditorの方が優秀ですがこのソフトはCDDBに対応しているのが最大の利点です
                CDからだけではなくmp3など圧縮後の状態からでも取得できるのですでに作成済みの曲整理が楽になりました
                </dd>

                <dt>
                昔の曲にタグを入れるに最適 - るるさん
                </dt>
                <dd>
                最近のリッピングソフトであれば自動で曲名を持ってきてくれますが以前リッピングしたままでタグが付いてない曲にタグを付けるのには最適です。
                参照しているCDDBについてもかなりマイナーなものまで曲名を拾ってくれるのでびっくりします。
                </dd>

                <dt>
                2 in 1 - マルちゃんさん
                </dt>
                <dd>
                タグ編集はいろいろなソフトが出ていますが、DBから情報を拾ってくれる機能付では、このソフトが最高です。
                操作も簡単で、手放せません。
                </dd>

                <dt>
                便利 - Masaki4さん
                </dt>
                <dd>
                普通CDDBというとCDを入れた状態でデータベースから読み込んでいきますが、このソフトはMP3などのファイルになっていても使えます。（もちろん、CDの通りに曲を並べなければいけませんが・・・）
                ただ、ほんのちょっと不安定さを感じたので４つ...
                </dd>
              </dl>
              <a href="http://www.vector.co.jp/soft/cmt/win95/art/se350576.html" target="_blank">
              Vectorより
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

