const express = require('express');

const app = express();

app.set('json spaces', 1)

const faker = require('faker')
const adr = faker.address
const anm = faker.animal
const com = faker.commerce
const comp = faker.company
const db = faker.database
const dtype = faker.datatype
const dt = faker.date
const fin = faker.finance
const git = faker.git
const hck = faker.hacker
const hlp = faker.helpers
const img = faker.image
const int = faker.internet
const lorem = faker.lorem
const name = faker.name
const ph = faker.phone
const rd = faker.random
const sys = faker.system
const vh = faker.vehicle

app.get('/', (req, res) => {
  res.send({Note:"This api uses faker to generate false information. Any misuse will not be tolerted. To get started, simply query the /generate endpoint.",onemoreNote: "The developer is not responsible for the package giving wrong results. Blame the package coder."})
});

app.get('/generate', (req, res) => {
  res.send({
    categories: ["address","animal","commerce","company","database","datatype","date","finance","git","hacker","helpers","image","internet","lorem","name","phone","random","system","vehicle"],note:"Just query this url with /:category"
  })
})

app.get('/generate/:catagory', (req, res) => {
  const p = req.params.catagory
  try {
    if (p === "address") {
    res.send({zipCode: adr.zipCode(),
zipCodeByState: adr.zipCodeByState(),
city: adr.city(),
cityPrefix: adr.cityPrefix(),
citySuffix: adr.citySuffix(),
cityName: adr.cityName(),
streetName: adr.streetName(),
streetAddress: adr.streetAddress(),
streetSuffix: adr.streetSuffix(),
streetPrefix: adr.streetPrefix(),
secondaryAddress: adr.secondaryAddress(),
county: adr.county(),
country: adr.country(),
countryCode: adr.countryCode(),
state: adr.state(),
stateAbbr: adr.stateAbbr(),
latitude: adr.latitude(),
longitude: adr.longitude(),
direction: adr.direction(),
cardinalDirection: adr.cardinalDirection(),
ordinalDirection: adr.ordinalDirection(),
nearbyGPSCoordinate: adr.nearbyGPSCoordinate(),
timeZone: adr.timeZone()
})
  } 
  else if(p === "animal") {
    res.send({dog: anm.dog(),
cat: anm.cat(),
snake: anm.snake(),
bear: anm.bear(),
lion: anm.lion(),
cetacean: anm.cetacean(),
horse: anm.horse(),
bird: anm.bird(),
cow: anm.cow(),
fish: anm.fish(),
crocodilia: anm.crocodilia(),
insect: anm.insect(),
rabbit: anm.rabbit(),
type: anm.type()})
  } 
  else if(p === "commerce") {
    res.send({
      color: com.color(),
department: com.department(),
productName: com.productName(),
price: com.price(),
productAdjective: com.productAdjective(),
productMaterial: com.productMaterial(),
product: com.product(),
productDescription: com.productDescription()
    })
  } 
  else if(p === "company") {
    res.send({
      suffixes: comp.suffixes(),
companyName: comp.companyName(),
companySuffix: comp.companySuffix(),
catchPhrase: comp.catchPhrase(),
bs: comp.bs(),
catchPhraseAdjective: comp.catchPhraseAdjective(),
catchPhraseDescriptor: comp.catchPhraseDescriptor(),
catchPhraseNoun: comp.catchPhraseNoun(),
bsAdjective: comp.bsAdjective(),
bsBuzz: comp.bsBuzz(),
bsNoun: comp.bsNoun()

    })
  } 
  else if(p === "database") {
    res.send({
      column: db.column(),
type: db.type(),
collation: db.collation(),
engine: db.engine()
    })
  } 
  else if(p === "datatype") {
    res.send({
      number: dtype.number(),
float: dtype.float(),
datetime: dtype.datetime(),
string: dtype.string(),
uuid: dtype.uuid(),
boolean: dtype.boolean(),
hexaDecimal: dtype.hexaDecimal(),
json: dtype.json(),
array: dtype.array()
    })
  } 
  else if(p === "date") {
    res.send({
      past: dt.past(),
future: dt.future(),
between: dt.between(),
betweens: dt.betweens(),
recent: dt.recent(),
soon: dt.soon(),
month: dt.month(),
weekday: dt.weekday()
    })
  } 
  else if (p === "finance") {
    res.send({
      account: fin.account(),
accountName: fin.accountName(),
routingNumber: fin.routingNumber(),
mask: fin.mask(),
amount: fin.amount(),
transactionType: fin.transactionType(),
currencyCode: fin.currencyCode(),
currencyName: fin.currencyName(),
currencySymbol: fin.currencySymbol(),
bitcoinAddress: fin.bitcoinAddress(),
litecoinAddress: fin.litecoinAddress(),
creditCardNumber: fin.creditCardNumber(),
creditCardCVV: fin.creditCardCVV(),
ethereumAddress: fin.ethereumAddress(),
iban: fin.iban(),
bic: fin.bic(),
transactionDescription: fin.transactionDescription()
    })
  } 
  else if (p === "git") {
    res.send({
      branch: git.branch(),
commitEntry: git.commitEntry(),
commitMessage: git.commitMessage(),
commitSha: git.commitSha(),
shortSha: git.shortSha()
    })
  } 
  else if(p === "hacker") {
    res.send({
      abbreviation: hck.abbreviation(),
adjective: hck.adjective(),
noun: hck.noun(),
verb: hck.verb(),
ingverb: hck.ingverb(),
phrase: hck.phrase()

    })
  } 
  else if (p === "helpers") {
    res.send({
      randomize: hlp.randomize(),
slugify: hlp.slugify(),
replaceSymbolWithNumber: hlp.replaceSymbolWithNumber(),
replaceSymbols: hlp.replaceSymbols(),
replaceCreditCardSymbols: hlp.replaceCreditCardSymbols(),
repeatString: hlp.repeatString(),
regexpStyleStringParse: hlp.regexpStyleStringParse(),
shuffle: hlp.shuffle(),
mustache: hlp.mustache(),
createCard: hlp.createCard(),
contextualCard: hlp.contextualCard(),
userCard: hlp.userCard(),
createTransaction: hlp.createTransaction()
    })
  } 
  else if (p === "image") {
    res.send({image: img.image(),
avatar: img.avatar(),
imageUrl: img.imageUrl(),
abstract: img.abstract(),
animals: img.animals(),
business: img.business(),
cats: img.cats(),
city: img.city(),
food: img.food(),
nightlife: img.nightlife(),
fashion: img.fashion(),
people: img.people(),
nature: img.nature(),
sports: img.sports(),
technics: img.technics(),
transport: img.transport(),
dataUri: img.dataUri()})
  } 
  else if (p === "internet") {
    res.send({
      avatar: int.avatar(),
email: int.email(),
exampleEmail: int.exampleEmail(),
userName: int.userName(),
protocol: int.protocol(),
httpMethod: int.httpMethod(),
url: int.url(),
domainName: int.domainName(),
domainSuffix: int.domainSuffix(),
domainWord: int.domainWord(),
ip: int.ip(),
ipv6: int.ipv6(),
port: int.port(),
userAgent: int.userAgent(),
color: int.color(),
mac: int.mac(),
password: int.password()
    })
  } 
  else if (p === "lorem") {
    res.send({
      word: lorem.word(),
words: lorem.words(),
sentence: lorem.sentence(),
slug: lorem.slug(),
sentences: lorem.sentences(),
paragraph: lorem.paragraph(),
paragraphs: lorem.paragraphs(),
text: lorem.text(),
lines: lorem.lines()

    })
  } 
  else if (p === "name") {
    res.send({
      firstName: name.firstName(),
lastName: name.lastName(),
middleName: name.middleName(),
findName: name.findName(),
jobTitle: name.jobTitle(),
gender: name.gender(),
prefix: name.prefix(),
suffix: name.suffix(),
title: name.title(),
jobDescriptor:  name.jobDescriptor(),
jobArea: name.jobArea(),
jobType: name.jobType()
    })
  } 
  else if(p === "phone") {
    res.send({
      phoneNumber: ph.phoneNumber(),
phoneNumberFormat: ph.phoneNumberFormat(),
phoneFormats: ph.phoneFormats()
    })
  } 
  else if(p === "random") {
     res.send({
arrayElement: rd.arrayElement(),
arrayElements: rd.arrayElements(),
objectElement: rd.objectElement(),
word: rd.word(),
words: rd.words(),
image: rd.image(),
locale: rd.locale(),
alpha: rd.alpha(),
alphaNumeric: rd.alphaNumeric()
     })
  } 
  else if(p === "system") {
    res.send({
      fileName: sys.fileName(),
commonFileName: sys.commonFileName(),
mimeType: sys.mimeType(),
commonFileType: sys.commonFileType(),
commonFileExt: sys.commonFileExt(),
fileType: sys.fileType(),
fileExt: sys.fileExt(),
directoryPath: sys.directoryPath(),
filePath: sys.filePath(),
semver: sys.semver()
    })
  } 
  else if(p === "vehicle") {
    res.send({
      vehicle: vh.vehicle(),
manufacturer: vh.manufacturer(),
model: vh.model(),
type: vh.type(),
fuel: vh.fuel(),
vin: vh.vin(),
color: vh.color(),
vrm: vh.vrm(),
bicycle: vh.bicycle()
    })
  } 
  else {
    res.send({error:"Invalid category"})
  }
  } 
  catch(err) {
    res.send({
      error: "Something broke. If you think it's not your mistake, please join this server and open a ticket. https://discord.gg/VqA92g8"
    })
  }
 })

app.listen(3000, () => {
  console.log('server started');
});
