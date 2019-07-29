import React, { Component } from 'react'
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
import "brace/snippets/javascript";
import "brace/ext/beautify";
import "brace/ext/emmet";
import 'brace/ext/language_tools';
import 'brace/ext/spellcheck';
import 'brace/ext/themelist';
import 'brace/keybinding/vim';
const axios = require('axios');

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aceEditorValue: ""
    }
  }
  onChange = (value) => {
    this.setState({
      aceEditorValue: value
    })
  };
  onClick = async () => {
    alert("Submitted" + this.state.aceEditorValue)
    axios.get('http://127.0.0.1:8080', {
      params: {
        code: this.state.aceEditorValue
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return (
      <div className="fullheight">
        <div className="fullheight">
          <AceEditor
            placeholder="Please enter your custiomized signature here"
            mode="javascript"
            theme="monokai"
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
            value={this.state.aceEditorValue}
            width="100vh"
            height="90vh"
            id="umer"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 4,
            }} />

          <button type="button" onClick={this.onClick} >Submit code</button>
        </div>
      </div>
    )
  }
}
