fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
### check_git_status
```
fastlane check_git_status
```

### set_build_numbers_to_current_timestamp
```
fastlane set_build_numbers_to_current_timestamp
```

### set_js_env
```
fastlane set_js_env
```


----

## iOS
### ios restore_files
```
fastlane ios restore_files
```

### ios setup
```
fastlane ios setup
```

### ios setup_push
```
fastlane ios setup_push
```

### ios build
```
fastlane ios build
```

### ios deploy_hockey
```
fastlane ios deploy_hockey
```

### ios deploy_to_appcenter
```
fastlane ios deploy_to_appcenter
```

### ios deploy_to_testflight
```
fastlane ios deploy_to_testflight
```

### ios deploy
```
fastlane ios deploy
```

### ios deploy_local
```
fastlane ios deploy_local
```

### ios add_devices
```
fastlane ios add_devices
```

### ios get_certificates_and_profiles
```
fastlane ios get_certificates_and_profiles
```


----

## Android
### android restore_files
```
fastlane android restore_files
```

### android set_keys
```
fastlane android set_keys
```

### android build
```
fastlane android build
```

### android build_bicibogo
```
fastlane android build_bicibogo
```

### android build_socialbike
```
fastlane android build_socialbike
```

### android build_goinbike
```
fastlane android build_goinbike
```

### android deploy_hockey
```
fastlane android deploy_hockey
```

### android deploy_hockey_bicibogo
```
fastlane android deploy_hockey_bicibogo
```

### android deploy_hockey_socialbike
```
fastlane android deploy_hockey_socialbike
```

### android deploy_hockey_goinbike
```
fastlane android deploy_hockey_goinbike
```

### android deploy_to_appcenter
```
fastlane android deploy_to_appcenter
```

### android deploy_bicibogo_to_appcenter
```
fastlane android deploy_bicibogo_to_appcenter
```

### android deploy_socialbike_to_appcenter
```
fastlane android deploy_socialbike_to_appcenter
```

### android deploy_goinbike_to_appcenter
```
fastlane android deploy_goinbike_to_appcenter
```

### android deploy_to_playstore
```
fastlane android deploy_to_playstore
```

### android deploy
```
fastlane android deploy
```

### android deploy_local
```
fastlane android deploy_local
```


----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
