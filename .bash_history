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
