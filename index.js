const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

var figlet = require('figlet');
const ethers = require('ethers')
var request = require('request');
const fetch = require('axios')
require('dotenv').config();
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const fs = require('fs');
client.commands = new Discord.Collection();


const COLOR = process.env.COLOR;



    



  
client.on('ready', async activity => {
  
  client.user.setStatus(`online`)


  figlet('Made  By  Goodin', async (err, data) => {
  
      console.log(" ")
      console.log(" ")
      await console.log(data)
      console.log(" ")

  console.log('Discord API Connected')
  console.log('OpenSeas API Connected')

  console.log(" ")
  console.log("Reselling this bot is strictly prohibited")

  console.log(" ")
  console.log('Successfully Loaded OpenSea Sales Bot')                                                                                                                
  console.log("")
  });
  setInterval(async () => {
 
    const require2 = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
      );

      const require5 = await fetch(
        `https://api.opensea.io/api/v1/collection/${process.env.COLLECTION_SLUG}/stats`
      );

         




    

    const date = Date.now()
    const finalnumber = await (date - 140000)
  
  var options = {
    'method': 'GET',
    'url': `https://api.opensea.io/api/v1/events?limit=75&event_type=successful&only_opensea=false&collection_slug=${process.env.COLLECTION_SLUG}&asset_contract_address=${process.env.COLLECTION_CONTRACT}`,
    'headers': {
      'x-api-key': `${process.env.API_KEY}`
    }
  };
  request(options, function (error, response) {
  if(error) {
    console.log(error)
  }
  
  if(!error){

    try{
  const info = JSON.parse(response?.body)

  info?.asset_events?.sort((a, b) => {
    return new Date(a.created_date) - new Date(b.created_date); // descending
  });


    info.asset_events.forEach(async sale => {
  
  
        var unixTimestamp = Math.floor(new Date(`${sale?.created_date}Z`).getTime());
        if(unixTimestamp > finalnumber){


 

  
  
            const SellerName = sale?.seller?.user?.username || sale?.seller?.address;
            const BuyerName = sale?.winner_account?.user?.username || sale?.winner_account?.address;
            const ethvalue =
            (await ethers.utils.formatEther(sale?.total_price)) * require2.data.ethereum.usd;
          const finalvalue = await formatter.format(ethvalue);
       

          const embed = new Discord.MessageEmbed()
.setTitle(`${sale.asset.name} #${sale.asset?.token_id}` + " sold!")
.setColor("#FFFFF1")
.setImage(sale.asset?.image_url)
.setFooter(
  "Built by Goodin",
  "https://cdn.discordapp.com/attachments/879211413296513055/887910884683419719/lgogogo.png"
)
.setDescription(`**Amount** Ξ${ethers.utils.formatEther(sale.total_price)} \n **Buyer** [${BuyerName}](https://etherscan.io/address/${sale?.winner_account?.address})\n **Seller** [${SellerName}](https://etherscan.io/address/${sale?.seller?.address})\n **Link** [Click Here](${sale.asset.permalink})`)
.setTimestamp(Date.parse(`${sale?.created_date}Z`))

const valuex3 = `${require5.data.stats.floor_price}` * 3


client.channels.cache.get(process.env.CHANNEL_ID).send(embed);
            
        

            


const Twitter = require('twitter')

const twitterToken = process.env.ACCESS_TOKEN_KEY
const twitterSecret = process.env.ACCESS_TOKEN_SECRET

const consumerKey = process.env.CONSUMER_KEY
const consumerSecret = process.env.CONSUMER_SECRET
const twitter = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: twitterToken,
  access_token_secret: twitterSecret
})

if(ethers.utils.formatEther(sale.total_price) > valuex3){
  twitter.post(
    'statuses/update',
    {
       status: `BIG BUY 📈 ${
     sale.asset.name
        } sold for ${ethers.utils.formatEther(
        sale.total_price
       )} ETH! 📈\nBuyer: ${BuyerName}\nSeller: ${SellerName}\n ${sale.asset.permalink}\n`
      },
   function (error, tweet, response) {
     if (error) {
       console.log('Error: ', error)
      }
     })
}else{
  twitter.post(
    'statuses/update',
    {
       status: ` ${
     sale.asset.name
        } sold for ${ethers.utils.formatEther(
        sale.total_price
       )} ETH!\nBuyer: ${BuyerName}\nSeller: ${SellerName}\n ${sale.asset.permalink}\n `
      },
   function (error, tweet, response) {
     if (error) {
       console.log('Error: ', error)
      }
     })
}




      


      }
       /// }
       
  
    });
} catch(err) {
console.log(err)
}
  
  }
  
  })
}, 140000);
  
  

});






client.login(process.env.TOKEN);
