import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  // Connection methods
  registerUsbFilters(): void;
  connectUSB(): void;
  connectNet(ipAddress: string): void;
  connectBt(address: string): void;
  closeConnection(): void;

  // Bluetooth & Discovery
  searchBTDevices(): Promise<Object[]>; // WritableArray -> Object[]

  // Printing & Styles
  printText(str: string): void;
  printTextWithStyle(
    isChinese: boolean,
    str: string,
    align: number,
    attribute: number,
    size: number
  ): void;
  selectCodePage(code: number): void;
  setIp(ipAddress: string): void;

  // Visuals & Codes
  printBarcode(): void; // Sening kodingda argument yo'q ekan (test uchun)
  printQRCode(content: string): void;
  loadImageFromUrl(url: string): Promise<string>;
  printBitmap(): void;

  // Hardware Actions
  cutPaper(): void;
  openCashBox(): void;
  makeCustomSound(): Promise<string>;
}

// Nomini Kotlin kodingdagi getName() bilan bir xil qildik: ReactNativeXprinterModule
export default TurboModuleRegistry.get<Spec>('ReactNativeXprinterModule') ||
  null;
