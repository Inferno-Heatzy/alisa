const { get} = require("https");

module.exports.run = async(client, message, args) => {

    

    get("https://neko-love.xyz/api/v1/waifu", (res) => {
        const { statusCode } = res;
        if (statusCode != 200) {
            res.resume;
        }

        res.setEncoding("utf8");
        let rawData = '';
        res.on("data", (chunk) => {
            rawData += chunk;
        });

        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);

                message.channel.send({
                    embed: {
                        image: {
                            url: parsedData.url
                        },
                        footer: {
                            text: `${client.user.username}`
                        }
                    }
                });
            } catch (error) {
                console.error(error.message);
            }
        });
    }).on("error", (error) => {
        console.error(error.message);
    });
};

module.exports.help = {
    name: "waifu"
}; 