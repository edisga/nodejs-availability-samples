# Requirements

Node 10.15.0 or newer

# How to run this sample
- Run `npm install` to install node modules.
- Run `npm start` and browse the app in `http://localhost:3000`.
- When requesting the API you will get **Http 400 Bad Request or 431 Request Header Fields Too Large** when you reach the header size limit defined in the request header.
- Modify the desired value in `package.json` on scripts `start-with-fix` section and run `npm run start-with-fix`.
- If you are using PM2 you can use `pm2 start server.js --node-args="--max-http-header-size=16384"`

# Exceptions
- If you are getting this error: `node: bad option: --max-http-header-size`, then upgrade to v10.15.0 or newer.