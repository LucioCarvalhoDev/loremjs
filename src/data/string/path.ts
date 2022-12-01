const wordPool = `consectetur adipiscing elit. Nam sunt et in animo praecipua quaedam et in corpore, quae cum leviter agnovit, tum discernere incipit, ut ea, quae prima data sunt natura, appetat asperneturque contraria. Quid enim mihi potest esse optatius quam cum Catone, omnium virtutum auctore, de virtutibus disputare? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Duo Reges: constructio interrete. Eamne rationem igitur sequere, qua tecum ipse et cum tuis utare, profiteri et in medium proferre non audeas? Una voluptas e multis obscuratur in illa vita voluptaria, sed tamen ea, quamvis parva sit, pars est eius vitae, quae posita est in voluptate. Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Si verbum sequimur, primum longius verbum praepositum quam bonum. Ea denique omni vita, quae in una virtute consisteret, illam vitam, quae etiam ceteris rebus, quae essent secundum naturam, abundaret, magis expetendam non esse, sed magis sumendam. Quibus expositis facilis est coniectura ea maxime esse expetenda ex nostris, quae plurimum habent dignitatis, ut optimae cuiusque partis, quae per se expetatur, virtus sit expetenda maxime. Quae enim mala illi non audent appellare, aspera autem et incommoda et reicienda et aliena naturae esse concedunt, ea nos mala dicimus, sed exigua et paene minima. Ne id quidem, nisi multa annorum intercesserint milia, ut omnium siderum eodem, unde profecta sint, fiat ad unum tempus reversio. Honestum igitur id intellegimus, quod tale est, ut detracta omni utilitate sine ullis praemiis fructibusve per se ipsum possit iure laudari. Pomponius Luciusque Cicero, frater noster cognatione patruelis, amore germanus, constituimus inter nos ut ambulationem postmeridianam conficeremus in Academia, maxime quod is locus ab omni turba id temporis vacuus esset. Summum autem bonum si ignoretur, vivendi rationem ignorari necesse est, ex quo tantus error consequitur, ut quem in portum se recipiant scire non possint. Teneamus enim illud necesse est, cum consequens aliquod falsum sit, illud, cuius id consequens sit, non posse esse verum.`
    .replaceAll(/[A-Z.,?!]/g, "")
    .split(" ")

// console.log(wordPool)
export default function generatePath() {
    const templates = [
        "/home",
        "",
        "~",
        ".",
        ".."
    ]

    let path = templates[Math.floor(Math.random() * templates.length)];
    for (let i = Math.floor(Math.random() * 6) + 1; i > 0; i--) {
        path += "/" + wordPool[Math.floor(Math.random() * wordPool.length)]
    }
    return path;

}