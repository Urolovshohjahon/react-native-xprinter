# @urolovshohjahon/react-native-xprinter

Package for controlling xprinters

## Installation

npm install @urolovshohjahon/react-native-xprinter

# yoki

yarn add @urolovshohjahon/react-native-xprinter

## Usage

```js
import XPrinter from '@urolovshohjahon/react-native-xprinter';

// --- USB orqali ulanish ---
// Avval USB ruxsatnomalarini filter qilish kerak
XPrinter.registerUsbFilters();
// Keyin printerni ulaymiz
XPrinter.connectUSB();

// --- Bluetooth orqali ulanish ---
// Avval yaqin atrofdagi paired (ulangan) qurilmalarni qidiramiz
const devices = await XPrinter.searchBTDevices();
if (devices.length > 0) {
  XPrinter.connectBt(devices[0].address); // MAC address orqali ulanish
}

// --- Ethernet (Network/IP) orqali ulanish ---
XPrinter.connectNet("192.168.1.100");

// Oddiy matn chiqarish
XPrinter.printText("Salom O'zbekiston!\n");

// Stil berilgan matn (isChinese, matn, alignment, attribute, size)
// alignment: 0-Left, 1-Center, 2-Right
// size: 0-Normal, 1-DoubleHeight, 2-DoubleWidth
XPrinter.printTextWithStyle(false, "ZIM MANAGER", 1, 0, 1);

// Qog'ozni qirqish va Pul qutisini ochish
XPrinter.cutPaper();
XPrinter.openCashBox();

// QR Kod chiqarish
XPrinter.printQRCode("https://t.me/shohjahon_urolov");

// Test Barcode (Package ichidagi standart formatlar)
XPrinter.printBarcode();


await XPrinter.loadImageFromUrl("https://your-site.com/logo.png");
XPrinter.printBitmap();



Metod,Parametr,Tavsif
connectUSB(),-,USB orqali birinchi topilgan printerni ulaydi.
connectBt(mac),string,MAC address orqali Bluetooth printerni ulaydi.
connectNet(ip),string,IP orqali Ethernet printerni ulaydi.
printText(text),string,Oddiy matn chiqaradi.
printQRCode(str),string,Berilgan matndan QR kod yaratadi va chiqaradi.
cutPaper(),-,Qog'ozni yarim qirqish (Partial cut).
makeCustomSound(),-,Printerdan ovoz chiqaradi (Beep).
closeConnection(),-,Joriy ulanishni uzadi.

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
```
