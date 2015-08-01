#!/usr/bin/env bash

set -e 


mkdir -p ./vagrant/data/availability-1/app/
mkdir -p ./vagrant/data/availability-2/app/
mkdir -p ./vagrant/data/payment/app/
mkdir -p ./vagrant/data/db/app/

rm -rf ./vagrant/data/availability-1/app/*
rm -rf ./vagrant/data/availability-2/app/*
rm -rf ./vagrant/data/payment/app/*
rm -rf ./vagrant/data/db/app/*

cp -r availability/* ./vagrant/data/availability-1/app/
cp -r availability/* ./vagrant/data/availability-2/app/
cp -r payment/* ./vagrant/data/payment/app/
cp -r front-end/* ./vagrant/data/db/app/

cp -r availability/service.json ./vagrant/data/availability-1/
cp -r availability/service.json ./vagrant/data/availability-2/
cp -r payment/service.json ./vagrant/data/payment/
cp -r front-end/service.json ./vagrant/data/db/


