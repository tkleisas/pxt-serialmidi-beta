//% weight=70 icon="\uf044" color=#EC7505
namespace serialmidi
{
    let bufr = pins.createBuffer(3);
    //% blockId=sendNoteOn 
    //% block = "send Note On | channel %channel|note %note|velocity %velocity"
    export function sendNoteOn(channel:number, note:number, velocity:number): void
    {
        bufr.setNumber(NumberFormat.Int8LE, 0, 144 + channel);
        bufr.setNumber(NumberFormat.Int8LE, 1, note);
        bufr.setNumber(NumberFormat.Int8LE, 2, velocity);
        serial.writeBuffer(bufr);
    }
    
    //% blockId=sendCC block="send CC channel %channel controller %controller value %value"
    export function sendCC(channel: number, controller: number, value: number): void {
        bufr.setNumber(NumberFormat.Int8LE, 0, 176 + channel);
        bufr.setNumber(NumberFormat.Int8LE, 1, controller);
        bufr.setNumber(NumberFormat.Int8LE, 2, value);
        serial.writeBuffer(bufr);
    }  
}