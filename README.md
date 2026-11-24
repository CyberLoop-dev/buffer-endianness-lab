<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:0f766e&height=170&section=header&text=Buffer%20Endianness%20Lab&fontSize=32&fontColor=ffffff&animation=fadeIn" width="100%" alt="Waving header"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=See+the+same+integer+as+different+byte+orders;Explore+DataView+and+ArrayBuffer+locally" alt="Typing title"/>

[![License](https://img.shields.io/github/license/CyberLoop-dev/buffer-endianness-lab)](LICENSE)
![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/buffer-endianness-lab)
![Stars](https://img.shields.io/github/stars/CyberLoop-dev/buffer-endianness-lab?style=flat)
![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/buffer-endianness-lab)
<img src="assets/mark.svg" width="112" alt="Byte order illustration"/>
</div>

## 🧭 Overview

A dependency-free Node.js CLI that demonstrates how a 32-bit integer is stored as bytes in big-endian and little-endian order, and how <code>DataView</code> interprets those bytes.

## ✨ Features

- 🔢 Inspect any unsigned 32-bit integer.
- 🧱 Compare big-endian and little-endian byte sequences.
- 🔍 Read each sequence using both byte-order settings.
- 📦 Print JSON for scripts and lessons.

## 🎬 Demo

No hosted demo is provided. The default value is <code>0x12345678</code>, which produces the byte sequences <code>12 34 56 78</code> and <code>78 56 34 12</code>.

## ⚡ Quick Start

Requires Node.js 18+. No dependencies are needed.

~~~bash
npm start
npm start -- --value 305419896
npm test
~~~

## 🧰 Tech Stack

- Node.js 18+
- <code>ArrayBuffer</code> and <code>DataView</code>
- Node.js built-in test runner

## 🗂️ Folder Structure

~~~text
buffer-endianness-lab/
├── src/main.js
├── test/main.test.js
├── package.json
├── assets/mark.svg
├── .gitignore
├── LICENSE
└── README.md
~~~

## 🗺️ Roadmap

- [x] 32-bit unsigned integer examples
- [x] Both byte orders and cross-reading
- [ ] Add signed integer and floating-point examples

## 🤝 Contributing

Issues and focused pull requests are welcome. Keep examples deterministic and dependency-free.

## 📄 License

MIT License. See [LICENSE](LICENSE).

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:101827&height=100&section=footer" width="100%" alt="Waving footer"/></div>
