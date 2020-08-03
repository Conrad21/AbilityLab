import React, { Fragment } from "react";
import { Card, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import Title from "antd/lib/typography/Title";

export const Patient = ({ name, avatarSrc, children }) => (
  <Card bordered style={{ width: 300, height: 440, float: "left", margin: 10 }}>
    <Meta avatar={<Avatar src={avatarSrc} />} title={name} />
    <br></br>
    {children}
  </Card>
);

export const HitsAvg = ({ hitsAvg, children }) => (
  <Card.Grid style={{ width: "100%" }}>
    <Title level={4}> AVG Hit/Misses : {hitsAvg}</Title>
    {children}
  </Card.Grid>
);

export const OtherData = ({ children }) => (
  <Card.Grid style={{ width: "100%" }}>
    <Title level={4}>DATA</Title>
    {children}
  </Card.Grid>
);

export const Detail = ({ hits, misses }) => (
  <Fragment>
    Hits : {hits}
    <br></br>
    Misses : {misses}
  </Fragment>
);

export const OtherDetail = ({ Distance, other }) => (
  <Fragment>
    Walking Distance : {Distance}
    <br></br>
    Other : {other}
  </Fragment>
);
