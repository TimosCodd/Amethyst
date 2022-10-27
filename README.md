<img align="left" src="https://media.discordapp.net/attachments/667464431562653706/1025732056124235826/icon.png?width=128&height=128">

# 💎 Amethyst
Amethyst is an [Electron-based](https://electronjs.org/) audio player with a [node-based](https://en.wikipedia.org/wiki/Node_graph_architecture) [audio routing](https://en.wikipedia.org/wiki/Audio_signal_flow) system, the main goal of this project is to make a [music player](https://en.wikipedia.org/wiki/Media_player_software) in [Typescript](https://www.typescriptlang.org/) that has pro-level features as most [DAWs](https://en.wikipedia.org/wiki/Digital_audio_workstation) / [DAEs](https://en.wikipedia.org/wiki/Audio_editing_software), while also providing useful tools and customizability to the [end-user](https://en.wikipedia.org/wiki/End_user) to deal with audio.

<br>
<br>

## 📦 Installation
```bash
# Windows
winget install amethyst

# Debian (soon hopefully)
apt install amethyst

# Arch (soon hopefully)
yay amethyst
```

![Amethyst](https://cdn.discordapp.com/attachments/667464431562653706/1033772275473846322/unknown.png)

## ✨ Features
- Custom cursors
- Support for animated [GIF](https://en.wikipedia.org/wiki/GIF) cover art
- [Multichannel](https://en.wikipedia.org/wiki/Surround_sound) (up to 9.1.2) dB meters
- High FPS customizable [spectrum](https://en.wikipedia.org/wiki/Spectrum_analyzer)
- High FPS customizable [vectorscope](https://en.wikipedia.org/wiki/Vectorscope)
- [Discord RPC](https://discord.com/developers/docs/topics/rpc)
- [Node based](https://en.wikipedia.org/wiki/Node_graph_architecture) audio routing system
- Support for playing 
  - [ogg](https://en.wikipedia.org/wiki/Ogg)
  - [flac](https://en.wikipedia.org/wiki/FLAC)
  - [wav](https://en.wikipedia.org/wiki/WAV)
  - [opus](https://en.wikipedia.org/wiki/Opus_(audio_format))
  - [aac](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)
  - [aiff](https://en.wikipedia.org/wiki/Audio_Interchange_File_Format)
  - [mp3](https://en.wikipedia.org/wiki/MP3)
  - [m4a](https://en.wikipedia.org/wiki/MP4_file_format)

## 📝 Contributing
- Use `Node.js 1.16.10`
- Use the `recommended extensions`
- Have `gcc` installed
- Have `yarn` installed

## ⌨️ Coding
- Install dependencies with `yarn`
- Develop with `yarn dev`
- Compile with `yarn package`, compiled files will be in the `release/build` folder