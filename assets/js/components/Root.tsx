import React, { Component } from "react"
import * as ReactDOM from "react-dom"
import { Layout } from "antd"
import HelloWorld from "./HelloWorld"

export default class extends Component {
  public render(): JSX.Element {
    return (
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider theme="light">Sider</Layout.Sider>
          <Layout.Content>
            <HelloWorld />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}
