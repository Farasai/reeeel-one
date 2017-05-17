const Discord = require("discord.js");
const request = require('superagent')
const token = 'MzA4MTE5MDk2NDA1MzkzNDA4.C_0ioA.F08opfFfQeRI6OPBx2VepG65PTU'
const bot = new Discord.Client();
const prefix = "?"
const ffmpeg = require('ffmpeg')
const music = require('discord.js-music-v11');
const ytdl = require('ytdl-core');
const gender = ["male", "female"] // for ?ridea
var roller = require('roller');
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;
const avaemote = "<:avatrigger:257723289584009217>"
const ana = "<:ana:242663443017105408>"
var newUsers = [];
const blacklisted = [];
const aa = [];

music(bot)
bot.on('ready', () => {
console.log("The bot is up!")
bot.user.setGame('with Ava!', 'https://twitch.tv/twitch');
});

bot.on('guildMemberAdd', (member) => {
    if (member.id == '91665616854843392' || member.id == '312285534229889025' || member.id == '128941571155427339')
        return member.ban().then(() => member.guild.defaultChannel.send(`<@&310238978647392256> C-Can you f-fix my shirt..?`))
});

bot.on("message", message => {
    const pings = ["Am I even human?", "I love life, too.", "Don't piss off any staff members!", "Fortune cookies to me are just cookies to eat.", "Pingy, pong.", "Ping bling.", "Story time!"]
    if (message.author.bot) return;
    if (message.content === prefix + 'ping') {
        message.delete();
        startTime = Date.now();
        message.delete();
        message.channel.sendMessage("Pinging..").then((message) => {
            endTime = Date.now();
            message.edit(`${pings[Math.floor((Math.random() * pings.length))]} **//** \`${Math.round(endTime - startTime)} miliseconds\``).then(m => m.delete(8000))
        });
    }
    if (message.content.startsWith(prefix + 'test')) {
var msg = message.content.replace('?test', '')
    if (!message.member.roles.exists('name', 'Mage'))
  return message.reply("U-Uhm.. s-sorry! Y-You can't use that..");
    if (!msg)
        return message.reply("The correct syntax is: `?blacklist [id]`")
    aa.push(msg);
}
    if (message.content === prefix + 'reboot') {
        if (message.author.id !== '213836424170962944')
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000)).then(message.delete())
        message.reply("Rebooting..")
        process.exit();
    }
    if (message.content === prefix + 'shutdown') {
        if (message.author.id !== '213836424170962944')
        if (message.author.id !== '222575104297533441')
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..")
        message.reply("S-Shutting down..").then(process.exit())
    }
    // Moderation commands
    if (message.author.bot) return; // Since a say command exists, if you do not have this option someone can make the bot say 'kick' and it'll do it. This returns it if the author of the kick message is the bot.
    if (message.content.startsWith(prefix + 'kick')) { // If the message starts with "?kick", then;
        if (!message.guild || !message.member) return; // If the command is in a DM, it won't work.
        var user = message.mentions.users.first(); // Variables..
        var member = message.guild.member(user);
        var reason = message.content.split(' ').slice(2).join(' ');
        var perms = message.member.hasPermission('KICK_MEMBERS') // If the author of the message has the permission 'Kick Members'
        var permsbot = message.guild.member(bot.user).hasPermission('KICK_MEMBERS') // If the bot has the permission 'Kick Members'
        if (!permsbot) // If the bot doesn't have the Kick Members permission, then say;
            return message.reply("I either do not the `Kick Members` permission or my highest role does not have that permission.").then(m => m.delete(10000)); // this.
        message.delete();
        if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000)); // this
        message.delete();
        console.log(message.member.permissions.serialize())
        if (!user) // If there is no mentioned user to kick, then say;
            return message.reply('In order to kick a user, use `?kick [user]`.').then(m => m.delete(10000)); // this
        message.delete();
        member.kick().then(() => { // Else, if they did put a user-- kick the member mentioned, then say
            message.reply("`" + user.username + "#" + user.discriminator + "` has been kicked! ðŸ‘Â").then(m => m.delete(10000)); // this.
            message.delete();
        });
    }
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix + 'prune')) {
        message.delete();
        var amount = message.content.split(" ").splice(1, 2).join(" ");
        var perms = message.member.hasPermission('BAN_MEMBERS')
        var user = message.mentions.users.first();
        var permsbot = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')
        if (message.author.id !== '213836424170962944')
            if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Captain')) {
                return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000));
                message.delete()
            }
        if (!permsbot) {
            message.delete()
            return message.reply("I either do not the `Manage Messages` permission or my highest role does not have that permission.").then(m => m.delete(10000));
            message.delete()
        }
        if (amount < 1) {
            console.log("Reject for amount under 1.")
            return message.reply("I cannot find an amount of messages for me to purge! :thumbsdown:").then(m => m.delete(10000));
            message.delete()
        }
        if (amount > 100) {
            console.log("Reject for amount over 100.")
            return message.reply("I cannot find an amount of messages between 1-100 for me to purge! :thumbsdown:").then(m => m.delete(10000));
            message.delete()
        }
        message.delete()
        console.log("Deleted message.")
        message.channel.bulkDelete(amount)
        console.log("Pruned amount.")
        message.reply("Successfully purged `" + amount + "` messages! :thumbsup:").then(m => m.delete(5000));
        console.log("Said it was pruned.")
        console.log("Chat was cleared by " + message.member + " Amount: " + amount);
    }
    if (message.author.bot) return; // Since a say command exists, if you do not have this option someone can make the bot say 'kick' and it'll do it. This returns it if the author of the kick message is the bot.
    if (message.content.startsWith(prefix + 'ban')) { // If the message starts with "?kick", then;
        if (!message.guild || !message.member) return; // If the command is in a DM, it won't work.
        var user = message.mentions.users.first(); // Variables..
        var member = message.guild.member(user);
        var reason = message.content.split(' ').slice(2).join(' ');
        var perms = message.member.hasPermission('BAN_MEMBERS') // If the author of the message doesn't have the Ban Members permission
        var permsbot = message.guild.member(bot.user).hasPermission('BAN_MEMBERS') // If the bot doesn't have the Ban Members permission
        if (!permsbot) // If the bot doesn't have the Ban Members permission, then say;
            return message.reply("I either do not the `Ban Members` permission or my highest role does not have that permission.").then(m => m.delete(10000)); // this.
        message.delete()
        if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Captain')) // If the author of the message doesn't have the Ban Members permission, then say;
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000)); // this
        message.delete()
        console.log(message.member.permissions.serialize())
        if (!user) // If there is no mentioned user to ban, then say;
            return message.reply('In order to ban a user, use `?ban [user]`. ').then(m => m.delete(10000)); // this.
        message.delete()
        member.ban().then(() => { // Ban the member, then say
            message.reply("`" + user.username + "#" + user.discriminator + "` has been banned! ðŸ‘").then(m => m.delete(10000));
            message.author.sendMessage("If you'd like to unban `" + user.username + "#" + user.discriminator + "`, use `?unban " + user.id + "`.")
        });
    }
    if (message.content.startsWith(prefix + 'unban')) {
        var user = message.mentions.users.first();
        var amount = message.content.split(" ").splice(1, 2).join(" ");
        var amlen = amount.length
        var perms = message.member.hasPermission('BAN_MEMBERS') // If the author of the message doesn't have the Ban Members permission
        var permsbot = message.guild.member(bot.user).hasPermission('BAN_MEMBERS') // If the bot doesn't have the Ban Members permission
        if (!permsbot) // If the bot doesn't have the Ban Members permission, then say;
            return message.reply("I either do not the `Ban Members` permission or my highest role does not have that permission.").then(m => m.delete(10000)); // this.
        message.delete()
        if (!message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000)); // this
        message.delete()
        if (!amount) {
            return message.reply("In order to unban a user, you must unban them by their ID using `?unban [id]` and then I shall carry out the request.").then(m => m.delete(10000));
            message.delete();
        }
        if (amlen !== 18) {
            message.delete();
            return message.reply("In order to unban a user, you must unban a banned user by their valid ID using `?unban [id]` and then I shall carry out the request.").then(m => m.delete(10000));
            if (isNaN(amlen)) return;
        }
        message.guild.unban(amount)
        message.reply("This user has been unbanned! ðŸ‘").then(m => m.delete(10000));
    }
    if (message.author.bot) return; // Since a say command exists, if you do not have this option someone can make the bot say 'kick' and it'll do it. This returns it if the author of the kick message is the bot.
    if (message.content.startsWith(prefix + 'mute')) { // If the message starts with "?mute"
        if (!message.guild || !message.member) return; // If the command is in a DM, it won't work.
        var guild = message.channel.guild; // Variables..
        if (guild) {
            var suffix = message.content.split(' ').slice(1)
            var user = message.mentions.users.first();
            var member = guild.member(user)
            var reason = message.content.split(' ').slice(2).join(' ');
            var perms = message.member.roles.exists('name', 'Warden') && message.member.roles.exists('name', 'Mage') && message.member.roles.exists('name', 'Arbiter') && message.member.roles.exists('name', 'Moderator') && message.member.roles.exists('name', 'Evil Wizard') && message.member.roles.exists('name', 'Captain') // If the author of the message has the Mute Members permission
            var muterole = message.guild.roles.find("name", "MUTED"); // Find a 'MUTED' role
            var permsbot = message.guild.member(bot.user).hasPermission('KICK_MEMBERS') // If the bot has the Manage Roles permission
            if (!permsbot)
                return message.reply("I either don't have the `Kick Members` permission or one of my roles do not have the permission.")
            if (!message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Captain')) { // If the author of the message doesn't have the Mute Members permission, then say;
                message.delete();
                return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000)); // this
            }
            if (!muterole) { // If there is no MUTED role,
                message.delete();
                return message.reply("An error occured. Until then, use Ava's mute command until the issue is resolved.").then(m => m.delete(10000));
            }
            if (!user) { // If there is no mentioned user, then say
                message.delete();
                return message.reply('In order to mute a user, use `?mute [user]` and then I shall carry out the request.').then(m => m.delete(10000)); // this
            }
            if (member.roles.exists('name', 'MUTED')) { // If the person has the muted role, return.
                return;
            } // then;
            message.delete();
            member.addRole(muterole).catch(console.error) // Add the muted role. If there's an error, send it to console.
            message.reply("`" + user.username + "#" + user.discriminator + "` has been muted! ðŸ‘").then(m => m.delete(10000)); // this.
        }
    } else {}
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'warn')) {
        if (!message.guild || !message.member) return;
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        var reason = message.content.split(' ').slice(2).join(' ');
        var perms = message.member.hasPermission('KICK_MEMBERS')
        const ik = ["I like playing games, too.", "I like fooling around, as well.", "I don't enjoy annoying moderators.", "Are you sure you read #welcome?", "I like playing around, too.", "Games do get addicting.", "Try to stay away from fooling around.", "Sometimes, I'm annoying too, but--"]
        if (message.author.id !== '213836424170962944')
            if (!perms)
                return message.reply("You must have the `Kick Members` permission in order to do that command.");
        message.delete();
        if (!user)
            return message.reply('In order to warn a user, use `?warn [user] [reason]` and then I shall carry out the request.').then(m => m.delete(10000));
        message.delete();
        if (!reason)
            return message.reply('In order to warn a user, you must add a reason using `?warn [user] [reason]` and then I shall carry out the request.').then(m => m.delete(10000));
        message.delete();
        message.reply(`Added warning to user \`${user.username}#${user.discriminator}\`! \`Ã°Å¸â€˜Â\``).then(m => m.delete(10000));
        user.sendMessage("YES! I know. " + ik[Math.floor((Math.random() * ik.length))] + " You've been warned by `" + message.author.username + "#" + message.author.discriminator + "` for the following reason;\n" +
            "`" + reason + "`");
    }
    if (message.author.bot) return; // If the bot says it, it won't work.
    if (message.content.startsWith(prefix + 'unmute')) { // If the message starts with unmute
        var user = message.mentions.users.first(); // variables
        var perms = message.member.hasPermission('MUTE_MEMBERS') // If the author of the message has the Mute Members permission
        var permsbot = message.guild.member(bot.user).hasPermission('MUTE_MEMBERS') // If the bot has the Mute Members permission
        if (!permsbot)
            return message.reply("I either do not have the `Mute Members` permission or my highest role does not have that permission.").then(m => m.delete(10000));
        message.delete();
        if (!perms)
            return message.reply("You must have the `Mute Members` permission in order to do that command.").then(m => m.delete(10000));
        message.delete();
        if (!user) { // If there is no mentioned user, then say
            return message.reply("In order to unmute a user, use `?unmute [user]` and then I shall carry out the request.").then(m => m.delete(10000)); // this
            message.delete();
        }
        var memberRemove = message.guild.member(message.mentions.users.first());
        if (!memberRemove) {
            return message.reply("In order to unmute a user, use `?unmute [user]` and then I shall carry out the request.").then(m => m.delete(10000));
            message.delete();
        }
        var removeRole = message.guild.roles.find('name', 'MUTED');
        memberRemove.removeRole(removeRole);
        message.delete();
        message.reply("`" + user.username + "#" + user.discriminator + "` has been unmuted! ðŸ‘").then(m => m.delete(10000));
    }
    const ball = ["Sign points to yes.", "Sign points down to no.", "Most likely.", "Don't count on it.", "Yes.", "No.", "As I see it, yes.", "You may rely on it.", "Definitely.", "Nope.", "Sign points to no."]
    var afmsg = message.content.replace("?8ball", "")
    var ques = message.content.includes("?")
    if (message.content.startsWith(prefix + '8ball')) {
        if (message.channel.id !== '231560933808275477') return message.reply("You must be in <#231560933808275477> to continue this action.")
        message.delete();
        if (!afmsg)
            return message.reply("What question do you want to ask the 8ball?").then(m => m.delete(10000));
        if (!ques)
            return message.reply("Oops! That doesn't look like a question.").then(m => m.delete(10000));
        if (afmsg)
            message.channel.sendMessage("" + message.author + ", " + ball[Math.floor((Math.random() * ball.length))]).then(m => m.delete(10000));
    }
    if (message.content.startsWith(prefix + 'match')) {
        if (message.channel.id !== '231560933808275477') return message.reply("You must be in <#231560933808275477> to continue this action.")
        var lovebird = message.content.replace("?match", "");
        if (!lovebird)
            message.reply("Who shall be your love bird for testing today?").then(m => m.delete(10000));
        message.delete();
        if (lovebird)
            message.reply("The rate between your relationship is `" + Math.floor((Math.random() * 100) + 0) + "%` ðŸ˜Š").then(m => m.delete(10000));
        message.delete();
    }
    var user = message.mentions.users.first();
    var msg = message.content.replace("?rate", "")
    if (message.content.startsWith(prefix + 'rate')) {
        if (!msg)
            return message.reply("What do you want me to rate?").then(m => m.delete(10000));
        message.delete();
        if (!user)
            message.reply("I rate `" + msg + "` a `" + Math.floor((Math.random() * 10) + 0) + "` out of `10`").then(m => m.delete(10000));
        message.delete();
        if (user)
            message.reply("I rate" + msg + " a `" + Math.floor((Math.random() * 10) + 0) + "` out of `10`").then(m => m.delete(10000));
        message.delete();
    }
    if (message.content === prefix + 'cat') {
        if (message.channel.id !== '239817362474270720') return message.reply("You must be in <#239817362474270720> to continue this action.")
        message.delete();
        message.reply("You requested a cat:").then(m => m.delete(10000)); {
            request.get('http://random.cat/meow')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
                .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36')
                .end((err, res) => {
                    if (err) return message.reply('There was an error, please try again!');
                    if (res.body) return message.channel.sendFile(res.body.file).then(m => m.delete(10000));
                    message.delete()
                    return message.reply('There was an error, please try again!');
                });
    }
    }
    if (message.content.toLowerCase() === 'pomf pomf kimochi')  {
        return message.reply(`W-What's this s-sticky stuff on me?\n(I-I wonder if I did it right..) `).then(m => m.delete(10000))
    }
    if (message.content === 'Aidu is savage') {
        message.reply("N-No h-he isn't! M-Mother Medusa is!").then(m => m.delete(10000))
    }
    if (message.content.startsWith(prefix + 'whois')) {
        if (!message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        var user = message.mentions.users.first();
        if (!user) {
            message.delete();
            return message.reply("Who would you like information on?").then(m => m.delete(10000));
        } else {
            message.delete();
            const embed = new Discord.RichEmbed()
                .setColor(0xff000)
                .setTitle('Command result')
                .setDescription('Information on the user you had just mentioned.')
                .setFooter('Information on ' + user.username, user.avatarURL)
                .setThumbnail(user.avatarURL)
                .setTimestamp()
                .addField('Username',
                    user.username)
                // field 2
                .addField('Discriminator',
                    user.discriminator)
                // f3
                .addField('Joined',
                    user.createdAt)
                // f4
                .addField('Status', user.presence.status, true)
                // f5
                .addField('ID',
                    user.id)
                // f6
                .addField('Game',
                    `Playing **${user.presence.game ? user.presence.game.name : 'nothing.'}**`)

            message.channel.sendEmbed(embed).then(m => m.delete(100000));
        }
    }
    const kiss = ["https://b.catgirlsare.sexy/DCx_.gif", "https://b.catgirlsare.sexy/c5X6.gif", "https://b.catgirlsare.sexy/OkW4.gif", "https://b.catgirlsare.sexy/fD1O.gif", "https://b.catgirlsare.sexy/I5Hu.gif", "https://b.catgirlsare.sexy/gltl.gif", "https://b.catgirlsare.sexy/-wAb.gif", "https://b.catgirlsare.sexy/404xE.gif", "https://b.catgirlsare.sexy/ac9F.gif", "https://b.catgirlsare.sexy/jtJG.gif", "https://b.catgirlsare.sexy/hFaC.gif", "https://b.catgirlsare.sexy/npYe.gif", "https://b.catgirlsare.sexy/VDFi.gif", "https://b.catgirlsare.sexy/owgN.gif", "https://b.catgirlsare.sexy/bIPL.gif", "https://b.catgirlsare.sexy/r-xw.gif"]
    if (message.content.startsWith(prefix + 'kiss')) {
        var user = message.mentions.users.first();
        var res = message.guild.channels.find('name', 'canned_meat')
        if (!user) {
            message.delete();
            return message.reply("In order to kiss your loved one, use `?kiss [user]`.").then(m => m.delete(10000));
        }
        if (user)
            message.delete();
        message.reply('You have kissed `' + user.username + '#' + user.discriminator + '`! :blush:').then(m => m.delete(20000));
        message.channel.sendMessage("" + kiss[Math.floor((Math.random() * kiss.length))]).then(m => m.delete(20000));
        user.sendMessage("`" + message.author.username + "#" + message.author.discriminator + "` has kissed you!")
    }
    if (message.content.toLowerCase().includes('kys')) {
        message.reply("A-Are you going t-to say that language in f-front of me?! ").then(m => m.delete(10000));
    }
    if (message.content.toLowerCase().includes('kill yourself')) {
        message.reply("A-Are you going t-to say that language in f-front of me?! ").then(m => m.delete(10000));
    }
    if (message.content.toLowerCase().includes('kill urself')) {
        message.reply("A-Are you going t-to say that language in f-front of me?! ").then(m => m.delete(10000));
    }
    if (message.content.startsWith(prefix + 'quote')) {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        var quote = message.content.split(" ").slice(1).join(" ");
        if (quote.length < 1) {
            message.delete();
            return message.reply("In order to quote a post, use `?quote [message id]`. You can obtain a message ID by right clicking a post and clicking `Copy ID`.").then(m => m.delete(10000));
        }
        message.delete();
        message.channel.fetchMessages({
            limit: 1,
            around: quote
        }).then(messages => {
            const fm = messages.first();
            message.channel.sendMessage("", {
                embed: {
                    color: 0x3cb8c9,
                    author: {
                        name: `${fm.author.username}#${fm.author.discriminator}`,
                        icon_url: fm.author.avatarURL
                    },
                    description: fm.content
                }
            })
        });
    }
    if (message.content === '<@308119096405393408>') {
        message.reply(`P-Please be gentle.. <:ara:310244084986019840>`).then(m => m.delete(10000))
    }
    if (message.content === 'ara') {
        message.reply(`O-Oh, uhm.. I'm- not supposed to be here.. Ava gets mad.. <:ara:310244084986019840>`).then(m => m.delete(10000))
    }
    if (message.content === 'Ara') {
        message.reply(`U-Uhm... p-please be my friend... <:ara:310244084986019840>`).then(m => m.delete(10000))
    }
    if (message.content === 'ARA') {
        message.reply(`*P-please don't shout at me like Ava..* <:ara:310244084986019840>`).then(m => m.delete(10000))
    }
        if (message.content.startsWith(prefix + 'modquote')) {
        var quote = message.content.split(" ").slice(1).join(" ");
        if (quote.length < 1) {
            message.delete();
            return message.reply("In order to quote a post, use `?quote [message id]`. You can obtain a message ID by right clicking a post and clicking `Copy ID`.").then(m => m.delete(10000));
        message.channel.fetchMessages({
            limit: 1,
            around: quote
        }).then(messages => {
            const fm = messages.first();
            message.reply("a", {
                embed: {
                    color: 0x3cb8c9,
                    author: {
                        name: `${fm.author.username}#${fm.author.discriminator}`,
                        icon_url: fm.author.avatarURL
                    },
                    description: fm.content
                }
            })
        });
    }
        }
    if (message.content === prefix + 'menu') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["Here is what is on the menu for tonight:" +
        "\n`chinese noodles, fried rice, salad, chicken sandwich, subway sandwich, Ava, hamburger, cheeseburgers, pizza`" +
        "\n " +
        "\nIn order to order a specified food from the menu shown above, you must order using the numbers listed in order. For example, to order `fried rice`, use `?order 2`."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order') {
            if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Captain') && !message.member.roles.exists('name', 'Mage'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply("In order for you to order a food item from the menu, use `?menu` and proceed. For example, to order `chinese noodles`, use `?order 1`.").then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 1') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["You have ordered `chinese noodles` from the menu. A fortune cookie came along with it. It lists your lucky numbers." +
        "\n " +
                        "\nYou taste the chinese noodles..it tastes great! You decide you'll try it out sometime again." +
                        "\nLucky Numbers: " + Math.floor((Math.random() * 100) + 1) + ", " + Math.floor((Math.random() * 100) + 1) + ", " + Math.floor((Math.random() * 100) + 1) + ", " + Math.floor((Math.random() * 100) + 1) + ""]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 2') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        const dec = ["You decide to pull out the hair", "You decide to keep the hair in and proceed with your order"]
        const dec2 = ["You decide that you won't be eating that food item for a while.", "You decide that you might try it another time."]
        message.reply(["You have ordered `fried rice` from the menu. You look on your plate and notice that a piece of hair came along with it. Yuck.." +
        "\n " +
                        "\n" + dec[Math.floor((Math.random() * dec.length))] + "." +
                        "\nYou notice that it feels a bit.. frozen. " + dec2[Math.floor((Math.random() * dec2.length))] + "."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 3') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["You have ordered `salad` from the menu-- Croutons with a side of french fries on your plate. Best comes first. You think that the french fries are lacking something.." +
            "\n " +
            "\nYou stare at the french fries for a good few seconds.. until **one pops out at you and starts eating your brains!** You scream in terror, until you notice it was all just a figment of your imagination."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 4') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["You have ordered a `chicken sandwich` from the menu. The chicken sandwich comes with a side of a small bowl of salad." +
            "\n " +
            "\nYou look over and notice the ranch dressing by your side that you didn't notice at first and decide to put it in your sandwich. You later regret doing this because the ranch is pooring out of the sandwich like a waterfall."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 5') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        const size = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        message.reply(["You have ordered a `subway sandwich` from the menu. You measure the length of the sandwich and it turns out to be a " + size[Math.floor((Math.random() * size.length))] + " inch sandwich." +
            "\n " +
            "\nYou take a bite out of the sandwich. It tastes amazing! You take another bite and you start drooling over how amazing it tastes. A few seconds later, you wake up from your dream and notice that you never actually ate the sandwich."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 6') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply("You have ordered `Ava` from the menu. It's been reserved.").then(m => m.delete(10000))
    }
    if (message.content === prefix + 'order 7') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["You have ordered a `hamburger` from the menu with a side of french fries and Cola. You take a bite out of the burger.." +
                "\n " +
                "\nit tastes dry. You know automatically why it tastes dry and you decided to blame Donald Trump for it. Your reasoning behind this is because he sells dry burgers at his towers.."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + 'order 8') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["You have ordered a `cheese burger` from the menu. You take a bite out of the cheeseburger and all the cheese fell out and melted.." +
            "\n " +
            "\n..trash."]).then(m => m.delete(10000))
    }
    if (message.content === prefix + 'order 9') {
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.delete();
        message.reply(["You have ordered a `pizza` from the menu. It's melting cheese fills your mouth with excitement. You start to drool. You take a bite out of its crusty, delicious cheese.." +
            "\n " +
            "\nA few seconds later, one of the toppings fly up into the air into your mouth and makes you choke. You see Ava in the corner laughing at you, because she knows something that you already don't. You wake up."]).then(m => m.delete(100000))
    }
    if (message.content === prefix + "meme") {
        if (message.channel.id !== '231560933808275477' && message.channel.id !== '242847580415983617')
            return message.reply("You either must be in the <#231560933808275477> or <#242847580415983617> channel in order to continue this request.")
        const links = ([
            "http://quotesnhumor.com/wp-content/uploads/2016/12/25-Hilarious-Dank-Memes-5-Hilarious-Memes.jpg",
            "http://quotesnhumor.com/wp-content/uploads/2016/12/25-Hilarious-Dank-Memes-9-Hilarious-Memes.jpg",
            "http://cdn.ebaumsworld.com/mediaFiles/picture/2447028/85242324.jpg",
            "https://pbs.twimg.com/profile_images/681300331746164736/lb1iVkr2.jpg",
            "https://img.memesuper.com/0edb5f9af38dc58972916ecc8250d151_1000-images-about-dank-memes-what-is-dank-memes_380-430.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-u9Muv9JBNtS6ty0PnnqtqUz4Uz-cITYZFEJH-vcSTkVcYASQfg.png",
            "https://s-media-cache-ak0.pinimg.com/originals/0f/7e/b6/0f7eb639a5ee4243ce53f745af9a2beb.jpg",
            "http://dankmemedungeon.weebly.com/uploads/4/3/6/1/43615877/735157.gif",
            "https://pbs.twimg.com/media/C3XrS4kXAAM3Lia.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/05/97/f6/0597f62e58787af3b586f656e9ad6fe2.jpg",
            "https://pics.onsizzle.com/Instagram-Describes-thefunnyintrovert-perfectly-b81774.png",
            "https://s-media-cache-ak0.pinimg.com/736x/dd/08/85/dd0885bdd16146a2e99bdb2ba86a92dc--stupid-stuff-fun-stuff.jpg",
            "https://thechive.files.wordpress.com/2016/11/dank-memes-that-will-make-you-slightly-exhale-while-staring-at-your-screen-35-photos-215.jpg",
            "http://quotesnhumor.com/wp-content/uploads/2016/12/25-Hilarious-Dank-Memes-8-Hilarious-Memes.jpg",
            "https://pics.onsizzle.com/what-is-life-but-the-moments-spent-between-browsing-dank-2452746.png"
        ])
        var item = links[~~(Math.random() * links.length)];
        message.reply("Loading result..").then(m => m.delete(500));
        message.delete();
        message.channel.sendFile(item).then(m => m.delete(200000))
    }
    if (message.content.startsWith(prefix + 'say')) {
        var msg = message.content.replace("?say", "")
        if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        message.channel.sendMessage(msg)
        message.delete();
    }
    if (message.content === prefix + 'serverinfo') {
        if (message.channel.id == '222576236587778048') return;
        if (message.channel.id !== '231560933808275477')
            return message.reply("You must be in the <#231560933808275477> in order to continue this request.")
        if (!message.guild || !message.member) return;
        const embed = new Discord.RichEmbed()
            .setColor(0xff000)
            .setFooter('Information on ' + message.guild.name)
            .setThumbnail(message.guild.iconURL)
            .setTimestamp()
            .addField('Owner',
                message.guild.owner.displayName + '#' + message.guild.owner.user.discriminator)
            // field 2
            .addField('Owner ID',
                message.guild.owner.id)
            // f3
            .addField('Region',
                message.channel.guild.region)
            // f4
            .addField('Server ID',
                message.guild.id)
            // f5
            .addField('Members', message.guild.members.size, true)
            // f6
            .addField('Joined',
                message.guild.joinedAt)
            // f7
            .addField('Channel Topic',
                message.channel.topic ? message.channel.topic : 'No channel topic!')
        message.delete();
        message.channel.sendEmbed(embed).then(m => m.delete(10000))
    }
    if (message.content.toLowerCase().includes('ava sucks')) {
        if (message.channel.id == '222576236587778048') return;
        message.react("â€¼")
        message.react("ðŸ’¢")
    }
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith('trump')) {
        if (message.channel.id == '222576236587778048') return;
        return message.channel.sendMessage(message.author + ", Y-You're fired.").then(m => m.delete(10000)).then(message.react("ðŸ”¥"))
    }
    if (message.content.toLowerCase().includes('my name is ')) {
        if (message.channel.id == '222576236587778048') return;
        message.react("ðŸ‘Â")
    }
    if (message.content.toLowerCase().includes('my name sucks')) {
        if (message.channel.id == '222576236587778048') return;
        message.react("ðŸ‘Ž")
    }
    if (message.content.toLowerCase().startsWith('i love porn')) {
                if (message.channel.id == '222576236587778048') return;
        message.reply(`No, you don't. <:raype:261874634859872257>`).then(m => m.delete(10000))
    }
    if (message.content.toLowerCase().startsWith('i love anime')) {
                if (message.channel.id == '222576236587778048') return;
        message.reply(`Yes, you do.`).then(m => m.delete(10000))
    }
    if (message.content.toLowerCase().startsWith('i hate anime')) {
                if (message.channel.id == '222576236587778048') return;
        message.reply(`<:fry:256250113536688138>`).then(m => m.delete(10000))
    }
    if (message.content === prefix + 'ridea') {
        message.delete();
        if (message.channel.id !== '224037917696196608') return message.reply("You must be in the <#224037917696196608> channel to proceed!").then(m => m.delete(10000))
        message.delete();
        const adjectives = ["crystal", "floating", "eternal-dusk", "sunset", "snowy", "rainy", "sunny", "chaotic", "peaceful", "colorful", "gooey", "fiery", "jagged", "glass", "vibrant", "rainbow", "foggy", "calm", "demonic", "polygonal", "glistening", "sexy", "overgrown", "frozen", "dark", "mechanical", "mystic", "steampunk", "subterranean", "polluted", "bleak", "dank", "smooth", "vast", "pixelated", "enigmatic", "illusionary", "sketchy", "spooky", "flying", "legendary", "cubic", "moist", "oriental", "fluffy", "odd", "fancy", "strange", "authentic", "bustling", "barren", "cluttered", "creepy", "dangerous", "distant", "massive", "exotic", "tainted", "filthy", "flawless", "forsaken", "frigid", "frosty", "grand", "grandiose", "grotesque", "harmful", "harsh", "hospitable", "hot", "jaded", "meek", "weird", "awkward", "silly", "cursed", "blessed", "drought-stricken", "futuristic", "ancient", "medieval", "gothic", "radioactive"]
        const locations = ["river", "island", "desert", "forest", "jungle", "plains", "mountains", "mesa", "cave", "canyon", "marsh", "lake", "plateau", "tundra", "volcano", "valley", "waterfall", "atoll", "asteroid", "grove", "treetops", "cavern", "beach", "ocean", "heavens", "abyss", "city", "crag", "planetoid", "harbor", "evergreen", "cabin", "hill", "field", "ship", "glacier", "estuary", "wasteland", "clouds", "chamber", "ruin", "tomb", "park", "closet", "terrace", "hotairballoon", "shrine", "room", "swamp", "road", "path", "gateway", "school", "building", "vault", "pool", "pit", "temple", "lagoon", "prison", "harem", "mine", "catacombs", "rainforest", "laboratory", "library", "stadium", "museum", "mansion", "carnival", "amusementpark", "farm", "factory", "castle", "spaceship", "space station", "cafe", "theater", "island", "hospital", "ruins", "bazaar"]
        const characterAdjectives = ["sturdy", "helpless", "young", "rugged", "odd-looking", "amusing", "dynamic", "exuberant", "quirky", "awkward", "elderly", "adolescent", "'ancient'", "odd", "funny-looking", "tall", "short", "round", "blind"]
        const characterTypes = ["Marksman", "Adventurer", "Pokemon Trainer", "Pokemon", "Dragonkin", "Chef", "Businessman", "Kitsune", "Youkai", "...thing", "Archer", "Taxi Driver", "Dentist", "Demon", "Paladin", "Writer", "Diety", "Spy", "Goverment Agent", "Farmer", "Teacher", "Warrior", "Athlete", "Artist", "Assassin", "Beast", "Journalist", "Designer", "Doctor", "Vampire", "Time Traveller", "Alien", "Butler", "PoliceOfficer", "Toymaker", "Student", "Photographer", "Mage", "Computer Programmer", "Person"]
        const perks = ["kind of heart", "powerful", "handsome", "ambitious", "amiable", "brave", "rational", "witty", "honest", "agile", "athletic", "quick on their feet", "assertive", "fearless", "intelligent", "persistent", "philosophical", "pioneering", "quiet", "wealthy", "not afraid to voice their opinion", "quick-witted", "lucky", "friendly", "neat", "sympathetic", "sincere", "mysterious", "loyal", "trustworthy", "imaginative", "gentle"]
        const debuffs = ["sly", "unclean", "smelly", "obnoxiously loud", "fond of 'tricks'", "fond of 'games'", "fond of 'jokes'", "prone to 'accidentally' taking others' things", "cocky", "prone to falling over", "prone to bad luck at times", "clingy", "foolish", "fussy", "greedy", "gullible", "impatient", "inconsiderate", "lazy", "moody", "obsessive", "narrow-minded", "patronizing", "resentful", "unreliable", "vague", "weak-willed", "egotistical", "sensitive", "Grammar Nazi-ish", "'bitchy'", "emotionally scarred", "overly-serious", "volatile", "morally scrupulous", "lacking of empathy", "prone to overreacting", "overbearing", "prone to panic attacks", "self-pessimistic"]
        const genres = ["Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Philosophical", "Romance", "Saga", "Satire", "Science Fiction", "Thriller"]
        const roles = ["Protagonist", "Antagonist", "Major character", "Minor character"]
        // genders is on top of the code
        message.delete(); {
            var partA = adjectives[Math.floor(Math.random() * adjectives.length)];
            var partB = locations[Math.floor(Math.random() * locations.length)];
            var partC = genres[Math.floor(Math.random() * genres.length)];
            var partD = genres[Math.floor(Math.random() * genres.length)];
            var partE = roles[Math.floor(Math.random() * roles.length)];
            var partF = gender[Math.floor(Math.random() * gender.length)];
            var partG = characterTypes[Math.floor(Math.random() * characterTypes.length)];
            var partH = characterAdjectives[Math.floor(Math.random() * characterAdjectives.length)];
            var partI = perks[Math.floor(Math.random() * perks.length)];
            var partJ = perks[Math.floor(Math.random() * perks.length)];
            var partK = perks[Math.floor(Math.random() * perks.length)];
            var partL = debuffs[Math.floor(Math.random() * debuffs.length)];
            message.channel.sendMessage("**Setting: **" + "A " + partA + " " + partB + " | **Genres: **" + partC + ", " + partD +
                " | " + "**" + partE + "**" + ": A " + partF + " " + partH + " " + partG + ". The characters positive features include " +
                partI + ", " + partJ + " and " + partK + "." + " Unfortunately, the character is rather " + partL + ".");

        }
    }
    const foodlinks = (["https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_440,q_80,w_945/v1/clients/rockford/header_restaurant_asian_shogun_589914cb-632b-4969-8204-0bd095a5722b.jpg", "https://s-media-cache-ak0.pinimg.com/originals/18/af/e1/18afe1c04853455ba0461ce5421b4812.jpg", "https://cbsla.files.wordpress.com/2012/05/yen-ching.gif", "https://fthmb.tqn.com/T9HNlXQw9xFzTyXHYbifTA8EPic=/4752x3168/filters:no_upscale()/about/beef-and-vegetable-stir-fry-165955462-5834b0523df78c6f6a6af185.jpg", "https://assets3.thrillist.com/v1/image/1508772/size/tmg-slideshow_l.jpg", "http://mustseeplaces.eu/wp-content/uploads/2016/11/asian-food-1-480x270.jpg", "https://img.grouponcdn.com/deal/6A9GMy58qcYagGNz29n7/Xk-2048x1229/v1/c700x420.jpg", "http://brightcove.vo.llnwd.net/e1/pd/1033249144001/1033249144001_1185347635001_ari-origin05-arc-130-1317142320522.jpg?pubId=1033249144001", "https://cdn.pixabay.com/photo/2015/09/22/15/37/chinese-food-951889_960_720.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/03/ee/ea/9a/new-asian-food.jpg", "http://chinatownsaintpeter.com/images/banner02.jpg", "http://www.remotelands.com/themed/slide/cuisine/slide_02.jpg", "https://lilluna.com/wp-content/uploads/2016/01/chinese-food-1.jpg", "http://www.yummyyummyaz.com/images/banner04.jpg", "http://www.sandiegomagazine.com/images/2012/november/asian_food_guide/web_thai_food.jpg", "http://www.cheatsheet.com/wp-content/uploads/2015/04/eating-chinese-food-general-tsos-chicken1.jpg", "http://www.seriouseats.com/images/2014/11/20141002-lon-mens-noodle-house-berlin-wontons-with-chili-oil-giulia-pines.jpg", "https://img.grouponcdn.com/deal/bNcxRLd6xJTtRmvoeUSoV7/ichiban_sushi_bar__sammys_asian_cuisine-2048x1229/v1/c700x420.jpg", "https://fthmb.tqn.com/UrPhntrgsuExn82qcKfeJt8Rqk8=/2733x3644/filters:fill(auto,1)/about/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg", "http://www.sandiegomagazine.com/images/2012/november/asian_food_guide/web_japanese_food.jpg", "http://www.kuoni.co.uk/upload/inspiration/migrated/eur-8-2.jpg", "http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/87/78/2/pichn4jhf.jpg", "https://orogoldcosmetics.files.wordpress.com/2015/07/orogold-must-try-foods-of-europe-pizza-italy.jpg", "http://www.exploration-online.com/wp-content/uploads/2014/05/crabmeat-pasta-672x372.jpg"])
    if (message.content === prefix + 'food') {
        if (message.channel.id !== '231560933808275477' && message.channel.id !== '260683758359805952')
            return message.reply("You either must be in the <#231560933808275477> or <#260683758359805952> channel in order to continue this request.")
        var item = foodlinks[~~(Math.random() * foodlinks.length)];
        message.delete();
        message.reply(item).then(m => m.delete(200000))
    }
    if (message.content.startsWith(prefix + 'party')) {
        message.delete();
        if (message.channel.id !== '231560933808275477')
            return message.reply("You must be in the <#231560933808275477> channel in order to continue this request.")
        var user = message.mentions.users.first();
        if (!user)
            return message.reply("In order to request a party with a user, use `?party [user]` and I shall carry out the request.")
        user.sendMessage(["`" + message.author.username + "#" + message.author.discriminator + "` requests to party with you. In order to approve the party, use `?approveparty`." +
    "\nYou see juice on the left of you. In order to drink the juice and proceed, use `?drinkjuce`."]);
        message.reply("Successfully requested `" + user.username + "#" + user.discriminator + "` to party with you!")
    }
    if (message.channel.type === 'dm') {
        if (message.content === prefix + 'drinkjuice') {
            message.reply(["You drank the juice. :tada:" +
            "\nYou see a few tables nearby. Sit down or stay standing up? In order to sit down, use `?sitdown`."]);
        }
    }
    if (message.channel.type === 'dm') {
        if (message.content === prefix + 'leaveparty') {
            message.reply("That concludes the party!")
        }
    }
    if (message.channel.type === 'dm') {
        if (message.content === prefix + 'sitdown') {
            message.reply(["You have sat down." +
                "\nTo your left, there is a party going on. To your right, there is a birthday celebration. In order to go to the party, use `?gotoparty`. In order to go to the birthday celebration, use `?gotobirthday`."]);
        }
    }
    if (message.channel.type === 'dm') {
        if (message.content === prefix + 'gotoparty') {
            message.reply(["You decided to go to the party." +
                "\nThere are too many little kids there. You decide to leave and go to the birthday celebration."]);
        }
    }
    if (message.channel.type === 'dm') {
        if (message.content === prefix + 'gotobirthday') {
            message.reply(["You have decided to go to the birthday." +
                "\nThere are teenagers and adults there, no kids. You feel more comfortable. In order to leave the party, use `?leaveparty`."]);
        }
    }
    if (message.channel.type === 'dm') {
        if (message.content === prefix + 'approveparty') {
            message.reply(["You have partied with the latest person that requested you to party. :+1:"]);
        }
    }
    if (message.content.toLowerCase() === prefix + 'help') {
        message.author.sendMessage(["" +
        "\n```asciidoc" +
        "\n= All commands must be prefixed with '?' =" +
        "\n= Fun =" +
        "\nping   ::       ping the bot" +
        "\n8ball  ::       ask the 8ball a question" +
        "\nrate   ::       rate anything" +
        "\ncat    ::       random cat picture or gif" +
        "\nmeme   ::       random meme" +
        "\nfood   ::       random food picture" +
        "\nridea  ::       story idea (setting, genre, character)" +
        "\nparty  ::       party with a mentioned user" +
        "\nmatch  ::       percentage of a mentioned users and your relationship" +
        "\nkiss   ::       kiss a mentioned user" +
        "\nstab   ::       stab a mentioned user" +
        "\nf      ::       pay your respects!" +
        "\n= ..and other secrets =```"]);
        message.react("ðŸ‘Œ")
    }
    if (message.content === prefix + 'f') {
        message.reply("*A-Arigato senpai.. " + Math.floor((Math.random() * 20) + 1) + " pets received..*").then(m => m.delete(10000))
    }
    if (message.content.startsWith(prefix + 'stab')) {
        var user = message.mentions.users.first();
        if (!user)
            return message.reply("Who do you want to stab? ").then(m => m.delete(10000))
        message.reply("You have stabbed `" + user.username + "#" + user.discriminator + "`!").then(m => m.delete(10000))
        message.react("ðŸ˜±")
    }
    const pornlinks = ["8muses.com", "studiofow.com", "luscious.net,", "brazzers.com", "xxxvideos.com", "xhamster.com", "newgrounds.com", "hentai.ms", "hentaihaven.com", "youporn.com", "nubilefilms.com", "realityking.com", "pornhub.com", "redtube.com", "meatspin.com", "spankbang.com"]
    if (pornlinks.some(pornlinks => message.content.includes(pornlinks))) {
        message.delete();
        message.guild.channels.find('name', 'nsfw-moderation-room').sendMessage(":warning: " + message.author + " has posted a link leading to pornographic content in the channel <#" + message.channel.id + ">! :warning:")
        return message.reply("I advise you not send any links that leads to sexual content, also I recommend reading <#225014421976645632> before you get **banned**.").then(m => m.delete(10000))
    }
    if (message.content === `<:ara:310244084986019840>`) {
        if (message.channel.id == '222576236587778048') return;
    message.react(message.guild.emojis.find(e=>e.name === "ara")); 
    }
        if (message.content.startsWith(prefix + 'av')) {
            if (message.channel.id == '222576236587778048') return;
            if (message.channel.id !== '222661531031175168')
            if (message.author.id !== '213836424170962944')
        if (!message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        var user = message.mentions.users.first();
        if (!user)
            message.reply("Your avatar URL is " + message.author.avatarURL).then(m => m.delete(20000))
            message.delete();
        if (user)
            message.reply("`" + user.username + "#" + user.discriminator + "`'s avatar URL is " + user.avatarURL).then(m => m.delete(20000))
            message.delete();
    }
    if (message.content.startsWith(prefix + 'event create')) {
        message.delete();
        const events = ["", "", "", "", "", "", "", "", "", "", "", "",]
        var event = message.content.replace("?event create", "")
    var description = event.split('|')
    var joined = message.content === prefix + 'event join' + description[0]
        if (!message.member.roles.exists('name', 'Game Master') && !message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        if (!event)
            return message.reply("Usage: `?event create [event name] | [event description]`. Try to keep the event name short! :+1:").then(m => m.delete(10000)).then(message.delete())
            if (!event.includes(" | ")) return message.reply("Are you sure you have the description of the event in there? You must seperate the topic of the event and the description of the event using `|`. (shift + backslash)")
        if (!description)
            return message.reply("").then(m => m.delete(1000)).then(message.delete())
                        if (joined)
            message.reply("You have joined the event " + description[0])
        message.guild.channels.find('name', 'announcements').sendMessage(["" + message.author.username + "#" + message.author.discriminator + " has created an event `" + description[0] + "`! The event is about: `" + description[1] + "`."]);
        message.delete();
        message.reply(["You have successfully set up an event." +
        "\nI have listed the event information in the <#224032470134161408> channel. :+1:"]).then(m => m.delete(10000)).then(message.delete())
    }
    if (message.content.startsWith(prefix + 'setgame')) {
        var game = message.content.replace("?setgame", "")
        if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        if (!game)
            return message.reply("In order to change my playing status, you must use `?setgame [game]`; come on! Don't be shy.")
        bot.user.setGame(game);
        message.reply("Successfully set my playing status to `" + game + "`!")
    }
    if (message.content.toLowerCase().includes("can i be staff")) {
        if (message.channel.id == '222576236587778048') return;
        message.reply("No, you cannot!").then(m => m.delete(10000))
        message.react("ðŸš«")
    }
    /* Really large command incoming.
    And.. lots of googling for milisecond things.. */
if (message.content.startsWith(prefix + 'remind')) {
    message.delete();
    var hur = message.content === '?remind'
    var then = message.content === prefix + 'remind' && 'remind ' + '1m' && '5m' && '15m' && '20m' && '25m' && '30m' && '35m' && '40m' && '45m' && '50m' && '55m' && '60m' && '1h'
    var wws = message.content.replace('1m')
    var msg = message.content.replace("?remind ", "")
    if (!msg)
         return message.reply("For now, I can only remind you from 1 minute to 1 hour. In order for me to remind you, for example, use `?remind 30m Math Homework`.")
    var wws = message.content.startsWith(prefix + 'remind 1m ')
    var msg0 = message.content.replace("?remind 1m ", "")
    if (wws) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! One minute ago, you told me to remind you to: `' + msg0 + '`.')}, 60000)
         message.reply("I'll be reminding you in one minute!")
    }
    var wws1 = message.content.startsWith(prefix + 'remind 5m ')
    var msg1 = message.content.replace("?remind 5m ", "")
        if (wws1) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Five minutes ago, you told me to remind you to: `' + msg1 + '`.')}, 300000)
         message.reply("I'll be reminding you in five minutes!")
    }
        var wws2 = message.content.startsWith(prefix + 'remind 10m ')
    var msg2 = message.content.replace("?remind 10m ", "")
            if (wws2) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Ten minutes ago, you told me to remind you to: `' + msg2 + '`.')}, 600000)
         message.reply("I'll be reminding you in ten minutes!")
                }
                    var wws3 = message.content.startsWith(prefix + 'remind 15m ')
    var msg3 = message.content.replace("?remind 15m ", "")
        if (wws3) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Fifteen minutes ago, you told me to remind you to: `' + msg3 + '`.')}, 900000)
         message.reply("I'll be reminding you in fifteen minutes!")
    }
        var wws4 = message.content.startsWith(prefix + 'remind 20m ')
    var msg4 = message.content.replace("?remind 20m ", "")
        if (wws4) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Twenty minutes ago, you told me to remind you to: `' + msg4 + '`.')}, 1200000)
         message.reply("I'll be reminding you in twenty minutes!")
    }
    var wws5 = message.content.startsWith(prefix + 'remind 25m ')
    var msg5 = message.content.replace("?remind 25m ", "")
        if (wws5) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Twenty-five minutes ago, you told me to remind you to: `' + msg5 + '`.')}, 1500000)
         message.reply("I'll be reminding you in twenty minutes!")
    }
                var wws6 = message.content.startsWith(prefix + 'remind 30m ')
    var msg6 = message.content.replace("?remind 30m ", "")
    if (wws6) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Thirty minutes ago, you told me to remind you to: `' + msg6 + '`.')}, 1800000)
         message.reply("I'll be reminding you in thirty minutes!")
    }
                var wws7 = message.content.startsWith(prefix + 'remind 35m ')
    var msg7 = message.content.replace("?remind 35m ", "")
        if (wws7) {
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Thirty-five minutes ago, you told me to remind you to: `' + msg7 + '`.')}, 2100000)
         message.reply("I'll be reminding you in thirty minutes!")
    }
                var wws8 = message.content.startsWith(prefix + 'remind 40m ')
    var msg8 = message.content.replace("?remind 40m ", "")
    if (wws8) {
         message.reply("I'll be reminding you in forty minutes!")
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Forty minutes ago, you told me to remind you to: `' + msg8 + '`.')}, 2400000)
    }
                var wws9 = message.content.startsWith(prefix + 'remind 45m ')
    var msg9 = message.content.replace("?remind 45m ", "")
        if (wws9) {
         message.reply("I'll be reminding you in forty-five minutes!")
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Forty-five minutes ago, you told me to remind you to: `' + msg9 + '`.')}, 2700000)
    }
                var wws10 = message.content.startsWith(prefix + 'remind 50m ')
    var msg10 = message.content.replace("?remind 50m ", "")
            if (wws10) {
         message.reply("I'll be reminding you in fifty minutes!")
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Fifty minutes ago, you told me to remind you to: `' + msg10 + '`.')}, 3000000)
    }
                var wws11 = message.content.startsWith(prefix + 'remind 55m ')
    var msg11 = message.content.replace("?remind 55m ", "")
                if (wws11) {
         message.reply("I'll be reminding you in fifty-five minutes!")
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Fifty-five minutes ago, you told me to remind you to: `' + msg11 + '`.')}, 3300000)
    }
                var wws12 = message.content.startsWith(prefix + 'remind 60m' || '?remind 1h')
    var msg12 = message.content.replace("?remind 60m ", "" || "?remind 1h", "")
                    if (wws12) {
         message.reply("I'll be reminding you in sixty minutes! (1 hour)")
        bot.setTimeout(function(){ message.author.sendMessage('â° Ring, ring! Sixty minutes ago, you told me to remind you to: `' + msg12 + '`.')}, 3600000)
    }
}
if (message.content === prefix + 'remindsyntax') {
    message.reply("The syntax for my remind command is given by an example. `?remind 30m Do Math homework`.")
}
if (message.content === '&help') {
    if (message.channel.id == '222576236587778048') return;
    message.delete();
    if (message.author.id !== '213836424170962944')
        if (!message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
        return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
message.author.sendMessage(["```asciidoc" +
        "\n= Moderation =" +
        "\nkick   ::       kick a mentioned user" +
        "\nban    ::       ban a mentioned user" +
        "\nmute   ::       mute a mentioned user" +
        "\nunmute ::       unmute a mentioned user" +
        "\nunban  ::       unban a banned users ID" +
        "\nwarn   ::       warns a mentioned user (reason required)" +
        "\nprune  ::       prune messages from 1-100```" +
        "\n```asciidoc" +
        "\n= Secrets =" +
        "\ntrump  ::       you're fired." +
        "\nhillary::       you're hired." +
        "\nmy name is ::   thumbs up!" +
        "\nmy name sucks :: thumbs down.```" +
        "\n```asciidoc" +
        "\n= Events =" +
        "\nevent create  :: create an event" +
        "\nevent phcreate :: create a photo submission contest" +
        "\nevent stop     :: name an event to stop" +
        "\nevent winner   :: [wip]: name the announcer of an event```"]);
}
    if (message.content.startsWith(prefix + 'event phcreate')) {
        var thot = message.author
        message.delete();
        const events = ["", "", "", "", "", "", "", "", "", "", "", "",]
        var event = message.content.replace("?event phcreate", "")
        var deadline = event.split('|')
        if (!message.member.roles.exists('name', 'Game Master') && !message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
            if (!message.guild.channels.find('name', 'announcements')) return message.reply("An error occured.")
        if (!event)
            return message.reply("What photo are you looking for? When is the deadline for this event? Example: `?event phcreate cutest dog picture | This Saturday`.").then(m => m.delete(10000)).then(message.delete())
            if (!event.includes(" | ")) return message.reply("Are you sure you have the deadline of the contest in there? You must seperate what you want for the contest and the deadline of the contest using `|`. (shift + backslash)")
        if (!deadline)
            return message.reply("When is the deadline for this event?").then(m => m.delete(1000)).then(message.delete())
        message.guild.channels.find('name', 'announcements').sendMessage(["@here Attention! " + message.author + " has created a **photo submission contest** and they are looking for: `" + deadline[0] + "`! Please DM this user one picture for each entry. **If a user sends you something inappropriate, report it as soon as possible!** The deadline for this event is on" + deadline[1] + " ðŸ“¦"]);
        message.delete();
        message.reply(["You have successfully set up an photo submission contest!" +
        "\nI have listed the event information in the <#224032470134161408> channel. :+1:"]).then(m => m.delete(10000)).then(message.delete())
    }
if (message.content.startsWith(prefix + 'event stop')) {
    message.delete();
    var se = message.content.replace("?event stop", "")
        if (!message.member.roles.exists('name', 'Game Master') && !message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
    if (!se)
        return message.reply("What is the name of the event or contest you want to stop?")
    message.guild.channels.find('name', 'announcements').sendMessage("âš  " + message.author + " has **stopped** event `" + se + "`!")
    message.reply("Successfully stopped event! :+1:")
}
if (message.content.startsWith(prefix + 'event winner')) {
    var user = message.mentions.users.first();
    var winner = message.content.replace("?event winner ", "")
    var hurr = winner.split(" | ")
        if (!message.member.roles.exists('name', 'Game Master') && !message.member.roles.exists('name', 'Creative Director') && !message.member.roles.exists('name', 'Warden') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Evil Wizard') && !message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain'))
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
    if (!user)
        return message.reply("Please mention the winner of the contest or event! Usage: `?event winner [mentioned user] | [event name]`.")
    if (!hurr)
        return message.reply("Are you sure you included the mentioned user on the right of your command?")
    message.guild.channels.find('name', 'announcements').sendMessage(":information_source: Congratulations to " + user + " for winning the contest **" + hurr[1] + "**! :tada:")
}
if (message.content.startsWith(prefix + 'csay')) {
            if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Arbiter') && !message.member.roles.exists('name', 'Moderator') && !message.member.roles.exists('name', 'Captain')) return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        var msg = message.content.replace("?csay", "")
        if (!msg)
            return message.reply("What do you want me to say in general?")
    message.guild.channels.find('name', 'general').sendMessage(msg)
    message.reply(":+1:")
}
if (message.content.startsWith(prefix + 'asay')) {
            if (!message.member.roles.exists('name', 'Mage') && !message.member.roles.exists('name', 'Captain')) return message.reply("U-Uhm.. s-sorry! Y-You can't use that..").then(m => m.delete(10000))
        var msg = message.content.replace("?asay", "")
        if (!msg)
            return message.reply("What do you want me to say in club-ava?")
    message.guild.channels.find('name', 'club-ava').sendMessage(msg)
    message.reply(":+1:")
}
if (message.content.startsWith(prefix + 'choose')) {
    var wtc = message.content.replace('?choose', '')
    var spr = wtc.split(",")
    if (!wtc)
        return message.reply("From what choices would you like me to pick from? ðŸ™")
    if (!wtc.includes(","))
        return message.reply("Are you sure you seperated your choices for me to pick with commas? `,`")
        message.reply(["Hmm, I'm deciding to pick.." +
        "\n**" + spr[Math.floor((Math.random() * spr.length))] + "**"]);
    
}
if (message.content === prefix + 'joined') {
    var guild = message.member.guild
    if (!user)
    message.reply("**" + message.author.username + "#" + message.author.discriminator + "** joined at `" + message.member.joinedAt + "`!")
}
if (message.content.startsWith(prefix + 'smug')) {
        message.delete()
            .catch(console.error);
        var imgNo = Math.floor(Math.random() * 58) + 1;
        message.channel.sendMessage("http://smug.moe/smg/" + imgNo + ".png")
    }
    if (message.content.startsWith(prefix + 'dm')) {
        if (message.channel.type == 'dm') return;
        var user = message.mentions.users.first();
        var msg = message.content.split(' ').slice(2).join(' ');
        var perms = message.member.roles.exists('name', 'Mage') && message.member.roles.exists('name', 'Captain')
        if (!perms)
            return message.reply("U-Uhm.. s-sorry! Y-You can't use that..")
        if (!user)
            return message.reply("The correct usage is `?dm [user] [message]`.")
        if (!msg)
            return message.reply("The correct usage is `?dm [user] [message]`.")
        user.sendMessage("You've received a message from " + message.author + " that says:\n**" + msg + "**!\n\nIf this is a harmful comment, please tag one of the `Captain` or the `Mage` role on the server.")
        message.reply("I have successfully sent " + user + " a message saying:\n**" + msg + "**!")
    }
        if (message.content.startsWith(prefix + 'report')) {
        message.delete();
        var things = message.content.replace("?report ", "")
        var user = message.mentions.users.first();
        var link = things.split(" | ")
        var msg = message.content.split(' ').slice(2).join(' ')
        if (!user) return;
        if (!msg) return;
        if (!things.includes(" | ")) return message.reply("Are you sure you seperated your link with a `|` character?")
        if (!link) return;
        message.guild.channels.find('name', 'nsfw-moderation-room').sendMessage("ðŸ“‹ **[RPT]** Report by: " + message.author + " Reported: " + user + "\n`" + link[0] + "`\n**Screenshot(s)**:\n" + link[1] + "")
        message.channel.sendMessage("Thanks! I've sent this information to the staff.");
        }
});

bot.login(token);