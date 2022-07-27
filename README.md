
1. Install ionic and cordova command line interface globally.
     
    npm install -g cordova ionic
    
2. Install all dependencies listed in package.json.

    npm install

3. Run in your browser
  
    ionic serve

Run on your device

4. Add an iOS or Android to the project.
        
        ionic cordova platform add ios 
        # or 
        ionic cordova platform add android
        
5. Run the app on your device.
        
        ionic cordova run ios
        # or
        ionic cordova run android