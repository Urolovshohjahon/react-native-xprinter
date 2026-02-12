# @urolovshohjahon/react-native-xprinter

🚀 High-performance React Native library for Xprinter thermal printers.  
Supports Bluetooth, USB, and Ethernet (TCP/IP) connections using the modern TurboModule architecture.

## Features

- Bluetooth, USB (Android), and Network (TCP/IP) support
- Fast native bridge with TurboModules
- Text printing with styles
- QR code & barcode printing
- Image printing from URL
- Paper cut, cash drawer, and buzzer support

## Installation

```sh
npm install @urolovshohjahon/react-native-xprinter
# or
yarn add @urolovshohjahon/react-native-xprinter

```

## Usage

```sh
import XPrinter from '@urolovshohjahon/react-native-xprinter';

// =======================
// USB (Android)
// =======================
// Register filters first to handle USB permissions
XPrinter.registerUsbFilters();
XPrinter.connectUSB();

// =======================
// Bluetooth
// =======================
const devices = await XPrinter.searchBTDevices();
if (devices && devices.length > 0) {
  XPrinter.connectBt(devices[0].address);
}

// =======================
// Ethernet (Network / IP)
// =======================
XPrinter.connectNet('192.168.1.100');

// =======================
// Printing
// =======================

// Simple text
XPrinter.printText('Hello World!\n');

// Styled text
XPrinter.printTextWithStyle('PRO RECEIPT\n', {
  align: 'CENTER',
  font: 'BOLD',
  size: 'BIG',
});

// QR code & barcode
XPrinter.printQRCode('https://t.me/urolovshjahon');
XPrinter.printBarcode();

// Print image from URL
await XPrinter.loadImageFromUrl('https://your-site.com/logo.png');
XPrinter.printBitmap();

// Printer controls
XPrinter.cutPaper();        // Partial paper cut
XPrinter.openCashBox();     // Open cash drawer
XPrinter.makeCustomSound(); // Trigger printer beep
XPrinter.closeConnection(); // Disconnect

```

## Params

```sh
| Option    | Type    | Values                                    | Default   |
| --------- | ------- | ----------------------------------------- | --------- |
| align     | string  | 'LEFT', 'CENTER', 'RIGHT'                 | 'LEFT'    |
| font      | string  | 'DEFAULT', 'BOLD', 'UNDERLINE', 'REVERSE' | 'DEFAULT' |
| size      | string  | 'NORMAL', 'BIG', 'BIGGER'                 | 'NORMAL'  |
| isChinese | boolean | true, false                               | false     |
```
