package com.urolov.reactnativexprinter

import com.facebook.react.bridge.ReactApplicationContext

class ReactNativeXprinterModule(reactContext: ReactApplicationContext) :
  NativeReactNativeXprinterSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeReactNativeXprinterSpec.NAME
  }
}
