# OpenSea Discord and Twitter Sales Bot 🤖

A popular bot that can track OpenSea sales on both Discord and Twitter

Reselling is **strictly prohibited**

## Donations 💵

If you find this useful you can also donate here

Eth Address: 0x4b45b7D4f13E0C20c72903CB442ec9AFbfbF0452

## Requirements 📝

- [Twitter Developer Account](https://developer.twitter.com/en/apply-for-access) (with [Elevated Access](https://developer.twitter.com/en/portal/products/elevated), as we need v1.1 endpoint access)

- A OpenSea API Key (request one [here](https://docs.opensea.io/reference/api-overview))

- [Discord Bot](https://discord.com/developers/applications) ([Click Here](https://discordpy.readthedocs.io/en/stable/discord.html) for Instructions)

- Hosting Server (I recommend [Oxide.Host](https://oxide.host/discord-bot-hosting?aff=80) where you can host for less then 2$ a month)

- Recent Verisons of NPM and NodeJS Installed

## Setup 🔧

- Download the most recent code

- Extract the code

- Create a Twitter Developer App (make sure you change it to have both read/write permissions)

- Create a Discord Bot and invite it to your server and get the token.

- Copy `example.env` and rename it `.env` and fill in the below data

- **TOKEN** - Your Discord Bot Token
- **COLOR** - HEX Code for the Embeds for Discord. If left blank; it will just default to black.
- **CHANNEL_ID** - Channel for your Bot to post new Sales Embeds
- **CONSUMER_KEY** - Twitter Consumer Key to post to your profile
- **CONSUMER_SECRET** - Twitter Consumer Secret Key to post to your profie
- **ACCESS_TOKEN_KEY** - Twitter Access Token Key to post to your profile
- **ACCESS_TOKEN_SECRET** - Twitter Token Secret to post to your profile
- **COLLECTION_SLUG** - OpenSea Collection Slug. Can be found in the URL of the collection
- **COLLECTION_CONTRACT** - OpenSea Contract Address. Can be found in a Items URL
- **API_KEY** - Your OpenSea API Key


Now you're ready to run the bot. 

```sh
npm install
node .
```

## License 📃

This code uses a custom license. Reselling is **strictly prohibited**. Before trying to resell, I recommmend checking out the license
