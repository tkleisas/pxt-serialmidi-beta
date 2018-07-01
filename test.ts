// tests go here; this will not be compiled when this package is used as a library
basic.forever(() => {
    serialmidi.sendNoteOn(1, 32, 127);
    serialmidi.sendCC(1, 1, 100);
})