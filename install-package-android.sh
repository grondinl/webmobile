#!/bin/bash
cd /tmp_data
wget --user=cordova --password="ISSC" http://venus.inrialpes.fr/reignier/cordova/tp_android.tgz
tar xzf tp_android.tgz
cd ~
ln -s /tmp_data/ .android .
