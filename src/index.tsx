import ReactNativeXprinter from './NativeReactNativeXprinter';

// Modulni qulayroq o'zgaruvchiga olamiz
const Module = ReactNativeXprinter;

export function registerUsbFilters(): void {
  return Module?.registerUsbFilters();
}

export function connectUSB(): void {
  return Module?.connectUSB();
}

export function connectNet(ipAddress: string): void {
  return Module?.connectNet(ipAddress);
}

export function connectBt(address: string): void {
  return Module?.connectBt(address);
}

export function closeConnection(): void {
  return Module?.closeConnection();
}

// Promise qaytaruvchi metodlarda xatolikni mana bunday hal qilamiz:
export function searchBTDevices(): Promise<Object[]> {
  if (!Module) return Promise.reject('Module not found');
  return Module.searchBTDevices();
}

export function printText(str: string): void {
  return Module?.printText(str);
}

export function printTextWithStyle(
  isChinese: boolean,
  str: string,
  align: number,
  attribute: number,
  size: number
): void {
  return Module?.printTextWithStyle(isChinese, str, align, attribute, size);
}

export function selectCodePage(code: number): void {
  return Module?.selectCodePage(code);
}

export function setIp(ipAddress: string): void {
  return Module?.setIp(ipAddress);
}

export function printBarcode(): void {
  return Module?.printBarcode();
}

export function printQRCode(content: string): void {
  return Module?.printQRCode(content);
}

export function loadImageFromUrl(url: string): Promise<string> {
  if (!Module) return Promise.reject('Module not found');
  return Module.loadImageFromUrl(url);
}

export function printBitmap(): void {
  return Module?.printBitmap();
}

export function cutPaper(): void {
  return Module?.cutPaper();
}

export function openCashBox(): void {
  return Module?.openCashBox();
}

export function makeCustomSound(): Promise<string> {
  if (!Module) return Promise.reject('Module not found');
  return Module.makeCustomSound();
}

export default {
  registerUsbFilters,
  connectUSB,
  connectNet,
  connectBt,
  closeConnection,
  searchBTDevices,
  printText,
  printTextWithStyle,
  selectCodePage,
  setIp,
  printBarcode,
  printQRCode,
  loadImageFromUrl,
  printBitmap,
  cutPaper,
  openCashBox,
  makeCustomSound,
};
