# cd to it path from directory and clone to it
cd $HOME && git clone git@github.com:damorimRG/entente.git

sudo apt update

# install tox
sudo apt install tox

# nodejs dependencies (npm, jsvu, eshost)
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs npm zlib1g-dev libgmp-dev libtinfo-dev binutils-dev libunwind8-dev
sudo npm install -g jsvu
sudo npm install -g eshost-cli

#Alternative options
# Fuzzers: there are binaries in js_engines directory but you can download the last versions using the source
# radamsa installation
# by source
# git clone https://gitlab.com/akihe/radamsa.git && cd radamsa && make && sudo make install

# quickfuzz installation
# by source
# curl -sSL https://get.haskellstack.org/ | sh
# git clone https://github.com/igor-simoes/QuickFuzz.git --depth 1 && cd QuickFuzz && stack setup && stack install alex happy
# by zip file in js_engines directory
unzip js_engines/QuickFuzz.zip -d js_engines/

# configures jsvu and fuzzers
echo 'export PATH="${HOME}/.esvu/bin:${HOME}/.jsvu:${HOME}/jsengines-differential-testing/js_engines/:${PATH}"' >> ~/.bashrc && source ~/.bashrc
jsvu --os=linux64 --engines=chakra,javascriptcore,spidermonkey,v8,hermes
eshost --configure-jsvu
