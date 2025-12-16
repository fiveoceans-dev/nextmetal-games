# Game Recording Studio - MVP Demo

## Overview

This MVP demo showcases a complete game recording platform designed to capture synchronized video and input data for AI training. The application records screen content with system audio, webcam footage, and keyboard/mouse events - all perfectly synchronized for machine learning pipelines.

## Features

### 🎥 **Multi-Stream Recording**
- **Screen Capture**: Record entire screen or application window with system audio
- **Webcam Overlay**: 720p camera feed overlaid on screen recording
- **Input Logging**: Complete keyboard and mouse event capture with timestamps

### 🤖 **AI-Training Ready**
- **Synchronized Data**: All streams timestamped with millisecond precision
- **Structured Export**: JSON + WebM format optimized for ML training
- **Frame-to-Frame Sync**: Webcam and screen recording perfectly aligned

### ⚡ **Real-Time Processing**
- **Live Preview**: Real-time overlay of screen + webcam
- **Performance Optimized**: Low latency recording for gaming scenarios
- **Auto Downloads**: Files automatically download when recording stops

## How to Access

### Option 1: Web App (Recommended)
1. Navigate to the home page
2. Click "🎮 Try MVP Demo" button in the hero section
3. Or use the "MVP Demo" button in the navigation bar
4. Access via: `http://localhost:8080/mvp-demo`

### Option 2: Standalone HTML
- Open `mvp-demo.html` directly in any modern browser
- No server required, works offline

## Usage Instructions

### 1. **Setup Permissions**
When you first click "Start Recording", your browser will request:
- Screen capture permission
- Webcam access permission

**Allow both permissions** for the demo to work properly.

### 2. **Choose Recording Source**
- **Entire Screen**: Records your full display
- **Application Window**: Records only a specific app window

### 3. **Start Recording**
- Click the green "▶️ Start Recording" button
- The interface will show:
  - 🔴 RECORDING indicator
  - Live preview with webcam overlay
  - Real-time event counters
  - Session timer

### 4. **During Recording**
- Play your game normally
- All keyboard/mouse inputs are logged
- Screen and webcam are synchronized
- System audio is captured

### 5. **Stop Recording**
- Click "⏹️ Stop Recording" button
- Files automatically download:
  - `recording_[timestamp].webm` - Video file
  - `recording_[timestamp]_input.json` - Input data

## Data Format

### Video File (.webm)
- **Codec**: VP9 for high quality compression
- **Content**: Synchronized screen + webcam overlay
- **Audio**: System audio (no microphone)
- **Resolution**: Matches your screen resolution

### Input Data (.json)
```json
{
  "sessionId": "recording_1703123456789",
  "startTime": 1703123456789,
  "inputEvents": [
    {
      "timestamp": 1703123456790,
      "type": "keyboard",
      "event": "keydown",
      "data": {
        "key": "W",
        "code": "KeyW",
        "ctrlKey": false,
        "altKey": false,
        "shiftKey": false
      }
    },
    {
      "timestamp": 1703123456795,
      "type": "mouse",
      "event": "mousemove",
      "data": {
        "x": 500,
        "y": 300,
        "screenX": 500,
        "screenY": 300
      }
    }
  ],
  "duration": 45000
}
```

## Technical Details

### Browser Compatibility
- **Chrome/Edge**: Full support (recommended)
- **Firefox**: Limited screen audio support
- **Safari**: Limited support

### System Requirements
- **Modern Browser**: Chrome 88+, Edge 88+, Firefox 85+
- **Permissions**: Screen capture + webcam access
- **Hardware**: Any modern PC with webcam

### Performance
- **CPU Usage**: ~5-15% during recording
- **Memory**: ~50-200MB depending on resolution
- **Storage**: ~50MB/minute for 1080p recording

## Use Cases

### 🎮 **Gaming AI Training**
- Record gameplay sessions
- Capture player inputs and reactions
- Train AI agents on human gameplay patterns

### 📊 **Behavioral Analysis**
- Study player decision-making
- Analyze input patterns and timing
- Research gaming psychology

### 🔬 **Research & Development**
- Create training datasets
- Benchmark AI performance
- Develop new ML algorithms

## Troubleshooting

### Recording Doesn't Start
- **Check Permissions**: Allow screen and camera access
- **Browser Support**: Use Chrome/Edge for best results
- **HTTPS Required**: Screen capture requires secure context

### Audio Not Captured
- **System Audio**: Some browsers don't capture system audio
- **Browser Limitations**: Firefox has limited audio support
- **OS Settings**: Check system audio permissions

### Webcam Not Showing
- **Camera Access**: Allow camera permission
- **Multiple Cameras**: Select correct camera if multiple available
- **Hardware**: Ensure webcam is connected and working

### Files Don't Download
- **Browser Settings**: Check download permissions
- **Pop-up Blockers**: Allow pop-ups for the demo
- **Storage**: Ensure sufficient disk space

## Future Enhancements

Based on this MVP, the full platform will include:
- **Advanced Synchronization**: Sub-millisecond precision
- **Cloud Storage**: Automatic upload and processing
- **Batch Processing**: Large-scale data pipelines
- **AI Integration**: Direct ML training pipeline
- **Multi-Camera Support**: Multiple webcam angles
- **Real-time Analysis**: Live performance metrics

## Contributing

This MVP demonstrates the core technology. The full implementation includes:
- Electron desktop app for better system integration
- Rust native modules for performance-critical code
- Advanced video processing and synchronization
- Machine learning pipeline integration

---

**Ready to train AI agents?** Start recording your gameplay sessions! 🎮🤖
