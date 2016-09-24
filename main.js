'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
} from 'react-native';

var WebRTC = require('react-native-webrtc');
var {
   RTCPeerConnection,
   RTCMediaStream,
   RTCIceCandidate,
   RTCSessionDescription,
   RTCView,
   MediaStreamTrack,
   getUserMedia,
} = WebRTC;
var configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
var pc = new RTCPeerConnection(configuration);
window.navigator.userAgent = "react-native";
require("./bkclient/index.js");
const io = require('socket.io-client/socket.io');
var container;
var peer = null;
var service = null;
let localStream;


var video_constraints = {
  mandatory: {
   	minWidth: 320,
	  maxWidth: 1280,
	  minHeight: 180,
	  maxHeight: 720,
	  minFrameRate: 30
  },
  optional:[]
};

var options = {
	video: video_constraints,
	audio: true
};

var config = {
  HOST: "https://bkmedia.ga:8212/test",
  ICE_SERVERS: [
						      { url: 'stun:stun-turn.org:3478'},
						      {
                    url: 'turn:162.218.209.70:3478',
                    credential: 'bkrtc_test_turn_2016',
                    username: 'bkrtc_turn'

						      }
						   ],
  pc: RTCPeerConnection,
  candidate: RTCIceCandidate,
  rsd: RTCSessionDescription
};


function handle_message(service) {

	service.event.on("LOGGING", function(data) {
		console.log(data);
		// add_log(data);
	});

	service.event.on("remote_stream", function(stream, peer_id) {
    console.log("service remote_stream");
		container.setState({remoteViewSrc: stream.toURL()});
	});

	service.event.on("end_remote_stream", function(peer_id) {
    container.setState({remoteViewSrc: ""});
    container.setState({selfViewSrc: ""});

	});

	service.event.on("MAKE_CALL", function(data) {
    console.log("service MAKE_CALL");
    getLocalStream(true,function(stream) {

      service.stream = stream
      service.accept_call(data);
    },
    function(error) {
      console.log(error);
    });
	});
}


function getLocalStream(isFront, callback) {
  MediaStreamTrack.getSources(sourceInfos => {
    console.log(sourceInfos);
    let videoSourceId;
    for (const i = 0; i < sourceInfos.length; i++) {
      const sourceInfo = sourceInfos[i];
      if(sourceInfo.kind == "video" && sourceInfo.facing == (isFront ? "front" : "back")) {
        videoSourceId = sourceInfo.id;
      }
    }
    getUserMedia({
      "audio": true,
      "video": {
        optional: [{sourceId: videoSourceId}]
      }
    }, function (stream) {
      console.log('dddd', stream);
      callback(stream);
    }, logError);
  });
}
function logError(error) {
  console.log("logError", error);
}

const rocketRTC = React.createClass({
getInitialState: function() {
  return {
    selfViewSrc: null,
    peer_name: null,
    remoteViewSrc: null,
    call_name:null,
   };
},
componentDidMount: function() {
  container = this;
},
enableVideo() {
    getLocalStream(true, function(stream) {
      container.setState({selfViewSrc: stream.toURL()});

    });
},
register(){
    console.log("register");
    var peer_name = this.state.peer_name;
    var bk_peer = bkrtc.create();
    bk_peer.config = config;
    peer = bkrtc.init(bk_peer, "123", {socket: io, path: '/videoconference'});
  	service = peer.stream_media(peer_name);
  	handle_message(service);
},
call(){
  console.log("call");
  var peer_name = this.state.call_name;
  getLocalStream(true, function(stream) {
    service.stream = stream;
    container.setState({selfViewSrc: stream.toURL()});
    service.call_user(peer_name, function(error) {
        if(error) {
            console.log("call errror");
          console.log(error);
          return;
        }
      });
  });
},
cell(){
  service.get_user_media(options, function(stream) {
      console.log(stream);
    });
},
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1}}
        onChangeText={value => this.setState({peer_name: value})}
        value={this.state.peer_name}
      />
      <TextInput
        style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1}}
        onChangeText={value => this.setState({call_name: value})}
        value={this.state.call_name}
      />
        <Text>name : {this.state.peer_name}</Text>
        <Text>call : {this.state.call_name}</Text>
      <TouchableHighlight
        style={{borderWidth: 1, borderColor: 'black'}}
        onPress={this.enableVideo}>
        <Text>Switch camera</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{borderWidth: 1, borderColor: 'black'}}
        onPress={this.register}>
        <Text>register</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{borderWidth: 1, borderColor: 'black'}}
        onPress={this.call}>
        <Text>call</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{borderWidth: 1, borderColor: 'black'}}
        onPress={this.cell}>
        <Text>cell</Text>
      </TouchableHighlight>
      <RTCView streamURL={this.state.selfViewSrc} style={styles.selfView}/>
      <RTCView streamURL={this.state.remoteViewSrc} style={styles.selfView}/>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  selfView: {
    width: 200,
    height: 150,
  },
  remoteView: {
    width: 200,
    height: 150,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listViewContainer: {
    height: 150,
  },
});

AppRegistry.registerComponent('rocketRTC', () => rocketRTC);
