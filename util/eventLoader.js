const reqEvent = event => require(`../events/${event}`);

module.exports = client => {
    client.on("ready", () => reqEvent("ready")(client));
    reqEvent("interactionCreate")(client)
}