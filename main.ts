//% weight=70 icon="\uf044" color=#EC7505
namespace serialmidi
{
    let bufr = pins.createBuffer(3);
    //% blockId=send_note_on 
    //% block = "sendNoteOn %channel|%note|%velocity"
    export function sendNoteOn(channel:number, note:number, velocity:number): void
    {
        bufr.setNumber(NumberFormat.Int8LE, 0, 144 + channel);
        bufr.setNumber(NumberFormat.Int8LE, 1, note);
        bufr.setNumber(NumberFormat.Int8LE, 2, velocity);
        serial.writeBuffer(bufr);
    }
    
    //% blockId=send_midi_cc
    //% block = "send CC %channel|%controller|%value"
    export function sendCC(channel: number, controller: number, value: number): void
    {
        bufr.setNumber(NumberFormat.Int8LE, 0, 176 + channel);
        bufr.setNumber(NumberFormat.Int8LE, 1, controller);
        bufr.setNumber(NumberFormat.Int8LE, 2, value);
        serial.writeBuffer(bufr);
    }  
}