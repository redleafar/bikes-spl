package com.bici;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import java.util.Map;
import java.util.HashMap;

public class FlavorModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;  

  FlavorModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "Flavor";
  }

  @ReactMethod
  public void getFlavor(Promise promise) {
    Toast.makeText(getReactApplicationContext(),BuildConfig.FLAVOR, Toast.LENGTH_LONG).show();
    
    WritableMap map = Arguments.createMap();

    map.putString("flavor", BuildConfig.FLAVOR);
    promise.resolve(map);        
  }
}
