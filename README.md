# react-mapycz-leaflet

A React component library for integrating **Mapy.cz tiles** with **Leaflet**, using the **Mapy.cz REST API**.

## Features

- 📍 **Mapy.cz Tiles**: Easily integrate Mapy.cz tiles into your React projects.
- 🌍 **Leaflet Support**: Built on top of React-Leaflet.
- ⚡ **TypeScript Ready**: Fully typed for seamless development.
- 🔗 **Flexible Integration**: Use it in any React app with minimal setup.

## Installation

Install the package using npm:

```
npm install react-mapycz-leaflet
```

or using yarn:

```
yarn add react-mapycz-leaflet
```

## Usage

### Basic Example

```
import React from "react";
import { Map } from "react-mapycz-leaflet";

const App = () => {
  return (
    <Map
      apiKey="YOUR_MAPYCZ_API_KEY"
      center={{ lat: 50.0755, lng: 14.4378 }}
      zoom={13}
    />
  );
};

export default App;
```

## Props

| Prop     | Type                           |
| -------- | ------------------------------ |
| `apiKey` | `string`                       |
| `center` | `{ lat: number, lng: number }` |
| `zoom`   | `number` (optional)            |

## Development & Contributing

To contribute, clone the repository and install dependencies:

```
git clone https://github.com/martinkrivda/react-mapycz-leaflet.git
cd react-mapycz-leaflet
npm install
```

To start local development, run:

```
npm run dev
```

## License

This project is licensed under the **MIT License**.

---

Made with ❤️ by **Martin Křivda**
