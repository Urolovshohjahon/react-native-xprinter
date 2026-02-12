import ReactNativeXprinter from './NativeReactNativeXprinter';

const Module = ReactNativeXprinter;

// --- Constants ---
export const PrinterConstants = {
  ALIGN: {
    LEFT: 0,
    CENTER: 1,
    RIGHT: 2,
  },
  FONT: {
    DEFAULT: 0,
    FONTB: 1,
    BOLD: 8,
    REVERSE: 16,
    UNDERLINE: 128,
    UNDERLINE2: 256,
  },
  SIZE: {
    NORMAL: 0,
    BIG: 1,
    BIGGER: 2,
  },
} as const;

// --- Types ---
type AlignType = keyof typeof PrinterConstants.ALIGN;
type FontibuteType = keyof typeof PrinterConstants.FONT;
type SizeType = keyof typeof PrinterConstants.SIZE;

interface PrintOptions {
  isChinese?: boolean;
  align?: AlignType | number;
  font?: FontibuteType | number;
  size?: SizeType | number;
}

// --- Methods ---

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

export function searchBTDevices(): Promise<any[]> {
  if (!Module) return Promise.reject('Module not found');
  return Module.searchBTDevices();
}

export function printText(str: string): void {
  return Module?.printText(str);
}

/**
 * Print text with style using an options object
 * @param str - The text to print
 * @param options - Optional: { isChinese, align, font, size }
 */
export function printTextWithStyle(
  str: string,
  options: PrintOptions = {}
): void {
  // Default qiymatlarni belgilaymiz
  const {
    isChinese = false,
    align = 'LEFT',
    font = 'DEFAULT',
    size = 'NORMAL',
  } = options;

  // Qiymatlarni raqamga o'girish
  const finalAlign =
    typeof align === 'string' ? PrinterConstants.ALIGN[align] : align;
  const finalFont =
    typeof font === 'string' ? PrinterConstants.FONT[font] : font;
  const finalSize =
    typeof size === 'string' ? PrinterConstants.SIZE[size] : size;

  return Module?.printTextWithStyle(
    str,
    isChinese,
    finalAlign,
    finalFont,
    finalSize
  );
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
  PrinterConstants,
};
