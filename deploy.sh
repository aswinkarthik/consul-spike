#!/usr/bin/env bash

set -e 

rm -rf ./vagrant/data/availability-1/*
rm -rf ./vagrant/data/availability-2/*
rm -rf ./vagrant/data/payment/*
rm -rf ./vagrant/data/db/*


mkdir -p ./vagrant/data/availability-1/app/
mkdir -p ./vagrant/data/availability-2/app/
mkdir -p ./vagrant/data/payment/app/
mkdir -p ./vagrant/data/db/app/

mkdir -p ./vagrant/data/availability-1/configs/
mkdir -p ./vagrant/data/availability-2/configs/
mkdir -p ./vagrant/data/payment/configs/
mkdir -p ./vagrant/data/db/configs/



cp -r availability/* ./vagrant/data/availability-1/app
cp -r availability/* ./vagrant/data/availability-2/app/
cp -r payment/* ./vagrant/data/payment/app/
cp -r front-end/* ./vagrant/data/db/app/

cp -r availability/availability.json ./vagrant/data/availability-1/configs/
cp -r availability/availability.json ./vagrant/data/availability-2/configs/
cp -r payment/payment.json ./vagrant/data/payment/configs/
cp -r front-end/front-end.json ./vagrant/data/db/configs/
cp -r db/db.json ./vagrant/data/db/configs/


