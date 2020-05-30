
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version("1.1.0")


// Creat add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'The content of the Body',
            demandOption: true,
        }



    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
        
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing the note!!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: function() {
        console.log('Listing the notes !!!!')
    }
})

// Create read command 
yargs.command({
    command: 'read',
describe: 'reading the notes',
handler: function(){
    console.log('reading the notes !!!!!!!')
}
})

yargs.parse()
// console.log(yargs.argv)

//sdbxshdsjb
sxsdsd

