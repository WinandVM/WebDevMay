# use json-server to simulate a REST API
# check OS type
if["$(uname)" == "Darwin" ]; then
  # Mac OS X
  sudo npm install -g json-server
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
  # Linux
  sudo npm install -g json-server
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
  # Windows
  npm install -g json-server
fi

json-server --watch ./data.json --port 5000