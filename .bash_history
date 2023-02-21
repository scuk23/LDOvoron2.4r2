cd ~
git clone https://github.com/th33xitus/kiauh.git
sudo apt-get install git -y
git clone https://github.com/th33xitus/kiauh.git
./kiauh/kiauh.sh
sudo reboot
ls -l
ls -l /dev/serial/by-id/
cd /home/pi/klipper_z_calibration/
install.sh
sudo install.sh
./install.sh 
ls -l /dev/serial/by-id/
cd ~/klipper/
sudo cp ./scripts/klipper-mcu.service /etc/systemd/system/
sudo systemctl enable klipper-mcu.service
cd ~/klipper/
make menuconfig
sudo service klipper stop
make flash
sudo service klipper start
sudo usermod -a -G tty pi
sudo raspi-config
./kiauh/kiauh.sh
git init
git config --global user.name "scuk23"
git config --global user.email "contactjakep@gmail.com"
git remote add origin https://scuk23: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@https://github.com/scuk23/LDOvoron2.4r2
git add .
git commit -m "Initial backup"
git push -u origin master
git remote add origin https://scuk23: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@github.com/scuk23/LDOvoron2.4r2
git commit -m "Initial backup"
git push -u origin master
git remote add origin https://scuk23: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@github.com/scuk23/LDOvoron2.4r2
git push -u origin master
git remote -v
git remote set-url origin https://scuk23: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@github.com/scuk23/LDOvoron2.4r2https://scuk23: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@github.com/scuk23/LDOvoron2.4r2
git push -u origin master
git remote set-url origin https://scuk23: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@github.com/scuk23/LDOvoron2.4r2
git push -u origin master
sudo raspi-config
cd moonraker-obico/
./install.sh
