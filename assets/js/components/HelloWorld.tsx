import React, { Component, ChangeEvent } from "react"
import * as ReactDOM from "react-dom"
import { DatePicker, message, Alert } from "antd"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const QUERY = gql`
  query {
    helloWorld {
      id
      world
    }
  }
`

const ME_QUERY = gql`
  {
    me {
      id
      email
      name
    }
  }
`

export default class extends Component {
  state = { date: null }

  private handleChange = (date: any) => {
    message.info(`Selected date: ${date ? date.format("YYYY-MM-DD") : "None"}`)
    this.setState({ date })
  }

  public render(): JSX.Element {
    const { date } = this.state

    return (
      <div style={{ width: 400, margin: "100px auto" }}>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          <Alert message={`Selected date: ${date ? date.format("YYYY-MM-DD") : "None"}`} type="success" />
        </div>
        <div style={{ marginTop: 20 }}>
          <Query query={QUERY}>
            {({ data, loading }) =>
              loading || <Alert message={`data: ${JSON.stringify(data, null, 4)}`} type="info" closable />
            }
          </Query>
        </div>
        <div style={{ marginTop: 20 }}>
          <Query query={ME_QUERY}>
            {({ data, loading }) =>
              loading || <Alert message={`data: ${JSON.stringify(data, null, 4)}`} type="warning" closable />
            }
          </Query>
        </div>
      </div>
    )
  }
}
